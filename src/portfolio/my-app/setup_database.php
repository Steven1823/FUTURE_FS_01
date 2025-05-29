<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<h2>Database Setup Assistant</h2>";

try {
    // First, try to connect with root user to create database and user
    $root_pdo = new PDO("mysql:host=localhost", "root", "");
    $root_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Create database if it doesn't exist
    $root_pdo->exec("CREATE DATABASE IF NOT EXISTS portfolio_db");
    echo "<p style='color: green;'>✅ Database 'portfolio_db' created or already exists</p>";
    
    // Create user if it doesn't exist
    $root_pdo->exec("CREATE USER IF NOT EXISTS 'portfolio_user'@'localhost' IDENTIFIED BY 'your_secure_password_here'");
    echo "<p style='color: green;'>✅ User 'portfolio_user' created or already exists</p>";
    
    // Grant privileges
    $root_pdo->exec("GRANT ALL PRIVILEGES ON portfolio_db.* TO 'portfolio_user'@'localhost'");
    $root_pdo->exec("FLUSH PRIVILEGES");
    echo "<p style='color: green;'>✅ Privileges granted to 'portfolio_user'</p>";
    
    // Now try to connect with the new user
    require_once 'config.php';
    $pdo = getDBConnection();
    
    if ($pdo) {
        echo "<p style='color: green;'>✅ Successfully connected with 'portfolio_user'</p>";
        
        // Create tables
        $pdo->exec("CREATE TABLE IF NOT EXISTS projects (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            image_url VARCHAR(255),
            technologies VARCHAR(255),
            github_url VARCHAR(255),
            live_url VARCHAR(255),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )");
        echo "<p style='color: green;'>✅ Projects table created or already exists</p>";
        
        $pdo->exec("CREATE TABLE IF NOT EXISTS messages (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            subject VARCHAR(255),
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )");
        echo "<p style='color: green;'>✅ Messages table created or already exists</p>";
        
        $pdo->exec("CREATE TABLE IF NOT EXISTS skills (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            category VARCHAR(255),
            proficiency INT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )");
        echo "<p style='color: green;'>✅ Skills table created or already exists</p>";
        
        echo "<p style='color: green; font-weight: bold;'>✅ Database setup completed successfully!</p>";
        echo "<p>Next steps:</p>";
        echo "<ol>";
        echo "<li>Change the password in config.php to a secure password</li>";
        echo "<li>Run check_connection.php to verify the setup</li>";
        echo "</ol>";
    }
    
} catch(PDOException $e) {
    echo "<p style='color: red;'>❌ Error: " . $e->getMessage() . "</p>";
    echo "<p>Common issues:</p>";
    echo "<ul>";
    echo "<li>Make sure MySQL server is running</li>";
    echo "<li>Check if root user has no password (default XAMPP setup)</li>";
    echo "<li>Verify MySQL service is started</li>";
    echo "</ul>";
}
?> 