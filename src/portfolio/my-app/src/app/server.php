<?php
$port = 8000;
$dir = __DIR__;

echo "Starting PHP server on port $port...\n";
echo "Document root: $dir\n";
echo "Open your browser and go to: http://localhost:$port\n";

exec("php -S localhost:$port -t $dir");
?> 