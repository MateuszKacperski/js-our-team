console.log('JS ok');

// prendo le card dal dom
const displayCard = document.querySelector('.row');

// creo arry di oggetti ossia gli impiegati
const employers = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO ',
        image : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        image : 'angela-caroll-chief-editor.jpg'
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        image : 'walter-gordon-office-manager.jpg'
    },
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        iamge : 'angela-lopez-social-media-manager.jpg'
    },
    {
        name : 'Scott Estrada',
        role : 'Developer',
        image : 'scott-estrada-developer.jpg'
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        image : 'barbara-ramos-graphic-designer.jpg'
    }
]


let results = '';

//Ciclo per stampare i dati dei employers 

for(let i = 0; i < employers.length;i++){

    // stampa in console
    const nome = employers[i].name;
    const ruolo = employers[i].role;
    const image = employers[i].image;
    console.log(`nome : ${nome}`);
    console.log(`ruolo : ${ruolo}`);
    console.log(`immagine : ${image}`);

    //stampa nel dom
    results += `
    <div class="col-4">
        <div class="card" style="width: 18rem;">
            <img src="img/${image}" class="card-img-top" alt="employer">
            <div class="card-body">
                <h5 class="card-title">${nome}</h5>
                <p class="card-text">${ruolo}</p>
            </div>
        </div>
    
    </div>
    `
}

displayCard.innerHTML = results;