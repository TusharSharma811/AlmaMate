<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect input data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $type = htmlspecialchars(trim($_POST['type']));

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
