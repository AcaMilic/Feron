<?php

if (isset($_POST['name']) && isset($_POST['message']) && isset($_POST['email'])) {
	$name = $_POST['name'];
	$mailFrom = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	
	$mailTo = "office@feron.rs";
	$headers = "Email: ".$mailFrom.".\r\n" ."Message: ".$message.".\r\n" ."Subject: ".$subject;
	$txt = "You have received an e-mail from ".$name.".\n\n";

	mail($mailTo, $txt, $headers);
}

?>
