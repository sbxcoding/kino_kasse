// If Statements


    function main(){
        let input = document.getElementById("age")
        let age = input.value;
        

        // < 6 Jahre oder > 60 Jahre -> Sonderpreis 4€

        if(age < 0 || age > 110){
            alert("Bitte trage ein gültiges Alter ein")
        }
        else if(age <= 6 || age >= 60){
            alert("Preis beträgt 4€")
        }
        else {
            alert("Preis beträgt 6.50€")
        }

        // Für alle anderen -> 6.50€
    }