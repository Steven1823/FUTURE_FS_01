-- Projects Table Structure
CREATE TABLE IF NOT EXISTS projects (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    technologies VARCHAR(255),
    project_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample Projects Data
INSERT INTO projects (title, description, image_url, technologies, project_url) VALUES
('E-commerce Website', 'A full-featured e-commerce platform with payment integration', 'images/projects/ecommerce.jpg', 'PHP, MySQL, JavaScript, Bootstrap', 'https://github.com/yourusername/ecommerce'),
('Portfolio Website', 'Personal portfolio showcasing web development projects', 'images/projects/portfolio.jpg', 'HTML, CSS, JavaScript, PHP', 'https://github.com/yourusername/portfolio'),
('Task Management App', 'Web application for managing daily tasks and projects', 'images/projects/taskmanager.jpg', 'React, Node.js, MongoDB', 'https://github.com/yourusername/taskmanager');

-- Add more sample projects as needed 