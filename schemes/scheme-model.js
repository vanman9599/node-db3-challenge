const db = require('../data/db-config.js');

module.exports = {
    find, 
    findById, 
    findSteps, 
    add, 
    update, 
    remove
    
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
    .innerJoin('schemes as sc', 's.scheme_id', 'sc.id')
    .where({ scheme_id: id })
    .select('sc.scheme_name as SchemeName', 's.step_number as step_number', 's.instructions as Instructions')
     
}

function add(scheme){
    return db('schemes')
    .insert(scheme)
    .then(sch => {
        if(sch){
            return sch;
        }else{
            return null;
        }
    })
}

function update(changes, id){
    return db('schemes')
    .where({ id })
    .update(changes)
    .then(scheme => {
        if(scheme){
            return scheme;
        }else{
            return null;
        }
    })
}

function remove(id){
    return db('schemes')
    .where({ id })
    .del()
    .then(num => {
        if(num){
           return num;
        }else{
            return null;
        }
    })

    
}
