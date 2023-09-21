const tableCollect = ["Cinéma/Séries", "Jeux Vidéos", "Livres", "Musique"];
const tableCineScorcese = ["Taxi Driver", "Casino", "Les Affranchis", "Gangs Of New York", 
"Aviator", "Les Infiltrés", "Shutter Island", "Le Loup de Wall Street",];
const tableCineBurton = ["Beetlejuice", "Batman", "Edward aux mains d'argent", "Mars Attack!",
"Sleepy Hollow", "Planète des Singes", "Big Fish","Miss Peregrine & les enfants particuliers"];
const tableDivers = ["Sleepers","Et au milieu coule une rivière",,"Arnaques, Crimes & Botaniques",
"The Gentlemen", "Snatch","Fou(s) d'Irène", "Inglorious Basterds", "Imitation Game", "Oppenheimer"]
const tableSeries = ["Arcane", "Mindhunter","Dans leur regard", "Foundation", "Stranger Things", "Peaky Blinders",
"Sherlock", "Umbrella Academy", "Painkiller", "Only Murders in the Building", "The Walking Dead"]


//.slice()
let favorite = [
    {//1
        titre : "Les Affranchis",
        sortie : 1990,
        Real : "Martin Scorcese",
        Distribution : " Robert DeNiro, Joe Pesci, Ray Liotta",
        genre : "Gangster",
        codeYoutube : "0v0NUEmeqbI", 
        img : "Goodfellas.jpg",
        id : 'popup-1'
    },
    {//2
        titre : "Gangs of New York",
        sortie : 2002,
        Real : "Martin Scorcese",
        Distribution : " Liam Neeson, Leonardo DiCaprio, Daniel Day-Lewis",
        genre : "Drame Historique",
        codeYoutube : "1bjh979vVG0",
        img : "Gangs_of_New_York_Poster.jpg",
        id : 'popup-2'
    },
    {//3
        titre : "Le Loup de Wall Street",
        sortie : 2013,
        Real : "Martin Scorcese",
        Distribution : " Leonardo DiCaprio, Jonah Hill, Margot Robbie",
        genre : "Comédie Biographique",
        codeYoutube : "GT9UfSqBz9o",
        img :"The_Wolf_of_Wall_Street_(2013).jpg",
        id : 'popup-3'
    },
    {//4
        titre : "Batman",
        sortie : 1989,
        Real : "Tim Burton",
        Distribution : " Michael Keaton, Jack Nicholson, Kim Basinger",
        genre : "Fantastique",
        codeYoutube : "ygK7sAavO0c",
        img : "Batman_(1989)_theatrical_poster.jpg",
        id : 'popup-4'
    },
    {//5
        titre : "Edward aux mains d'Argent",
        sortie : 1990,
        Real : "Tim Burton",
        Distribution : " Johnny Depp, Winona Rider, Diane Wiest",
        genre : "Fantastique",
        codeYoutube : "r6IwTHOKLGc",
        img : "edward.jpg",
        id : 'popup-5'
    },
    {//6
        titre : "Big Fish",
        sortie : 2003,
        Real : "Tim Burton",
        Distribution : " Ewan McGregor, Albert Finney, Helena Bonham Carter",
        genre : "Fantastique",
        codeYoutube : "D0kiS4ROWkQ",
        img : "Big_Fish_movie_poster.jpg",
        id : 'popup-6'
    },
    {//7
        titre : "Sleepers",
        sortie : 1996,
        Real : "Barry Levinson",
        Distribution : " Kevin Bacon, Brad Pitt, Robert DeNiro",
        genre : "Drame",
        codeYoutube : "sVdiN_4gBWk",
        img : "Sleepers_(movie_poster).jpg",
        id : 'popup-7'
    },
    {//8
        titre : "Inglorious Basterds",
        sortie : 2009,
        Real : "Quentin Tarantino",
        Distribution : " Christoph Waltz, Melanie Laurent, Brad Pitt",
        genre : "Guerre",
        codeYoutube : "TnyEVXNwySg",
        img : "Inglourious_Basterds_poster.jpg",
        id : 'popup-8'
    },
    {//9
        titre : "Imitation Game",
        sortie : 2014,
        Real : "Morten Tyldum",
        Distribution : " Benedict Cumberbatch, Keira Knightley, Matthieu Goode",
        genre : "Biopic",
        codeYoutube : "YmeEz6cQrwM",
        img : "The_Imitation_Game_(2014).jpg",
        id : 'popup-9'
    },
    {//10
        titre : "Oppenheimer",
        sortie : 2023,
        Real : "Christopher Nolan",
        Distribution : " Cillian Murphy, Emily Blunt, Robert Downey Jr.",
        genre : "Historique",
        codeYoutube : "CoXtvSRpHgM",
        img : "Oppenheimer_(film).jpg",
        id : 'popup-10'
    },
    {//11
        titre : "Mindhunter",
        sortie : 2017,
        Real : "David Fincher",
        Distribution : " Jonathan Groff, Holt McCallany, Anna Torv",
        genre : "Serie : Thriller",
        codeYoutube : "UKyrF5LiaUM",
        img : "Mindhunter.jpg",
        id : 'popup-11',
    },
    {//12
        titre : "The Umbrella Academy",
        sortie : 2019,
        Real : "Steve Blackman",
        Distribution : " Elliot Page, Robert Sheehan, Aidan Gallagher",
        genre : "Serie : Science Fiction",
        codeYoutube : "6ht05Nn41Hg",
        img : "UmbrellaAcademy.png",
        id : 'popup-12',
    }
]

document.body.onload = creerhtmlcollection;

function creerhtmlcollection() {

    const blockCards = document.getElementById("blockCards");
    
    for (let film of favorite) {    // création variableFilm pour chaque élément de la collection favorite
        let newCard = document.createElement('div'); // on créée une variable pour chaque nouvelle carte, qui sera une div
        newCard.setAttribute ("class", "col-12 col-sm-6 col-md-4 col-lg-3 mb-3" ) // on ajoute la class sur le div pour le responsive
        // on rempli le div avec le bon contenu
        newCard.innerHTML = (`
        <!-- Cartes -->
            <div class="card">
                <!-- bootstrapcarte -->
                <img src="Cine-Photos/${film.img}" class="card-img-top" alt="${film.titre}">
                <div class="card-body">
                    <h2 class="card-title">${film.titre}</h2>
                    <p class="year">${film.sortie}</p>
                    <p class="real">${film.Real}</p>
                    <a href="#" class="btn btn-outline-dark btn-sm preview" data-bs-toggle="modal" data-bs-target="#${film.id}"><i class="fa-solid fa-film"></i> Preview</a>
                </div>
            </div>
        `)

        blockCards.appendChild(newCard);
    }

    const blockPopups = document.getElementById("blockPopups");
    
    for (let film of favorite) {    // création variableFilm pour chaque élément de la collection favorite
        let newPopup = document.createElement('div'); // on créée une variable pour chaque nouvelle carte, qui sera une div
        // on rempli le div avec le bon contenu
        newPopup.innerHTML = (`
        <!-- Modal -->
            <div class="modal fade modal-lg" id="${film.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title fs-5" id="exampleModalLabel">${film.titre}</h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <iframe width="373" height="210" src="https://www.youtube.com/embed/${film.codeYoutube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <table class="table table-dark table-hover">
                                <tbody>
                                    <tr>
                                        <td>Genre</td>
                                        <td>${film.genre}</td>
                                    </tr>
                                    <tr>
                                        <td>Casting</td>
                                        <td>${film.Distribution}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `)

        blockPopups.appendChild(newPopup);
    }
}
