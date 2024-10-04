<?php
session_start();
include('db_connection.php'); // Include database connection file

// Fetch form data
$email = $_POST['email'];
$password = $_POST['password'];

// Query to check user credentials
$query = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    $_SESSION['email'] = $email;
    header('Location: ../index.html'); // Redirect to home page after successful login
} else {
    echo "<script>alert('Invalid Email or Password!'); window.location.href='../login.html';</script>";
}

?>
