<?php
$nombre=$_POST['name'];
$email=$_POST['email'];
$coment=$_POST['coment'];

$mensaje="Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje.="Su email es: " . $email . "\r\n";
$mensaje.="Mensaje: " . $coment . "\r\n";
$mensaje.="Enviado el " . date('d/m/y',time());

$destinatario='colomacardoza16@gmail.com';
$asunto='Este email fue enviado desde PortafolioJesusColoma.com';

//funcion mail de php
mail($destinatario,$asunto,utf8_decode($mensaje),$header);
//redirecciona al enviar el formulario
header('Location:exito.html');

?>

