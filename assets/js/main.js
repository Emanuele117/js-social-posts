//Creare una pagina che elenchi una lists di post socials a partire da un array di oggetti.


/*  gli attributi minimi del modello di un post :

- id,
- contenuto,
- immagine,
- autore(nome, avatar),
- numero di likes ,
- data creazione

*/

// Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like.

const socialPosts = [
    {
        nomeUtente: 'Phil Mangione',
        dataCrezione: '4 mesi fa',
        avatar: 'https://unsplash.com/photos/XHwGoF0B_uo',
        contenuto: 'lorem ipsum dolor',
        immagine: 'https://unsplash.com/photos/t3ixVevEi6s',
        numeroLikes: 'piace a 80 persone'


    },
    {
        nomeUtente: 'Sofia Perlari',
        dataCrezione: '2 mesi fa',
        avatar: 'https://unsplash.com/photos/XHwGoF0B_uo',
        contenuto: 'lorem ipsum dolor',
        immagine: 'https://unsplash.com/photos/t3ixVevEi6s',
        numeroLikes: 'piace a 70 persone'
    },
    {
        nomeUtente: 'paolo corridori',
        dataCrezione: '4 mesi fa',
        avatar: 'https://unsplash.com/photos/XHwGoF0B_uo',
        contenuto: 'lorem ipsum dolor',
        immagine: 'https://unsplash.com/photos/t3ixVevEi6s',
        numeroLikes: 'piace a 100 persone'
    }
]

for (let index = 0; index < socialPosts.length; index++) {
    const utenti = socialPosts[index];

    const element = `
    <div class="post1">
        <div class="avatar_nome">
            <img src="https://unsplash.com/photos/XHwGoF0B_uo" alt="" class="avatar"> 
            <h3 class="nome_utente">Phil mangione</h3>
            <p class="data_creazione_post">4 mesi fa</p>
        </div>    
        <p class="testo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui atque doloremque voluptatum eveniet quae perspiciatis obcaecati.</p>
        <img src="https://unsplash.com/photos/t3ixVevEi6s" alt="" class="img">
        <span id="like">mi piace</span>
        <span id="total_likes">Piace a 80 persone</span>
    </div>
        
    `

    document.querySelector('.post').insertAdjacentHTML('beforeend', element)
}