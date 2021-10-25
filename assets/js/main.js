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
        avatar: 'https://i.picsum.photos/id/608/300/300.jpg?hmac=e97yEcy-vQTdkO2Q_aYHzzk30CD8spgoTrq-DPlSrjk',
        contenuto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque corrupti amet blanditiis aspernatur nihil enim.',
        immagine: 'https://i.picsum.photos/id/522/300/300.jpg?hmac=RnPprwDoju-HwXnfFGZz0H4Pv82PkYEmAhh9JyB4iNw',
        numeroLikes: 'piace a 80 persone'


    },
    {
        nomeUtente: 'Sofia Perlari',
        dataCrezione: '2 mesi fa',
        avatar: 'https://unsplash.it/300/300?image=',
        contenuto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque corrupti amet blanditiis aspernatur nihil enim.',
        immagine: 'https://i.picsum.photos/id/637/300/300.jpg?hmac=x-Lt1sGGm9hYzKtIV210a6Rdow959eDq4qGM1ROs6a8',
        numeroLikes: 'piace a 70 persone'
    },
    {
        nomeUtente: 'paolo corridori',
        dataCrezione: '4 mesi fa',
        avatar: 'https://i.picsum.photos/id/495/300/300.jpg?hmac=A9YVCMdxoYv0Ck6HxE28k5rQuCh0JliJ8KcpSer_Nsg',
        contenuto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque corrupti amet blanditiis aspernatur nihil enim.',
        immagine: 'https://unsplash.it/300/300?image=',
        numeroLikes: 'piace a 100 persone'
    }
]


for (let index = 0; index < socialPosts.length; index++) {
    const utenti = socialPosts[index];

    const element = `
        <div class="post1">
            <div class="avatar_nome">
                <img src="${utenti.avatar}" alt="" class="avatar"> 
                <h3 class="nome_utente">${utenti.nomeUtente}</h3>
                </div>    
                <p class="data_creazione_post">${utenti.dataCrezione}</p>
            <p class="testo">${utenti.contenuto}</p>
            <div class="hero_image">
                <img src="${utenti.immagine}" alt="" class="img">
            </div>
            <div class="likes">
                <span class="like"> &#128077; mi piace</span>
                <span class="total_likes">${utenti.numeroLikes}</span>
            </div>
        </div>
        
    `

    document.querySelector('.post').insertAdjacentHTML('beforeend', element)
}