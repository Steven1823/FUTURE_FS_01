@echo off
echo Copying files to XAMPP htdocs...
xcopy /E /I /Y "%~dp0*" "C:\xampp\htdocs\portfolio\"
echo Files copied successfully!
echo.
echo You can now access your website at:
echo http://localhost/portfolio/
pause 