console.log('JS ok');

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

//Ciclo per stampare i dati dei employers

for(let i = 0; i < employers.length;i++){
    const nome = employers[i].name;
    const ruolo = employers[i].role;
    const image = employers[i].image;
    console.log(`nome : ${nome}`);
    console.log(`ruolo : ${ruolo}`);
    console.log(`immagine : ${image}`);
  
}