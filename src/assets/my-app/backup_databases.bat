@echo off
echo Creating backup of MySQL databases...
cd /d C:\xampp\mysql\bin
mysqldump --all-databases > "C:\xampp\mysql\backup\all_databases_backup_%date:~-4,4%%date:~-10,2%%date:~-7,2%.sql"
echo Backup completed. Check C:\xampp\mysql\backup folder.
pause 