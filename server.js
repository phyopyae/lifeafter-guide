const express = require('express');

const app = express();

app.use(express.static('./dist/lifeafter-guide'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/lifeafter-guide/'}),
);

app.listen(process.env.PORT || 8080);