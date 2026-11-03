//destructuring d'un tableau d'objets
const pays = ["Italie", "Japon", "Grèce", "Espagne", "Canada"]; 
const {0: a, 1: b} = pays;
console.log(a,b);
const [ , ,c]=pays;
console.log(c);
const [destinationpricipale,...autrespays]=pays;
console.log(destinationpricipale,autrespays);
//partie B destructuring d'un objet
const voyage = { 
    destination: "Bali", 
    prix: 1800, 
    duree: 10, 
    transport: "Avion", 
    hotel: "5 étoiles" 
}; 
const {destination,prix} = voyage;
console.log(destination, prix);
const {destination:ville}=voyage;
console.log(ville);
const {prix:prixv=1700 ,duree:durr=11}=voyage;
console.log(prixv,durr);
function afficherVoyage(voyage){
    const {destination, prix} = voyage;
    console.log(`Destination: ${destination}, Prix: ${prix}`);
}
afficherVoyage(voyage);