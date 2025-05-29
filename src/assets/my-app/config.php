<?php
// Database configuration
define('DB_HOST', 'localhost');
define('DB_NAME', 'portfolio_db');
define('DB_USER', 'portfolio_user'); // Create a dedicated user instead of root
define('DB_PASS', 'your_secure_password_here'); // Change this to a strong password

// Error reporting settings
error_reporting(E_ALL);
ini_set('display_errors', 0); // Don't display errors to users
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/error.log');

// Database connection function
function getDBConnection() {
    try {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";
        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ];
        
        $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
        return $pdo;
    } catch(PDOException $e) {
        // Log the error instead of displaying it
        error_log("Database connection failed: " . $e->getMessage());
        return null;
    }
}

// Function to add a new project
function addProject($title, $description, $image_url, $technologies, $github_url, $live_url) {
    global $pdo;
    $stmt = $pdo->prepare("INSERT INTO projects (title, description, image_url, technologies, github_url, live_url) 
                          VALUES (:title, :description, :image_url, :technologies, :github_url, :live_url)");
    $stmt->execute([
        ':title' => $title,
        ':description' => $description,
        ':image_url' => $image_url,
        ':technologies' => $technologies,
        ':github_url' => $github_url,
        ':live_url' => $live_url
    ]);
}

// Function to save contact form messages
function saveMessage($name, $email, $subject, $message) {
    global $pdo;
    $stmt = $pdo->prepare("INSERT INTO messages (name, email, subject, message) 
                          VALUES (:name, :email, :subject, :message)");
    $stmt->execute([
        ':name' => $name,
        ':email' => $email,
        ':subject' => $subject,
        ':message' => $message
    ]);
}

// Function to add a new skill
function addSkill($name, $category, $proficiency) {
    global $pdo;
    $stmt = $pdo->prepare("INSERT INTO skills (name, category, proficiency) 
                          VALUES (:name, :category, :proficiency)");
    $stmt->execute([
        ':name' => $name,
        ':category' => $category,
        ':proficiency' => $proficiency
    ]);
}
?> 