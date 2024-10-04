<?php
include('db_connection.php'); // Include database connection file

// Fetch form data
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

// Query to insert new user
$query = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";
if (mysqli_query($conn, $query)) {
    echo "<script>alert('Registration Successful!'); window.location.href='../login.html';</script>";
} else {
    echo "<script>alert('Registration Failed. Try Again!'); window.location.href='../registration.html';</script>";
}

?>
