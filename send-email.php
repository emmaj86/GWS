<?php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

// $mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "emma.cody39@gmail.com";
$mail->Password = "Sylv3st3r14!";

$mail->setFrom($email, $name);
$mail->addAddress("emma.cody@hotmail.co.uk");

$mail->Subject = $subject;
$mail->Body = $message;

$mail->send();

header("Location: sent.html");