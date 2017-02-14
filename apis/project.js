const db = require('../db/db')

function getProjects(req, res, next){
	db.any(`SELECT * FROM projects`)
	.then( data =>{
		res.projects = data;
		next();
	}).catch( error =>{
		console.log('Error ', error);
	});
}

module.exports = {getProjects}