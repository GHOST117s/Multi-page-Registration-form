<?php
 $FirstName = $_POST['Fname'];
 $LastName = $_POST['Lname'];
 $Email = $_POST['Email'];
 $MobileNumber = $_POST['mobile'];
 $Gender = $_POST['Gender'];
 $CollageID = $_POST['CollageID'];
 $FatherFirstName = $_POST['FAFname'];
 $FatherLastName = $_POST['FALname'];
 $FatherOccupation = $_POST['OCCFA'];
 $MotherFirstName = $_POST['MOFname'];
 $MotherLastName = $_POST['MOLname'];
 $MotherOccupation = $_POST['OCCMA'];






 $conn = new mysqli('localhost','root','','test');
 if($conn->connect_error){
 die('Connection Failed : '.$conn->connect_error);
 }else{
     $stmt = $conn->prepare("insert into student registeration(
     FirstName,
     LastName,
     Email,
     MobileNumber,
     Gender,
     CollageID,
     FatherFirstName,
     FatherLastName,
     FatherOccupation,
     MotherFirstName,
     MotherLastName,
     MotherOccupation,)values(?,?,?,?,?,?,?,?,?,?,?,?)");

     $stmt->bind_param("sssisissssss",$FirstName,$LastName,$Email,$MobileNumber,$Gender,$CollageID,$FatherFirstName,$FatherLastName,$FatherOccupation,$MotherFirstName,$MotherLastName,$MotherOccupation);
     $stmt->execute();
     $stmt->close();
     $conn->close();



 }

 $FirstName = $_POST['Fname'];

 $conn = new mysqli('localhost','root','','student registeration');
 if($conn->connect_error){
 die('Connection Failed : '.$conn->connect_error);
 }else{
     $stmt = $conn->prepare("insert into student registeration(
     FirstName,)values(?)");

     $stmt->bind_param("s",$FirstName);
     $stmt->execute();
     $stmt->close();
     $conn->close();
 } 

    
      






?>












