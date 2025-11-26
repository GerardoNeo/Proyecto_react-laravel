<!DOCTYPE html>
<html lang="en">
<head>
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    @viteReactRefresh
    @vite('resources/js/pages/calendario.jsx')
    <title>calendario</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>

<style>
    body{
        height: 100dvh;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        background: #F6F6F6;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #E7E7E7;
        border-radius: 10px; 
        cursor: pointer;
        border: 3px solid #E7E7E7;
    }
</style>