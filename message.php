<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';
$mail = new PHPMailer(true);

$mail->isSMTP();  // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main SMTP server (replace with your provider's server)
$mail->SMTPAuth = true;                           // Enable SMTP authentication
$mail->Username = 'manel.hamza137@gmail.com';          // SMTP username (replace with your email username)
$mail->Password = 'ukgv dpqe fnkz iohf';          // SMTP password (replace with your email password)
$mail->SMTPSecure = 'ssl';                         
$mail->Port = 465;      
//   get all form values ////////////////////
$nom = $_POST['nom'];
$email = $_POST['email'];
$projet = $_POST['projet'];
$message= $_POST['message'];
if(!empty($email) && !empty($nom) && !empty($projet) && !empty($message)){
if(filter_var($email,FILTER_VALIDATE_EMAIL)){
    $receiver = "manel.hamza137@yahoo.com";
    $subject = "From: $nom , <$email>";
    $body = "Nom: $nom\nEmail: $email\n Projet: $projet\nMessage: $message\n";
    // $sender = "From: $email";
    $mail->setFrom($email, $nom); // Set sender email and name
$mail->addReplyTo($email, $nom); // Allow users to reply to the sender's email

// Send the email
$mail->addAddress($receiver); // Set recipient email
$mail->isHTML(false); // Set email format to plain text (optional)
$mail->Body = $body;
$mail->Subject = $subject;
    if ($mail->send()) {
        echo "Votre message a été envoyé acec succé";
      } else {
        echo "Echec de l'envoi !" . $mail->ErrorInfo;
      }
}else{
    echo "entrez une adress email valid";
}
}else{
    echo "Tous les champs sont obligatoire!";
}

?>