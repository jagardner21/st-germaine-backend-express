exports.seed = function(knex){
    return knex('videos').del()
        .then(function(){
            return knex('videos').insert([
                {
                    "link_title": "Catholicism Alive: Reflections on the Mass, part 1 (Robert Maekawa)",
                    "url": "https://youtu.be/nOg70D5WqiI"
                },
                {
                    "link_title": "Catholicism Alive: Reflections on the Mass, part 2 (Robert Maekawa)t", 
                    "url": "https://www.youtube.com/watch?v=nHBNgQ5Aly8&feature=youtu.be"
                },
                {
                    "link_title": "The Eucharist (Robert Maekawa)",
                    "url": "http://youtu.be/paXk5_Vn0dY"
                },
                {
                    "link_title": "The Church (Robert Maekawa)",
                    "url": "https://www.youtube.com/watch?v=kWa4yxTPlFc"
                },
                {
                    "link_title": "Purgatory and Indulgences (Robert Maekawa)",
                    "url": "https://youtu.be/CIK8y45B5r4"
                }
            ])
        })
}