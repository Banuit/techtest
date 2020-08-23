<?php
require 'database.php';

$username=$_GET['email'];
$password=$_GET['password'];
if($username!== null && $password!== null)
{
	$sql = "select * from User WHERE email =$username AND password =$password";
	if($result = $db->query($sql))
	{
		$row = $result->fetch_assoc();
		$user = [
		'id' => $row['id'],
		'firstname' => $row['firstname'],
		'lastname' => $row['lastname'],
		'email' => $row['email'],
		'mobile' => $row['mobile'],
		'gender' => $row['gender'],
		'password' => $row['password'],
		'address' => $row['address']
		];
		echo json_encode($user);
	}
	else
	{
		return http_response_code(404);
	}
	
}
else
{
	return http_response_code(400);
}


