exports.seed = function(knex){
    return knex('users').del()
        .then(function(){
            return knex('users').insert([
                {
                  "name": "Ernestine Moses",
                  "is_admin": false
                },
                {
                  "name": "Martin Matthews",
                  "is_admin": false
                },
                {
                  "name": "Ball Pruitt",
                  "is_admin": true
                },
                {
                  "name": "Alba Marshall",
                  "is_admin": true
                },
                {
                  "name": "Bernice Townsend",
                  "is_admin": true
                },
                {
                  "name": "Adela Hopper",
                  "is_admin": true
                },
                {
                  "name": "Jewel Dominguez",
                  "is_admin": true
                },
                {
                  "name": "Earnestine Boyle",
                  "is_admin": false
                },
                {
                  "name": "Alissa Herring",
                  "is_admin": false
                },
                {
                  "name": "Ana Saunders",
                  "is_admin": false
                },
                {
                  "name": "Louise Simon",
                  "is_admin": false
                },
                {
                  "name": "Marietta Lowery",
                  "is_admin": false
                },
                {
                  "name": "Hardin Rose",
                  "is_admin": false
                },
                {
                  "name": "Bryant Ruiz",
                  "is_admin": false
                },
                {
                  "name": "Mindy Morin",
                  "is_admin": false
                },
                {
                  "name": "Ramos Ross",
                  "is_admin": true
                },
                {
                  "name": "Ellen Durham",
                  "is_admin": false
                },
                {
                  "name": "John Bridges",
                  "is_admin": true
                },
                {
                  "name": "Payne Warren",
                  "is_admin": false
                },
                {
                  "name": "Rosemary Deleon",
                  "is_admin": true
                },
                {
                  "name": "Clarissa Nelson",
                  "is_admin": true
                },
                {
                  "name": "Tran Good",
                  "is_admin": false
                },
                {
                  "name": "Petersen Horn",
                  "is_admin": false
                },
                {
                  "name": "Jerri Mccullough",
                  "is_admin": true
                },
                {
                  "name": "Loretta Oneil",
                  "is_admin": false
                },
                {
                  "name": "Kelly Lester",
                  "is_admin": false
                },
                {
                  "name": "Joanne Drake",
                  "is_admin": false
                },
                {
                  "name": "Melissa Hays",
                  "is_admin": true
                },
                {
                  "name": "Dawn Kidd",
                  "is_admin": false
                },
                {
                  "name": "Eve Johnson",
                  "is_admin": false
                },
                {
                  "name": "Jennifer Brown",
                  "is_admin": false
                },
                {
                  "name": "Kim Schmidt",
                  "is_admin": true
                },
                {
                  "name": "Hilda Vega",
                  "is_admin": true
                },
                {
                  "name": "Riley Joyner",
                  "is_admin": true
                },
                {
                  "name": "England Waller",
                  "is_admin": false
                },
                {
                  "name": "Estela Booth",
                  "is_admin": true
                },
                {
                  "name": "Alisha Harrison",
                  "is_admin": false
                },
                {
                  "name": "Gallagher Allen",
                  "is_admin": true
                },
                {
                  "name": "Carmella Goodwin",
                  "is_admin": false
                },
                {
                  "name": "Franco Stokes",
                  "is_admin": true
                },
                {
                  "name": "Carroll Hartman",
                  "is_admin": true
                },
                {
                  "name": "Graves Rios",
                  "is_admin": false
                },
                {
                  "name": "Jensen Hoffman",
                  "is_admin": false
                },
                {
                  "name": "Burks Herman",
                  "is_admin": true
                },
                {
                  "name": "Annabelle Burns",
                  "is_admin": true
                },
                {
                  "name": "Annmarie Cleveland",
                  "is_admin": true
                },
                {
                  "name": "Lewis Mcintosh",
                  "is_admin": false
                },
                {
                  "name": "Imelda Harrell",
                  "is_admin": true
                },
                {
                  "name": "Darla Pennington",
                  "is_admin": false
                },
                {
                  "name": "Holcomb Riley",
                  "is_admin": false
                }
              ])
        })
}