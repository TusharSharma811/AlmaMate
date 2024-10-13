<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect input data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $event = htmlspecialchars(trim($_POST['event']));
    $guests = (int)$_POST['guests'];

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format");
    }

    $stmt = $db->prepare("INSERT INTO charity_volunteering_rsvps (name, email, event, guests) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("sssi", $name, $email, $event, $guests);
    $stmt->execute();

    echo "Thank you, $name! Your RSVP for the $event has been submitted.";
} else {
    echo "Invalid request.";
}
?>
