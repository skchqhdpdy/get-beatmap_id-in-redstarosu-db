const mysql = require('./database')();
const axios = require('axios');

const connection = mysql.init();

mysql.db_open(connection);

connection.query(`SELECT COUNT(*) as count FROM beatmaps`, function (error, countResults, fields){
    if (error){
        console.log(error);
    }

    let count = countResults[0].count
    console.log()
    console.log()
    console.log(`beatmaps count = ${count}`)


    for (let i = 0; i < count; i++) {
        
        connection.query(`SELECT beatmap_id, id FROM beatmaps WHERE beatmap_id NOT IN (0) AND difficulty_ctb NOT IN (0) AND	difficulty_mania NOT IN	(0);`, 
        function (error, results, fields){
            if (error){
                console.log(error);
            }
            
            let dbID = results[i].id
            let bid = results[i].beatmap_id
            console.log(`test = ${dbID}`)
            console.log()
            console.log()
            console.log(`id = ${dbID},  beatmap_id = ${bid}`);
            
            // Make a request for a user with a given ID
            axios.get(`http://old.redstar.moe/letsapi/v1/pp?b=${bid}`)
            .then(function (response) {
                // handle success
                console.log()
                console.log()
                console.log(response.data.song_name);
                console.log(response.data.pp);
                console.log(response.data.message);
                console.log(response.data.status);
            });
    
        });
    }
    
    
})
