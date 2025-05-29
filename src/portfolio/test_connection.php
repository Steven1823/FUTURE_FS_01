<?php
require_once 'config.php';

// Test database connection
$pdo = getDBConnection();

if ($pdo) {
    echo "Database connection successful!<br>";
    
    // Test if tables exist
    $tables = ['projects', 'messages', 'skills'];
    foreach ($tables as $table) {
        $stmt = $pdo->query("SHOW TABLES LIKE '$table'");
        if ($stmt->rowCount() > 0) {
            echo "Table '$table' exists.<br>";
        } else {
            echo "Table '$table' does NOT exist.<br>";
        }
    }
} else {
    echo "Database connection failed. Check your configuration and error log.";
}
?> 