<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<h2>Database Verification</h2>";
echo "<style>
    .success { color: green; }
    .error { color: red; }
    .info { color: blue; }
    table { border-collapse: collapse; width: 100%; margin: 10px 0; }
    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
    th { background-color: #f2f2f2; }
</style>";

try {
    // 1. Check root connection
    echo "<h3>1. Root Connection Test</h3>";
    $root_pdo = new PDO("mysql:host=localhost", "root", "");
    $root_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "<p class='success'>✅ Successfully connected as root</p>";

    // 2. Check database exists
    echo "<h3>2. Database Check</h3>";
    $databases = $root_pdo->query("SHOW DATABASES")->fetchAll(PDO::FETCH_COLUMN);
    if (in_array('portfolio_db', $databases)) {
        echo "<p class='success'>✅ Database 'portfolio_db' exists</p>";
    } else {
        echo "<p class='error'>❌ Database 'portfolio_db' does not exist</p>";
    }

    // 3. Check user exists
    echo "<h3>3. User Check</h3>";
    $users = $root_pdo->query("SELECT user FROM mysql.user")->fetchAll(PDO::FETCH_COLUMN);
    if (in_array('portfolio_user', $users)) {
        echo "<p class='success'>✅ User 'portfolio_user' exists</p>";
    } else {
        echo "<p class='error'>❌ User 'portfolio_user' does not exist</p>";
    }

    // 4. Check tables
    echo "<h3>4. Tables Check</h3>";
    $root_pdo->exec("USE portfolio_db");
    $tables = $root_pdo->query("SHOW TABLES")->fetchAll(PDO::FETCH_COLUMN);
    
    $required_tables = ['projects', 'messages', 'skills'];
    echo "<table>";
    echo "<tr><th>Table Name</th><th>Status</th></tr>";
    foreach ($required_tables as $table) {
        if (in_array($table, $tables)) {
            echo "<tr><td>$table</td><td class='success'>✅ Exists</td></tr>";
        } else {
            echo "<tr><td>$table</td><td class='error'>❌ Missing</td></tr>";
        }
    }
    echo "</table>";

    // 5. Check user permissions
    echo "<h3>5. User Permissions</h3>";
    $permissions = $root_pdo->query("SHOW GRANTS FOR 'portfolio_user'@'localhost'")->fetchAll(PDO::FETCH_COLUMN);
    echo "<pre class='info'>";
    foreach ($permissions as $permission) {
        echo htmlspecialchars($permission) . "\n";
    }
    echo "</pre>";

    // 6. Test portfolio_user connection
    echo "<h3>6. Portfolio User Connection Test</h3>";
    require_once 'config.php';
    $pdo = getDBConnection();
    if ($pdo) {
        echo "<p class='success'>✅ Successfully connected as portfolio_user</p>";
        
        // Show some sample data if exists
        echo "<h3>7. Sample Data Check</h3>";
        foreach ($required_tables as $table) {
            $count = $pdo->query("SELECT COUNT(*) FROM $table")->fetchColumn();
            echo "<p>Records in $table: <strong>$count</strong></p>";
        }
    } else {
        echo "<p class='error'>❌ Failed to connect as portfolio_user</p>";
    }

} catch(PDOException $e) {
    echo "<p class='error'>❌ Error: " . $e->getMessage() . "</p>";
    echo "<h3>Troubleshooting Steps:</h3>";
    echo "<ol>";
    echo "<li>Make sure MySQL server is running</li>";
    echo "<li>Check if root password is correct (default XAMPP has no password)</li>";
    echo "<li>Verify the database and user exist</li>";
    echo "<li>Check user permissions</li>";
    echo "</ol>";
}
?> 