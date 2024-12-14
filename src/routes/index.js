const { Router } = require('express');
const phraseRouter = require('../phrase/phrase.route');
const authorRouter = require('../author/author.route');

const router = Router();

router.use('/phrases', phraseRouter);
router.use('/authors', authorRouter);

module.exports = router;
