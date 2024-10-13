<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect input data
    $name = htmlspecialchars(trim($_POST['name']));
    $story = htmlspecialchars(trim($_POST['story']));

    $stmt = $db->prepare("INSERT INTO alumni_stories (name, story) VALUES (?, ?)");
    $stmt->bind_param("ss", $name, $story);
    $stmt->execute();

    echo "Thank you, $name! Your story has been submitted.";
} else {
    echo "Invalid request.";
}
?>
