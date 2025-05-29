@echo off
echo Moving files to XAMPP htdocs directory...

:: Create portfolio directory if it doesn't exist
if not exist "C:\xampp\htdocs\portfolio" mkdir "C:\xampp\htdocs\portfolio"

:: Copy all necessary files
copy "portfolio.html" "C:\xampp\htdocs\portfolio\portfolio.php"
copy "config.php" "C:\xampp\htdocs\portfolio\"
copy "process_contact.php" "C:\xampp\htdocs\portfolio\"
copy "test_db.php" "C:\xampp\htdocs\portfolio\"
copy "*.jpg" "C:\xampp\htdocs\portfolio\"
copy "*.png" "C:\xampp\htdocs\portfolio\"
copy "Steven_Kingoro_CV.pdf" "C:\xampp\htdocs\portfolio\"

echo Files moved successfully!
echo You can now access your portfolio at: http://localhost/portfolio/portfolio.php
pause 