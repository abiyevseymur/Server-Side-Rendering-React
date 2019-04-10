const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')



app.get('/', function (request, response) {
    console.log('Home page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (resp) {
            title = resp.data[1].username;
            // read in the index.html file
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }

                // replace the special strings with server generated strings
                data = data.replace(/\$OG_TITLE/g, title);
                data = data.replace(/\$OG_DESCRIPTION/g, "Home page description");
                result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
                response.send(result);
            });
        })
});

app.get('/brand1', function (request, response) {
    console.log('About page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_TITLE/g, 'About Page');
        data = data.replace(/\$OG_DESCRIPTION/g, "About page description");
        result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
        response.send(result);
    });
});

app.get('/brand2', function (request, response) {
    console.log('Contact page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_TITLE/g, 'Contact Page');
        data = data.replace(/\$OG_DESCRIPTION/g, "Contact page description");
        result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
        response.send(result);
    });
});

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function (request, response) {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));