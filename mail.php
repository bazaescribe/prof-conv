<?php $name = $_POST['name'];
  $company = $_POST['company'];
  $mail = $_POST['mail'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];
  $formcontent="Nombre: $name \n Empresa: $company \n Telefono: $phone \n Correo: $mail \n Message: $message";
  $recipient = "jlrosasb@gmail.com";
  $subject = "Contacto sitio web.";
  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
  echo "Thank You!";
?>
