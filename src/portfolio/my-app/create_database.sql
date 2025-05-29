-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS portfolio;

-- Use the database
USE portfolio;

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    technologies VARCHAR(255),
    github_url VARCHAR(255),
    live_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255),
    proficiency INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some sample skills
INSERT INTO skills (name, category, proficiency) VALUES
('HTML5', 'Frontend', 90),
('CSS3', 'Frontend', 85),
('JavaScript', 'Frontend', 80),
('PHP', 'Backend', 75),
('MySQL', 'Database', 80),
('Tailwind CSS', 'Frontend', 85);

-- Insert some sample projects
INSERT INTO projects (title, description, image_url, technologies, github_url, live_url) VALUES
('Portfolio Website', 'Personal portfolio website showcasing my work', 'portfolio.jpg', 'HTML, CSS, PHP, MySQL', 'https://github.com/yourusername/portfolio', 'https://yourportfolio.com'),
('Woodworking Projects', 'Collection of custom furniture pieces', 'furniture.jpg', 'Woodworking, Design', NULL, NULL); 