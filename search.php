<?php
$conn = new mysqli("localhost", "root", "", "mobeeinfo");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$q = $_GET['q'];
$stmt = $conn->prepare("SELECT name, price, offers FROM phones WHERE name LIKE ?");
$like = "%$q%";
$stmt->bind_param("s", $like);
$stmt->execute();

$result = $stmt->get_result();
$phones = [];

while ($row = $result->fetch_assoc()) {
    $phones[] = $row;
}

echo json_encode($phones);
?>
