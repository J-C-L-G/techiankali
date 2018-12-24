const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const DIST_FOLDER = 'dist';
const INDEX = path.join(__dirname, `/${DIST_FOLDER}/index.html`);

express()
    .use(express.static(path.join(__dirname, DIST_FOLDER)))
    .get('*', (req, res) => res.sendFile(INDEX))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));
