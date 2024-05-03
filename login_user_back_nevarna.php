<?php
session_start();

include('login.php');

$conn = connect();

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['email'], $_POST['password'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // pri OWASP TOP 10 -> injection
    // ' or '1'='1  -> poskus ko napadalec obide avtentikacijo z queryem ki je vedno true, ni vazn kak je v bazi
    // podobn bi bil ' OR '1'='1'--
    // komentar -- prepreči nadaljno izvajanje sql stavka, sam pr men ta ne dela... sem poskusil :P

    $query = "SELECT id FROM uporabnik WHERE email = '$email' AND password = '$password'";
    $result = mysqli_query($conn, $query);

    if (!$result || mysqli_num_rows($result) === 0) {
        $response = ['status' => 'error', 'message' => 'Neki ni prav'];
    } else {
        $row = mysqli_fetch_assoc($result);
        $_SESSION['email'] = $email;
        $response = ['status' => 'success', 'message' => 'Vse je okej'];
    }

    
    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    
    http_response_code(400); 
    echo json_encode(['status' => 'error', 'message' => 'Potreben vpis email in gesla']);
}
?>
