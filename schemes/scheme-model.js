const db = require('../data/db-config.js');

module.exports = {
    find, 
    findById, 
    findSteps
    
}

function find(){
    return db('schemes')
}

function findById(id){
    return db('schemes')
    .where({ id }) //where always returns an array
    .then(user => {
        if(user){
            return user;
        }else{
            return null;
        }
    })
}

function findSteps(id){
    return db('steps as s')
    .innerJoin('schemes as sc', 's.id', 'sc.scheme_id')
    .where({ scheme_id: id })
    .select('sc.scheme_name as SchemeName', 's.step_number as step_number', 's.instructions as Instructions')
     
}

function add(scheme){

}