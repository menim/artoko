<?php
$name=strip_tags($_POST['field-name']);
$email=strip_tags($_POST['field-email']);
$messageText=strip_tags($_POST['field-message']);

$to='mel198629@gmail.com';
$subject='Заказы с сайта ArtOko';

$message ="<html><head><title>Сообщение с сайта sketchbooky.info</title></head><body> 
    <table cellpadding='0' cellspacing='0'>
      <tr><td style='font-size:16px;>Имя</td><td style='font-size:14px;'>". $name ."</td>
      </tr>
      <tr><td style='font-size:16px;>E-mail</td><td style='font-size:14px;'>". $email . "</td>
      </tr>
      <tr><td style='font-size:16px;>Сообщение: </td><td style='font-size:14px;'>". $messageText . "</td> 
      </tr>
    </table>
  </body>
	</html>";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";           

if(/*isset($_POST['field-message'])!== ''  && */preg_match("/^[а-яА-яіІЇїЄєґҐёЁA-Za-z]+$/", $_POST['field-name'])){      
	mail($to,$subject,$message,$headers);
}
header('Location: index.html');
?>
