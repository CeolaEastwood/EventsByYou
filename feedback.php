<?php

//Global Variables
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];//need a preg replce here
$comment = $_POST['comment'];// need a preg replce here

$document_root = $_SERVER['DOCUMENT_ROOT'];
?>

<html>
<body>

<?php

$outputstring = $fname."fname \t".$lname." lname \t".$email." email \t"
                .$comment." comment\t\$";

// open file for appending

@$fp = fopen("$document_root/EventsByYou/feedback.txt", 'ab');

flock($fp, LOCK_EX);
fwrite($fp, $outputstring, strlen($outputstring));
flock($fp, LOCK_UN);
fclose($fp);
?>

Thanks <?php echo $_POST["fname"]; ?><br>
Your feedback is appreciated!

</body>
</html>
