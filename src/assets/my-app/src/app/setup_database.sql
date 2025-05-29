-- Create the database
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- Create a dedicated user with limited permissions
CREATE USER IF NOT EXISTS 'portfolio_user'@'localhost' IDENTIFIED BY 'your_secure_password_here';
GRANT SELECT, INSERT, UPDATE, DELETE ON portfolio_db.* TO 'portfolio_user'@'localhost';
FLUSH PRIVILEGES;

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