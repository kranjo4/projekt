<?php
// unset($_SESSION['id']);
session_start();

include('db.php');

    if (isset($_POST['mail'])) {
        $mail = $_POST['mail'];
        $geslo = $_POST['geslo'];

        $sql = "SELECT id FROM uporabnik WHERE mail = '$mail' and geslo = '$geslo'";
        $result = mysqli_query($conn, $sql);
        $count = mysqli_num_rows($result);

        $data= mysqli_fetch_assoc($result);

        if ($count != 0) {
            $_SESSION['id'] = $data['id'];

            echo $_SESSION['id'];
        } 
        else{
            echo "Noup";
        }
    

        
    
    }

?>