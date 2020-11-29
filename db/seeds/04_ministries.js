exports.seed = function(knex){
    return knex('ministries').del()
        .then(function(){
            return knex('ministries').insert([
                {
                    "name": "Adult Faith Formation",
                    "url": ""
                },
                {
                    "name": "Altar Servers", 
                    "url": ""
                },
                {
                    "name": "Arts and Environment",
                    "url": ""
                },
                {
                    "name": "Charismatic Prayer Group",
                    "url": ""
                }
            ])
        })
}