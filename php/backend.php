<?php
function obtenerDatosUsuario($email) {
    if ($email === "demo@davinci.com.ar") {
        return array(
            array('nombre' => 'Nicolas', 'apellido' => 'Firpo', 'materia' => 'PWA', 'comision' => 'DWM3AV', 'imagen' => 'perfil.jpg')
        );
    } else {
        return array(); 
    }
}

// Manejar la solicitud GET desde la página principal
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Obtener el correo electrónico de la URL
    $email = $_GET["email"];

    // Obtener los datos del usuario
    $datosUsuario = obtenerDatosUsuario($email);

    // Devolver los datos como JSON
    header("Content-Type: application/json");
    echo json_encode($datosUsuario);
    exit();
}
?>
