<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<h2>Database Connection Test</h2>";

try {
    require_once 'config.php';
    
    // Test connection
    $pdo = getDBConnection();
    
    if ($pdo) {
        echo "<p style='color: green;'>✅ Database connection successful!</p>";
        
        // Test messages table
        $stmt = $pdo->query("SHOW TABLES LIKE 'messages'");
        if ($stmt->rowCount() > 0) {
            echo "<p style='color: green;'>✅ Messages table exists</p>";
            
            // Test insert
            $stmt = $pdo->prepare("INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)");
            $result = $stmt->execute(['Test User', 'test@example.com', 'Test Subject', 'Test Message']);
            
            if ($result) {
                echo "<p style='color: green;'>✅ Test message inserted successfully</p>";
                
                // Show all messages
                $messages = $pdo->query("SELECT * FROM messages ORDER BY created_at DESC LIMIT 5")->fetchAll();
                echo "<h3>Last 5 Messages:</h3>";
                echo "<ul>";
                foreach ($messages as $msg) {
                    echo "<li>{$msg['name']} ({$msg['email']}) - {$msg['subject']}</li>";
                }
                echo "</ul>";
            } else {
                echo "<p style='color: red;'>❌ Failed to insert test message</p>";
            }
        } else {
            echo "<p style='color: red;'>❌ Messages table does not exist</p>";
        }
    } else {
        echo "<p style='color: red;'>❌ Database connection failed</p>";
    }
    
} catch (Exception $e) {
    echo "<p style='color: red;'>❌ Error: " . $e->getMessage() . "</p>";
}
?> 