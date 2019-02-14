function conversionTemperature() {
    let option = null;
    let C = null;
    let K = 0;
    let F = null;

    option = Number(prompt(
        "1. Fin du programme \n" + "2. De Celsius vers Fahrenheit \n" +
        "3. De Celsius vers Kelvin \n" + "3. De Fahrenheit vers Celsius \n" +
        "4. De Fahrenheit vers Kelvin \n" + "5. De Kelvin vers Celsius \n" + "6. De Kelvin vers Fahrenheit \n \n" + "Tapez l'option ci-dessous. (nombre)"
        ))
    
    if (option > 0 && option < 7) {
        switch (option) {
            case 1: alert("Fin du programme");
                return;
            case 2: // C => F [°F] = ([°C] x 9/5) + 32
                C = prompt("Entrez les dégrés");
                F = (Number(C) * Number((9/5))) + Number(32);
                alert(C + "°C fait " + F + "°F.");
                break;
            case 3: //Celsius => Kelvin
                C = prompt("Celsius vers Kelvin.")
                K = Number(C) + Number(273.15);
                alert(C + "°C fait " + K + "°K.")
                break;
            case 4: // F => K [K] = (([°F] - 32) x (5/9)) + 273,15
                F = prompt("F vers K")
                K = ((Number(F) - Number(32)) * (Number(5)/Number(9)) + Number(273.15));
                break;

            case 5: // K => C [°C] = [K] - 273,15
                K = prompt("Kelvin vers Celsius.")
                C = Number(K) - Number(273.15);
                alert(K + "° Kelvin fait " + C + "° Celsius.")
                break;
            case 6: // K => F [°F] = ([K] x 9/5) - 459,67

                break;

            default: alert("Vous n'avez rien entré.");
                break;
        }

    }

   
    alert("Vous pouvez réessayer.");
    

    console.log(option);
}

/* Exercice 12 - Conversion de température Celsius, Fahrenheit et Kelvin

Créer un bouton. Au click de ce bouton, on lance la fonction conversionTemperature.

L'utilisateur choisit d'abord dans le menu affiché quel type de conversion il souhaite, il indique son choix en indiquant le numéro correspondant dans le menu au moyen d'un prompt javascript

Ensuite, un second prompt va lui demander la température à convertir et afficher le résultat dans une boîte d'alerte.

Le menu :

    Fin du programme
    De Celsius vers Fahrenheit
    De Celsius vers Kelvin
    De Fahrenheit vers Celsius
    De Fahrenheit vers Kelvin
    De Kelvin vers Celsius
    De Kelvin vers Fahrenheit

Pour calculer la conversion, utilisez les formules suivantes :

[°F] = ([°C] x 9/5) + 32
[K] = [°C] + 273,15
[°C] = ([°F] - 32) / (9/5)
[K] = (([°F] - 32) x (5/9)) + 273,15
[°C] = [K] - 273,15
[°F] = ([K] x 9/5) - 459,67

où [K] représente la température en kelvin
où [°F] représente la température en degrés Fahrenheit
où [°C] représente la température en degrés Celsius

Exemples de valeurs à tester :

    0 K = -273,15 °C = -459,67 °F
    283,15 K = 10 °C = 50 °F
    273,15 K = 0 °C = 32 °F
    373,15 K = 100 °C = 212 °F
    233,15 K = -40 °C = -40 °F
*/