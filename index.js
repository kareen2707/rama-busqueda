var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

//router.get('/question', quizController.question);
//router.get('/check', quizController.check);

// Definicion de rutas de /quizzes
//router.get('/quizzes', quizController.index);
router.get('/question', quizController.question);
router.get('/quizzes', quizController.quizzes);

router.get('/author', function(req, res) {
  res.render('author', { author: 'página de Patricia Bravo Martín' });
});

module.exports = router;
