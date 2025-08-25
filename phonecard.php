<?php
// Connect to the database
$conn = new mysqli("localhost", "your_username", "your_password", "your_database_name");

// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

// Fetch latest phones
$sql = "SELECT * FROM phones ORDER BY id DESC LIMIT 8";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
while ($row = $result->fetch_assoc()) {
	echo '<div class="col-md-3 mb-4">';
	echo '    <div class="card h-100">';
	echo '        <img src="' . $row['image'] . '" class="card-img-top" alt="Phone Image">';
	echo '        <div class="card-body d-flex flex-column">';
	echo '            <h5 class="card-title">' . htmlspecialchars($row['name']) . '</h5>';
	echo '            <p class="card-text">₹' . number_format($row['price']) . '</p>';
	echo '            <a href="phone.php?id=' . $row['id'] . '" class="btn btn-outline-primary mt-auto">View Details</a>';
	echo '        </div>';
	echo '    </div>';
	echo '</div>';
}
} else {
echo '<p>No phones available at the moment.</p>';
}

$conn->close();
?>
