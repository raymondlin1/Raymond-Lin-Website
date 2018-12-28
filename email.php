<?php
	if(isset($_POST["submit"]))
	{
		$to = "raymond.lin0226@gmail.com";
		$from = $_POST["email"];
		$name = $_POST["name"];
		$subject = $_POST["subject"];
		$message = $_POST["message"];

		$header = "From:" . $from;
		mail($to, $subject, $message, $header);
		echo "Mail sent";
	}
?>