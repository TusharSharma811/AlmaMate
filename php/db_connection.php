<?php
$servername = "localhost";
$username = "root";  // Default for XAMPP
$password = "";      // Default for XAMPP
$dbname = "alumni_platform";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
