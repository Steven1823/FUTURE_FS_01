<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<h2>Database Setup Assistant</h2>";

require_once 'config.php';

try {
    // Connect to MySQL without selecting a database
    $pdo = new PDO("mysql:host=" . DB_HOST, DB_USER, DB_PASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create database if it doesn't exist
    $pdo->exec("CREATE DATABASE IF NOT EXISTS " . DB_NAME);
    $pdo->exec("USE " . DB_NAME);

    // Create projects table
    $pdo->exec("CREATE TABLE IF NOT EXISTS projects (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        image_url VARCHAR(255),
        technologies TEXT,
        github_url VARCHAR(255),
        live_url VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )");

    // Create messages table
    $pdo->exec("CREATE TABLE IF NOT EXISTS messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255),
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )");

    // Create skills table
    $pdo->exec("CREATE TABLE IF NOT EXISTS skills (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(255),
        proficiency INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )");

    echo "<p style='color: green; font-weight: bold;'>✅ Database setup completed successfully!</p>";
    echo "<p>Next steps:</p>";
    echo "<ol>";
    echo "<li>Change the password in config.php to a secure password</li>";
    echo "<li>Run check_connection.php to verify the setup</li>";
    echo "</ol>";
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