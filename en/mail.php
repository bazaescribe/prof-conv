<?php
  $headers = 'From: luis.rosas@red-wolf.com.mx' . "\r\n" .
  'Reply-To: luis.rosas@red-wolf.com.mx' . "\r\n" .
  'X-Mailer: PHP/' . phpversion();

  $to_Email       = "jlrosasb@gmail.com"; //Replace with recipient email address
  $subject        = 'Contacto Proconvenciones'; //Subject line for emails

  $name = $_POST['name'];
  $company = $_POST['company'];
  $message = $_POST['message'];
  $email = $_POST['mail'];
  $phone = $_POST['phone'];

  $mensaje = "Nuevo mensaje de contacto " . $name ." \r\n";
  $mensaje .= "Empresa: " . $company . " \r\n";
  $mensaje .= "Tel.: " . $phone . " \r\n";
  $mensaje .= "Mail: " . $email . " \r\n\n";

  $mensaje .= "- - - " . $message . " \r\n\n";

  $mensaje .= "Enviado el " . date('d/m/Y', time());

  echo "$mensaje";

  $sentMail = @mail($to_Email, $subject, $mensaje, $headers);

?>
