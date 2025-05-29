<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<h2>Portfolio Database Verification</h2>";
echo "<style>
    .success { color: green; }
    .error { color: red; }
    table { border-collapse: collapse; width: 100%; margin: 10px 0; }
    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
    th { background-color: #f2f2f2; }
</style>";

try {
    // Connect to MySQL
    $pdo = new PDO("mysql:host=localhost", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Check if portfolio_db exists
    $databases = $pdo->query("SHOW DATABASES")->fetchAll(PDO::FETCH_COLUMN);
    if (in_array('portfolio_db', $databases)) {
        echo "<p class='success'>✅ Database 'portfolio_db' exists</p>";
        
        // Connect to portfolio_db
        $pdo->exec("USE portfolio_db");
        
        // Check tables
        $tables = $pdo->query("SHOW TABLES")->fetchAll(PDO::FETCH_COLUMN);
        $required_tables = ['projects', 'messages', 'skills'];
        
        echo "<h3>Tables Status:</h3>";
        echo "<table>";
        echo "<tr><th>Table Name</th><th>Status</th><th>Record Count</th></tr>";
        
        foreach ($required_tables as $table) {
            if (in_array($table, $tables)) {
                $count = $pdo->query("SELECT COUNT(*) FROM $table")->fetchColumn();
                echo "<tr><td>$table</td><td class='success'>✅ Exists</td><td>$count records</td></tr>";
            } else {
                echo "<tr><td>$table</td><td class='error'>❌ Missing</td><td>-</td></tr>";
            }
        }
        echo "</table>";
        
    } else {
        echo "<p class='error'>❌ Database 'portfolio_db' does not exist</p>";
        echo "<p>Would you like to create it?</p>";
        echo "<form method='post'>";
        echo "<input type='submit' name='create_db' value='Create Database'>";
        echo "</form>";
        
        if (isset($_POST['create_db'])) {
            $pdo->exec("CREATE DATABASE portfolio_db");
            echo "<p class='success'>✅ Database 'portfolio_db' created successfully</p>";
            // Refresh the page
            echo "<script>window.location.reload();</script>";
        }
    }
    
} catch(PDOException $e) {
    echo "<p class='error'>❌ Error: " . $e->getMessage() . "</p>";
}
?> 