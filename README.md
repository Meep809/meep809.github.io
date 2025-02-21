<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet">
    <style>
        /* General styles */
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #121212;
            color: #ddd;
            margin: 0;
            padding: 0;
        }

        /* Menu Bar */
        .menu {
            background-color: #333;
            padding: 10px;
            text-align: center;
        }

        .menu a {
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            display: inline-block;
            font-family: 'Orbitron', sans-serif;
            font-size: 18px;
            letter-spacing: 2px;
            transition: background-color 0.3s ease;
        }

        .menu a:hover {
            background-color: #00ff00;
            text-shadow: 0 0 10px #00ff00;
        }

        /* Heading and Paragraph Styling */
        h1, h2 {
            text-align: center;
            color: #00ff00;
            text-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00;
        }

        p, ul {
            color: #ccc;
            font-size: 18px;
        }

        /* Project Links and List */
        ul {
            list-style-type: none;
            padding: 0;
        }

        ul li {
            margin: 10px 0;
        }

        /* Contact Link */
        a {
            color: #00ff00;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        /* Time Machine Effect */
        @keyframes clockMovement {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('clock_image.png') center center no-repeat;
            background-size: 300px;
            opacity: 0.1;
            animation: clockMovement 120s linear infinite;
            pointer-events: none;
        }

        hr {
            border: 1px solid #00ff00;
            width: 80%;
            margin: 20px auto;
        }
    </style>
</head>
<body>
    <div class="menu">
        <a href="https://meep809.github.io/making-a-game-using-chat-gpt/">Car Dodging Cones</a>
        <a href="https://tinyurl.com/githubslope">Game Webpage</a>
        <a href="https://meep809.github.io/slopesim">Slope Simulator</a>
        <a href="https://meep809.github.io/inequalityslopesim">Inequality Graphing</a>
        <a href="https://meep809.github.io/helpdesk">Help Desk</a>
    </div>

    <h1>Welcome to My Homepage</h1>
    <p>Hello! This is my personal homepage. Here, you'll find information about me, my interests, and links to my various projects.</p>

    <hr>

    <h2>Interests</h2>
    <ul>
        <li>Technology</li>
        <li>Computers</li>
        <li>Coding (mainly HTML and some JavaScript)</li>
    </ul>

    <p>The darkside has been <b>discontinued</b>. The URL is no longer functional.</p>

    <hr>

    <p>Contact me: <a href="mailto:sskinner1711@gmail.com">sskinner1711@gmail.com</a></p>
</body>
</html>
