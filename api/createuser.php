<?php
include 'database.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	// Validate.
	if(trim($request['email']) === '' || trim($request['password']) === '')
	{
		return http_response_code(400);
	}
	$fname = mysqli_real_escape_string($db, trim($request['fname']));
	$lname = mysqli_real_escape_string($db, trim($request['lname']));
	$email = trim($request['email']);
	$mobile = trim($request['mobile']);
	$gender = trim($request['gender']);
	$password = trim($request['password']);
	$address = trim($request['address']);
	$sql = "INSERT INTO Users (id, firstname, lastname, mobile, gender, address, password) VALUES (null,'$fname', '$lname', '$email', '$mobile', '$gender', '$password', '$address')";
	if($db->query($sql))
	{
		http_response_code(201);
		$user = [
		'id' => mysqli_insert_id($db),'firstname' => $fname,
		'lastname' => $lname,
		'email' => $email,
		'mobile' => $mobile,
		'gender' => $gender,
		'password' => $password,
		'address' => $address];
		echo json_encode($user);
	}
	else
	{
		http_response_code(422);
	}
}
