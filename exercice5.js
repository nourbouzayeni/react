//mini projet gestion des favoris
const favoris = [ 
    { id: 1, ville: "Venise", pays: "Italie", visite: false }, 
    { id: 2, ville: "Marrakech", pays: "Maroc", visite: true }, 
    { id: 3, ville: "Maldives", pays: "Maldives", visite: false }, 
    { id: 4, ville: "Barcelone", pays: "Espagne", visite: true } 
]; 
//question1
favoris.forEach(fav=>console.log(fav))
//question2
console.log(favoris.filter(fav=>fav.visite===false))
//question3
const villes=favoris.map(fav=>fav.ville);
console.log(villes);
//question4
console.log(favoris.find(fav=>fav.id===3))
//question5
console.log(favoris.reduce((total, fav) => fav.visite ? total + 1 : total, 0))
//question6
const dest1={id:5,ville:"tunis",pays:"tunisie",visite:true};
const copie1=[...favoris,dest1];
console.log(copie1);
//question7
const copie2= favoris.map((f) =>
  f.id === 1 ? { ...f, visite: true } : f
);
console.log(copie2);
//question8
const copie3=favoris.filter(f=>f.id!==2);

