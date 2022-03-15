<?php
if (!empty($_POST) && isset($_POST['name'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $info = $_POST['info'];
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    if (empty($ip)) {
        $ip = 'Not found';
    }
    $ua = $_SERVER['HTTP_USER_AGENT'] ?? 'Not found';
    if (empty($name)) {
        throw new \RuntimeException('Name is empty');
        exit();
    }
    if (empty($info)) {
        throw new \RuntimeException('Info is empty');
        exit();
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new \RuntimeException('Email not correct');
        exit();
    }
    $servername = "localhost";
    $username = "root";
    $password = "mike999";
    $db = 'arcana';
// Create connection
    $conn = new \mysqli($servername, $username, $password, $db);

// Check connection
    if ($conn->connect_error) {
        throw new \RuntimeException("Connection failed: " . $conn->connect_error);
    }
    $sql = "INSERT INTO messages (`name`, `email`, `info`, `ip`, `user_agent`) VALUES ('{$name}', '{$email}', '{$info}', '{$ip}', '{$ua}')";
    if ($conn->query($sql)) {
        echo "Saved successfully";
    } else {
        echo '<pre>';
        print_r($conn->error_list);
        echo '</pre>';
    }
    exit();
}
