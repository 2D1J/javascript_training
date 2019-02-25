let b = 2;
let a = 0;


console.log(a);
console.log(b);
console.log(a=b++);
console.log(a);
console.log(b);
a=++b;
a=b--;
a=--b;
a+=b++;

a=1; a+=++b;
a=1; a-=b++;
a=1; a-=++b;
a=1; a+=b--;
a=1; a+=--b;


/*
b est toujours initialisée à 2 Quel est le résultat des opérations suivantes ?

    a=b++;
    a=++b;
    a=b--;
    a=--b;
    a+=b++;
    a=1; a+=++b;
    a=1; a-=b++;
    a=1; a-=++b;
    a=1; a+=b--;
    a=1; a+=--b;

Pour chacune des opérations, afficher l'opération effectuée, la valeur de a après l'opération et la valeur de b après l'opération.
*/