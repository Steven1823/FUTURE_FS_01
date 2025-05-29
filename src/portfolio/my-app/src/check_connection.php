<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Test database connection
try {
    require_once 'config.php';
    
    echo "<h2>Database Connection Test</h2>";
    
    // Test connection
    $pdo = getDBConnection();
    if ($pdo) {
        echo "<p style='color: green;'>✅ Database connection successful!</p>";
        
        // Test database name
        $dbName = $pdo->query("SELECT DATABASE()")->fetchColumn();
        echo "<p>Connected to database: <strong>$dbName</strong></p>";
        
        // Test tables
        echo "<h3>Checking Tables:</h3>";
        $tables = ['projects', 'messages', 'skills'];
        foreach ($tables as $table) {
            $stmt = $pdo->query("SHOW TABLES LIKE '$table'");
            if ($stmt->rowCount() > 0) {
                echo "<p style='color: green;'>✅ Table '$table' exists</p>";
                
                // Count records in each table
                $count = $pdo->query("SELECT COUNT(*) FROM $table")->fetchColumn();
                echo "<p>Records in $table: <strong>$count</strong></p>";
            } else {
                echo "<p style='color: red;'>❌ Table '$table' does NOT exist</p>";
            }
        }
        
        // Test database user
        $user = $pdo->query("SELECT CURRENT_USER()")->fetchColumn();
        echo "<p>Connected as user: <strong>$user</strong></p>";
        
    } else {
        echo "<p style='color: red;'>❌ Database connection failed</p>";
    }
    
} catch (PDOException $e) {
    echo "<p style='color: red;'>❌ Error: " . $e->getMessage() . "</p>";
    echo "<p>Check your config.php file and make sure:</p>";
    echo "<ul>";
    echo "<li>The database server is running</li>";
    echo "<li>The database name is correct</li>";
    echo "<li>The username and password are correct</li>";
    echo "<li>The user has proper permissions</li>";
    echo "</ul>";
}
?> 