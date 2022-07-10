<?php 


$serverName = "localhost";
$username = "root";
$password = "";
$databaseName = "react_php";
$conn = mysqli_connect($serverName,$username,$password,$databaseName);

$recText = $_POST['text'];
$query = "INSERT INTO new_table(texts) VALUES('$recText')";

if(mysqli_query($conn,$query)) {
    echo "Data has been inserted successfully";
}else {
    echo "Error!";
}
