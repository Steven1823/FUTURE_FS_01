<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<h2>MySQL Connection Test</h2>";
echo "<style>
    .success { color: green; }
    .error { color: red; }
</style>";

try {
    // Try to connect to MySQL
    $pdo = new PDO("mysql:host=localhost", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "<p class='success'>✅ Successfully connected to MySQL server</p>";
    
    // Check MySQL version
    $version = $pdo->query('SELECT VERSION()')->fetchColumn();
    echo "<p>MySQL Version: <strong>$version</strong></p>";
    
    // Check available databases
    echo "<h3>Available Databases:</h3>";
    $databases = $pdo->query('SHOW DATABASES')->fetchAll(PDO::FETCH_COLUMN);
    echo "<ul>";
    foreach ($databases as $db) {
        echo "<li>$db</li>";
    }
    echo "</ul>";
    
} catch(PDOException $e) {
    echo "<p class='error'>❌ Connection failed: " . $e->getMessage() . "</p>";
    echo "<p>Please check:</p>";
    echo "<ul>";
    echo "<li>Is MySQL running in XAMPP?</li>";
    echo "<li>Is the root password correct?</li>";
    echo "<li>Is port 3306 available?</li>";
    echo "</ul>";
}
?> 