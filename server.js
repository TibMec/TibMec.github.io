// ! TO DO:

// - Enlever id ou name
// - Modif police
// - ajout catégories (+ de 4 joueurs, ....)
// - Rajouter tags, en arr, ds les obj
// - img en lazy loading
// - better pct pour jgl-spd


let express = require('express') 
let app = express() 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// ******************* création de l'objet à mettre dans '/products/:id' ********************

var data = require('./data');

const getItemById = (isThereSome) => data.games.find(item => item.id === isThereSome);

    // ************************ chemin vers la page produits ************************
app.get('/products/:id', (req, res) => { 
    console.log("I received a request to /:id ")
    // ou use for...in
    // indexOf() ?
    // find() ?
    console.log("Debug, getProductById: ", getItemById(req.params.id));


            const itemFound = getItemById(req.params.id);
        if (itemFound) {
            console.log("Game shown");

            
             // squelette page produit
            res.send(`<html>
                        <head>    
                            <link href="/static/style.css" rel="stylesheet"> 
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        </head>
                        <body> 
                            <div class="section1">  
                                <h1 class='game-name title' style="${itemFound.name_size}"><span class="shady-letter" >${itemFound.name}</span></h1>
                                <div class="box border">
                                        <div id="triangle" class="border">
                                    </div>
                                    <p class="disclaimer border">" ${itemFound.disclaimer} "
                                    </p>
                                </div>
                                <figure id="sockphoto">
                                    <img id="image" loading="lazy" src="${itemFound.picture}"
                                    alt="${itemFound.alt}" style="${itemFound.picture_width}">
                                    <figcaption id="img-caption" style="${itemFound.picture_width}"></figcaption>
                                </figure>
                                <p class="description">${itemFound.description}</p>
                                <br>
                                <h2>Aperçu du jeu</h2>
                                <br>
                                <figure>
                                <img id="image" loading="lazy" src="${itemFound.display}"
                                alt="A Mawumag" style="width:60%">
                                <figcaption id="img-caption">${itemFound.displayDescription}</figcaption>
                                </figure>
                                <br>
                                <p><strong>Nombre de joueurs: </strong> ${itemFound.players}</p>
                                <p><strong>Durée moyenne:</strong> ${itemFound.length}</p>
                                <p> <em>${itemFound.tags}</em></p>
                                <br>
                                <button class="buttons home"><a href="/">Home</a></button>
                                <br>
                            </div>  
                        </body>
                    </html>`)   
        } else {
        console.log("No such item in our games");
    res.send(`
        <html>
        <head>    
            <link href="/static/style.css" rel="stylesheet">    
        </head>
        <body> 
            <div class="section1">  
                <h1><strong>Error </strong><em>404</em></h1>
                <p>Unfortunately we don't have this game ´O_O\` </p>
                <button class="buttons"><a href="/">Home</a></button>
            </div>
        </body>
        </html>`)  
        }
}) 

app.use('/static', express.static(__dirname + '/public')) 
app.listen(4000, () => { 
    console.log("server started") 
}) 