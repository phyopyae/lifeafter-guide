const express = require('express');

const app = express();

app.use(express.static('./dist/lifeafter-food-recipes'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/lifeafter-food-recipes/'}),
);

app.listen(process.env.PORT || 8080);