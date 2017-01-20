<?
include('kcaptcha/kcaptcha.php');
session_start();
require_once("config.php");
require_once("kcaptcha/util/script.php");

if ($_POST['act']== "y")
{
    if(isset($_SESSION['captcha_keystring']) && $_SESSION['captcha_keystring'] ==  $_POST['keystring'])
    {
        
        if (isset($_POST['posName']) && $_POST['posName'] == "")
        {
         $statusError = "$errors_name";
        }
        elseif (isset($_POST['posEmail']) && $_POST['posEmail'] == "")
        {
         $statusError = "$errors_mailfrom";
        }
        elseif(isset($_POST['posEmail']) && !preg_match("/^([a-z,._,0-9])+@([a-z,._,0-9])+(.([a-z])+)+$/", $_POST['posEmail']))
        {
         $statusError = "$errors_incorrect";

         unset($_POST['posEmail']);
        }
        elseif (isset($_POST['posRegard']) && $_POST['posRegard'] == "")
        {
         $statusError = "$errors_subject";
        }
        elseif (isset($_POST['posText']) && $_POST['posText'] == "")
        {
         $statusError = "$errors_message";
        }

elseif (!empty($_POST))
{   
 $headers  = "MIME-Version: 1.0\r\n";
 $headers .= "Content-Type: $content  charset=$charset\r\n";
 $headers .= "Date: ".date("Y-m-d (H:i:s)",time())."\r\n";
 $headers .= "From: \"".$_POST['posName']."\" <".$_POST['posEmail'].">\r\n";
 $headers .= "X-Mailer: My Send E-mail\r\n";

 mail("$mailto","$subject","$message","$headers");

 unset($name, $posText, $mailto, $subject, $posRegard, $message);

 $statusSuccess = "$send";
}

       }else{
             $statusError = "$captcha_error";
             unset($_SESSION['captcha_keystring']);
        }
}
?>




<div id="q">

<form action="form/form.php" method="post" id="cForm">
<input type="hidden" name="act" value="y" />

<label for="posName"><span class='style29'>Имя:</span></label><br>
<input class="inputIE" type="text" size="50" name="posName" id="posName" style="width:200px; background:#FFFFFF; border:1px; border-color:#9f9e9f; border-style:solid;  height:18px;  font-size:12px; font-stretch:normal; border-radius:10px; -moz-border-radius: 10px; -webkit-border-radius: 10px; padding: 5px;"/>

<label for="posEmail"><br>
<span class='style29'>E-mail:</span></label>
<br>
<input class="inputIE" type="text" size="50" name="posEmail" id="posEmail" style="width:200px; background:#FFFFFF; border:1px; border-color:#9f9e9f; border-style:solid;  height:18px;  font-size:12px; font-stretch:normal; border-radius:10px; -moz-border-radius: 10px; -webkit-border-radius: 10px; padding: 5px;"/>

<label for="posRegard"><br>
<span class='style29'>Тема сообщения:</span></label>
<br>
<input class="inputIE" type="text" size="50" name="posRegard" id="posRegard" style="width:200px; background:#FFFFFF; border:1px; border-color:#9f9e9f; border-style:solid;  height:18px;  font-size:12px; font-stretch:normal; border-radius:10px; -moz-border-radius: 10px; -webkit-border-radius: 10px; padding: 5px;"/>

<label for="posText"><br>
<span class='style29'>Сообщение:</span></label><br>

<textarea class="inputIE" cols="70" rows="7" name="posText" id="posText" style="width:400px; background:#FFFFFF; border:1px; border-color:#9f9e9f; border-style:solid;  height:200px;  font-size:12px; font-stretch:normal; border-radius:10px; -moz-border-radius: 10px; -webkit-border-radius: 10px; padding: 5px;"/></textarea>
<div id="q"><label for="posCaptcha"></label>
<br><img src="http://dmlebedev.ru/form/kcaptcha/index.php?<?php echo session_name()?>=<?php echo session_id()?>"><?php echo $r1; ?><br>
<span class='style29'>Введите код с картинки:</span><br></label>
<input class="inputIE" type="text" size="27" name="keystring" id="keystring" style="width:200px; background:#FFFFFF; border:1px; border-color:#9f9e9f; border-style:solid;  height:18px;  font-size:12px; font-stretch:normal; border-radius:10px; -moz-border-radius: 10px; -webkit-border-radius: 10px; padding: 5px;"/>
</div>
<br>
<div id="q"><label><input class="inputIE" type="submit" name="selfCC" value=" Отправить "/></label>

</form>


<? header ('location:http://dmt-lebedev.ru/#!/page_contacts'); ?>
