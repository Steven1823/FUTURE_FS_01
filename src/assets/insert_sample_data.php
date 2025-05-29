<?php
require_once 'config.php';

$pdo = getDBConnection();
if (!$pdo) {
    die("Database connection failed");
}

try {
    // Insert sample project
    $stmt = $pdo->prepare("INSERT INTO projects (title, description, image_url, technologies, github_url, live_url) 
                          VALUES (:title, :description, :image_url, :technologies, :github_url, :live_url)");
    $stmt->execute([
        ':title' => 'Sample Project',
        ':description' => 'This is a sample project description',
        ':image_url' => 'sample.jpg',
        ':technologies' => 'PHP, MySQL, HTML, CSS',
        ':github_url' => 'https://github.com/sample',
        ':live_url' => 'https://sample.com'
    ]);
    echo "Sample project inserted successfully<br>";

    // Insert sample message
    $stmt = $pdo->prepare("INSERT INTO messages (name, email, subject, message) 
                          VALUES (:name, :email, :subject, :message)");
    $stmt->execute([
        ':name' => 'John Doe',
        ':email' => 'john@example.com',
        ':subject' => 'Test Message',
        ':message' => 'This is a test message'
    ]);
    echo "Sample message inserted successfully<br>";

    // Insert sample skill
    $stmt = $pdo->prepare("INSERT INTO skills (name, category, proficiency) 
                          VALUES (:name, :category, :proficiency)");
    $stmt->execute([
        ':name' => 'PHP',
        ':category' => 'Backend',
        ':proficiency' => 85
    ]);
    echo "Sample skill inserted successfully<br>";

} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?> 