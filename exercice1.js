const destinations = [ 
    { id: 1, ville: "Santorin", pays: "Grèce", prix: 1200, duree: 7, 
disponible: true }, 
    { id: 2, ville: "Bali", pays: "Indonésie", prix: 1800, duree: 10, 
disponible: true }, 
    { id: 3, ville: "Istanbul", pays: "Turquie", prix: 750, duree: 5, 
disponible: false }, 
    { id: 4, ville: "Rome", pays: "Italie", prix: 950, duree: 4, 
disponible: true }, 
    { id: 5, ville: "Tokyo", pays: "Japon", prix: 2500, duree: 12, 
disponible: true }, 
    { id: 6, ville: "Djerba", pays: "Tunisie", prix: 500, duree: 6, 
disponible: false } 
];
destinations.forEach (destination=>
    console.log(destination.ville))
console.log(destinations.map(destination=>destination.ville))
console.log(destinations.filter(destination=>destination.prix<1500))
console.log(destinations.find(des=>des.id===3))
console.log(destinations.findIndex(des=>des.ville==="Tokyo"))
console.log(destinations.some(des=>des.disponible===true))
console.log(destinations.every(des=>des.prix>0))
console.log(destinations.reduce((total, d) => total + d.prix, 0))