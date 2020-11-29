exports.seed = function(knex){
    return knex('links').del()
        .then(function(){
            return knex('links').insert([
                {
                    "link_title": "Catechism of the Catholic Church",
                    "url": "http://www.usccb.org/catechism/text/index.htm"
                },
                {
                    "link_title": "Catholic Book List", 
                    "url": "http://frcoulter.com/books/booklist.html"
                },
                {
                    "link_title": "Catholic Mass Times (Churches and Mass times near you)",
                    "url": "https://catholicmasstime.org/church-near-me/"
                },
                {
                    "link_title": "The Vatican",
                    "url": "http://www.vatican.va/phome_en.htm"
                }
            ])
        })
}