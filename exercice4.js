//manipulation des tableaux
const destinationsEurope = ["Rome", "Paris", "Madrid"]; 
const destinationsAsie = ["Tokyo", "Bali", "Bangkok"]; 
//copie du tab1
const copie1=[...destinationsEurope];
console.log(copie1);
//FUSION
tous=[...destinationsEurope,...destinationsAsie];
console.log(tous);
//ajouter au debut sans modifier le tableau original
const aveclisbonne=["Lisbonne",...destinationsEurope];
const avecLondres=[...destinationsEurope,"Londres"];
const sansparis=[...destinationsEurope,...destinationsAsie].filter((p)=>p!=="Paris");
console.log(sansparis);
//manipulation des objets
const reservation = { 
    numero: 201, 
    client: "Nadia", 
    destination: "Bali", 
    statut: "En attente" 
};
//copie de l'objet
const copie2={...reservation};
const resConf={...reservation,statut:"confirme"};
console.log(resConf);
const resassur={...reservation,assurance:true};
console.log(resassur);
const res2={...reservation,destination:"tunis",statut:"confirme"};
console.log(res2);
//copie orginale ne change jamais
console.log(reservation);
