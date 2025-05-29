-- Contact Information Table Structure
CREATE TABLE IF NOT EXISTS contact_info (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    linkedin_url VARCHAR(255),
    github_url VARCHAR(255),
    twitter_url VARCHAR(255),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Contact Messages Table Structure
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    subject VARCHAR(100),
    message TEXT,
    status ENUM('new', 'read', 'replied') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample Contact Information
INSERT INTO contact_info (name, email, phone, address, linkedin_url, github_url, twitter_url) VALUES
('Steven kingoro wanjala', 'stevekingoro@gmail.com', '254768388357', 'Nairobi, Kenya', 
'https://linkedin.com/in/yourprofile', 
'https://github.com/yourusername', 
'https://twitter.com/yourusername');

-- Sample Contact Messages
INSERT INTO contact_messages (name, email, subject, message) VALUES
('John Doe', 'john@example.com', 'Project Inquiry', 'I would like to discuss a potential project with you.'),
('Jane Smith', 'jane@example.com', 'Job Opportunity', 'We have an opening that matches your skills.'); 