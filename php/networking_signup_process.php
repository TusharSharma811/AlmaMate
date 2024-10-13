<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect input data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $event = htmlspecialchars(trim($_POST['event']));

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format");
    }

    $stmt = $db->prepare("INSERT INTO event_signups (name, email, event) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $event);
    $stmt->execute();

    echo "Thank you, $name! You have successfully signed up for the event.";
} else {
    echo "Invalid request.";
}
?>
