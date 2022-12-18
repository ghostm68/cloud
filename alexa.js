/* Google Web Font */
@import url('https://fonts.googleapis.com/css?family=Inter&display=swap');

body {
    font-family: 'Inter', sans-serif;
    color: #222;
    background-color: #000;
    margin: 0;
}

a {
    color: #222;
    text-decoration: none;
}

.navi {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    margin: 0;
    padding: 0;
    z-index: 100;
}

.navi li a {
    font-size: 4em;
    color: #fff;
    position: relative;
}

.navi li a:before {
    position: absolute;
    color: yellowgreen;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
    content: attr(data-text);
    transition: 0.6s;
}

.navi li a:hover:before {
    width: 100%;
}

.photo {
    background-color: #ddd;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url(https://www.jqueryscript.net/dummy/6.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    transition: 0.5s;
}
