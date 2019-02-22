let épée = {
    title : "Epée de feu",
    physic : 20,
    magic : 10,
    minLevel : 23,
    available : false,
};
let hache = {
    title : "Tranche-gueule",
    physic : 100,
    magic : 0,
    minLevel : 40,
    available : true,
};
let sceptre = {
    title : "Bâton de foudre",
    physic : 5,
    magic : 40,
    minLevel : 14,
    available : true,
};
let terminal = {
    title : "Terminal de la mort",
    physic : 0,
    magic : 1000,
    minLevel : 42,
    available : false,
};
armes = [épée, hache, sceptre, terminal];

console.log(armes[0]);
console.log(armes[1].physic);

