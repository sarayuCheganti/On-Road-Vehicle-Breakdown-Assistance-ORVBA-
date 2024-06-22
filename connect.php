<?php
    $number=$_POST['number'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$Repeat_Password = $_POST['Repeat_Password'];

	// Database connection
	$conn = new mysqli('localhost','root','','signupdata');
	if($conn->connect_error){
		
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into signupuser(Number, Email, Password, Repeat_Password) values(?, ?, ?, ?)");
		$stmt->bind_param("isss", $number, $email, $password, $Repeat_Password);
		$execval = $stmt->execute();
		echo $execval;
		echo "Signed Up successfully...";
		$stmt->close();
		$conn->close();
	}
?>