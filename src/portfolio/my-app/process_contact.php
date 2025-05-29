<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set up error logging
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/error.log');

error_log("Contact form submission started - " . date('Y-m-d H:i:s'));

require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    error_log("POST data received: " . print_r($_POST, true));
    
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message = $_POST['message'] ?? '';

    // Log the received data
    error_log("Name: $name");
    error_log("Email: $email");
    error_log("Subject: $subject");
    error_log("Message: $message");

    // Validate inputs
    $errors = [];
    if (empty($name)) {
        $errors[] = "Name is required";
    }
    if (empty($email)) {
        $errors[] = "Email is required";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    }
    if (empty($message)) {
        $errors[] = "Message is required";
    }

    if (empty($errors)) {
        try {
            // Get database connection
            $pdo = getDBConnection();
            if (!$pdo) {
                error_log("Database connection failed");
                throw new Exception("Database connection failed");
            }

            error_log("Database connection successful");

            // Save the message
            $stmt = $pdo->prepare("INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)");
            $result = $stmt->execute([$name, $email, $subject, $message]);

            if ($result) {
                error_log("Message saved successfully");
                header('Location: index.php?success=1#contact');
                exit;
            } else {
                error_log("Failed to save message");
                throw new Exception("Failed to save message");
            }
        } catch (Exception $e) {
            error_log("Error saving message: " . $e->getMessage());
            error_log("Stack trace: " . $e->getTraceAsString());
            header('Location: index.php?error=1#contact');
            exit;
        }
    } else {
        error_log("Validation errors: " . implode(", ", $errors));
        header('Location: index.php?error=2&messages=' . urlencode(implode(", ", $errors)) . '#contact');
        exit;
    }
} else {
    error_log("Invalid request method: " . $_SERVER['REQUEST_METHOD']);
    header('Location: index.php#contact');
    exit;
}
?> 