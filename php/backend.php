<?php

// Función para obtener la lista de datos de un usuario
function obtenerDatosUsuario($email) {
    
    if ($email === "demo@davinci.com.ar") {
        return array(
            array('nombre' => 'Nicolas', 'apellido' => 'Firpo', 'materia' => 'PWA', 'comision' => 'DWM3AV')
        );
    } else {
        return array(); 
    }
}

// Función para agregar una nueva película al usuario
function agregarPelicula($email, $nombre, $apellido, $materia, $comision) {
   
    if ($email === "demo@davinci.com.ar") {
        $datosUsuario = obtenerDatosUsuario($email);

        $nuevoDato = array('nombre' => $nombre, 'apellido' => $apellido, 'materia' => $materia, 'comision' => $comision);
        $datosUsuario[] = $nuevoDato;

        // En este punto, deberías guardar $datosUsuario en tu sistema de almacenamiento
        // Puede ser una base de datos, un archivo, etc.

        return true; // Devolvemos true si la operación fue exitosa
    } else {
        return false; // Devolvemos false si el usuario no está registrado
    }
}

// Manejar la solicitud POST desde la página principal
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos de la solicitud POST
    $email = $_POST["email"];
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $materia = $_POST["materia"];
    $comision = $_POST["comision"];

    // Agregar el nuevo dato al usuario
    $exito = agregarPelicula($email, $nombre, $apellido, $materia, $comision);

    // Devolver una respuesta JSON indicando el resultado
    header("Content-Type: application/json");
    echo json_encode(array('exito' => $exito));
    exit();
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
