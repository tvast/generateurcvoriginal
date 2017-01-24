function myFunction() {
    var x = document.getElementById("frm1");
    var text = "";
    //tableau des réponses
    var array = [ ] 
    var i;
    //collecte des réponses
    for (i = 0; i < x.length ;i++) {
        // text += x.elements[i].value 
        array.push(x.elements[i].value)
        console.log(array)
    }

      // text = ("coucou");
      //   text = (text + "<strong><center>UN CV TRÈS SPÉCIAL !</strong></center><br>");
      //   text = (text + " " +array[0] + " ");
      //   text = (text + " " +array[1]+ "<br>12 rue " +array[2]+ " ");
        // text = (text + "<br> " +form.input1.value+ " ");
        // text = (text + "<br> " +form.input5.value+ "ans<br><strong><center> " +form.input16.value+ "<br></strong></center> ");
        // text = (text + "<strong><br>FORMATION PROFESSIONNELLE</strong><br>" +form.input6.value+ "<br><strong>EXPERIENCE</strong><br> ");
        // text = (text + "  " +form.input8.value+ "(de 1995 à 1999) <br>" +form.input7.value+ "(de 1999 à 2003)<strong><br>LANGUE</strong><br>" +form.input9.value+ " ");
        // text = (text +" <br><strong>LOISIRS</strong><br> " +form.input10.value+ " <br>J'aime aussi manger des " +form.input11.value+ " et du " +form.input12.value+ " au soleil ");
        // text = (text +"");
        // text = (text +" <br><strong>MES ATOUTS</strong><br>" + " J'ai animé l'émission de télévision   " +form.input14.value+ " pendant trois ans.<br> ");
        // text = (text +"<br>J'ai écrit une biographie de " +form.input15.value+ " parue le " +form.input13.value+ " 2000.");
        // text = (text +"<br>Mes expériences de " +form.input8.value+ " et de  " +form.input7.value+ " ainsi que mes connaissances en "); 
        // text = (text +" " +form.input9.value+ " me permettent donc de prétendre à un poste de"); 
        // text = (text +" "+form.input16.value+". ");
        // text = (text +"<br>Pour ce poste mes prétentions sont de recevoir un salaire net mensuel de " +form.input20.value+  " par mois! "); 
        // var fii = document.getElementById("textcv").innerHTML =text

        // texte généré à partir du tableau 
        var intro = ""
        intro = "mon adresse est très importante pour que vous puissiez m'appeller dans les plus bref delais" +<br>

        //  EN ROUGE GRAS
        var adresse= "";
        adresse = "Mr array[0]  array[1] array[2] rue array[3]  array[4] Numero privé VIP"

        document.getElementById("demo").innerHTML = intro;
        document.getElementById("demo1").innerHTML = adresse;

        

        
        var objetLettre = ""
        objetLettre ="obejt candidature pour un poste de array[4]"
        
        document.getElementById("demo2").innerHTML = objetLettre;

        // Diplomé d'un {{Diplome exagéré}} j'ai eu l'occasion durant ma fonction de {{metier fou}}
        // de pratiquer en plus du concept du mouvement brownien la langue de {{}}
        // Très utile selon la mission que vous proposer en France.

        // Passionné par {{passion}} j'adore cuisinner à l'estragon les {{aliments}}
        // Ma modeste rémuneration de {{sallaire}} viendra correspondre j'en suis sur à votre grille salariale
        // Ma parution dans le {{show}} m'a permis de parler du grand écrivain qu j'apprecie {{}}

        // Je vous prie d'agréer mes plus sincère salutations disingués et cordiales

        // Bien à vous

        // {{intel}}
        console.log(intro + adresse + objetLettre)

    // document.getElementById("demo").innerHTML = text;
}