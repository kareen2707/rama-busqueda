var models = require('../models');

//GET /quizzes
/*ports.index = function(req,res, next){
	models.Quiz.findAll().then(function(quizzes){
		res.render('index.ejs',{quizzes:quizzes});
	}).catch(function(error){next(error);});
};*/



// GET /question
exports.question = function(req, res, next){
	models.Quiz.findAll().then(function(quiz){
		if(quiz){
			var search= req.query.search || '';
			res.render('quizzes/question', {
				search:search});
		}
		else {
			throw new Error('No hay preguntas en la BBDD.');
		}
	}).catch(function(error){ next(error);});
};

//GET /quizzes
exports.quizzes =function(req, res, next){
	models.Quiz.findAll({where:{question: {$like: '%'+ req.query.search+'%'}}}).then(function(quiz){
		if(quiz){
			res.render('quizzes/quizzes',{quiz:quiz});}
else{
	throw new Error('No hay preguntas en la BBDD.');
}
}).catch(function(error){ next(error);});
};

/*
// GET /question
exports.question = function(req, res, next){
	res.render('quizzes/question', {question: 'Capital de Italia'});
};

// GET /check
exports.check = function(req, res, next){
	var result = req.query.answer === 'Roma' ?
	res.render('quizzes/question', {question: 'Capital de Italia'});
};
*/