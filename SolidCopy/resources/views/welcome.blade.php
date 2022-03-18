<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="../css/app.css">
    <title>School Management App</title>
</head>
<body>
    <div id="app">
        <router-view/>
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>