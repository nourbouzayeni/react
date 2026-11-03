const reservations = [ 
    { numero: 101, client: "Nadia", destination: "Bali", montant: 1800, 
statut: "Confirmée" }, 
    { numero: 102, client: "Karim", destination: "Rome", montant: 950, 
statut: "En attente" }, 
    { numero: 103, client: "Leila", destination: "Tokyo", montant: 2500, 
statut: "Confirmée" }, 
    { numero: 104, client: "Sami", destination: "Santorin", montant: 1200, 
statut: "Annulée" }, 
    { numero: 105, client: "Amira", destination: "Djerba", montant: 500, 
statut: "Confirmée" } 
]; 
//creer un tableau contenant les reservations confirmées
console.log(reservations.filter(res=>res.statut==="Confirmée"))
//creer un tableau contenant les noms des clients
console.log(reservations.map(res=>res.client))
//rechercher reservation num 103
console.log(reservations.find(res=>res.numero===103))
//calculer le montant total des reservations confirmées
console.log(reservations.filter(res=>res.statut==="Confirmée")
.reduce((total, res) => total + res.montant, 0)
)
//verifier si toutes les reservations sont confirmées
console.log(reservations.every(res=>res.statut==="Confirmée"))
//affichage sous forme de tableau avec destructuring
const voyages=reservations.map(({client, destination})=>({client:client,
    voyage:destination}));
console.log(voyages);
