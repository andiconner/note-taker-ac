const path = require('path');
const router = require('express').Router();

// to create routes to serve other pages DISPLAY pages
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});


// * wildcard route. It should always come last. It will receive the home page as a response
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;