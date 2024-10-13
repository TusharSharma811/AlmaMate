<?php
if ($_POST["REQUEST_METHOD"] == "POST") {
    // Collect input data
    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
      }
    $name = test_input($_POST['name']);
    $email = test_input($_POST['email']);
    $type = test_input($_POST['type']);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format");
    }

    $stmt = $db->prepare("INSERT INTO mentorship_applications (name, email, type) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $type);
    $stmt->execute();

    echo "Thank you, $name! Your application has been submitted.";
} else {
    echo "Invalid request.";
}
?>
