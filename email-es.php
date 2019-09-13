<?php
$para = "lukasangelim95@gmail.com";

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$mensagem = $_POST['mensagem'];

$assunto = "Contato iDeapps - ". $nome;

$corpo = "<html><body>";
$corpo .= "<h2>Nova mensagem de contato de $nome </h2><br>";
$corpo .= "Email: $email <br> Telefone: $telefone <br> Mensagem: $mensagem";
$corpo .= "<br><br><h3 style='text-align: center;'>© 2019 - 2020 , iDeapps</h3>"; 
$corpo .= "</body></html>";

$email_headers = implode("\n", array("From: $nome", "Reply-To: $email", "Subject: $assunto", "Return-Path: $email", "MIME-Version: 1.0", "X-Priority: 3", "Content-Type: text/html; charset=UTF-8"));


if (!empty($nome) && !empty($email) && !empty($mensagem)) {
    mail($para, $assunto, $corpo, $email_headers);
    $msg = "¡Gracias por contactarnos!";
    echo "<script>alert('$msg');window.location.assign('http://ideappsbr.com/es.html');</script>";
} else {
    $msg = "¡Desafortunadamente algo salió mal! :(";
    echo "<script>alert('$msg');window.location.assign('http://ideappsbr.com/es.html');</script>";
}

