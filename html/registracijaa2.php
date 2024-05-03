<?php
include_once "db.php";

if($_SERVER["REQUEST_METHOD"] =="POST"){

$mail = $_POST["mail"];
$geslo = $_POST["geslo"];

// echo $mail . " " . $geslo;

// $sql = "INSERT INTO uporabnik(mail,geslo) VALUES('$mail','.$geslo.')";

if (mysqli_query($conn, "INSERT INTO uporabnik(mail,geslo) VALUES('$mail','$geslo');")) {
    echo "Uspesno dodano";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }

//   header("Location: ../html/prijava2.php");
}



