<?php
    $name = $_GET["name"];
    $message = $_GET["message"];
    
    $fileName = "data_". $name . ".json";

    $data[] = [$name , $message];

    if (file_put_contents($fileName, json_encode($data))) {
    header("Location: index.html");
    exit;
    } else {
    header("Location: Contact.html");
    exit;
}
?>