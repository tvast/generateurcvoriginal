  
console.log("%cBonjour rien à voir par ici", "color: blue; font-size:2em;font-weight:100%");

function toggleCv() {
  //cache les question - affiche les réponses
  var foo = document.getElementById("questioncv").className ="toggleCv";
  var bar = document.getElementById("reponsecv").className +="toggledCv";  

  //ciblage du formulaire
  var x = document.getElementById("frm1");
  var text = "";
  //tableau des réponses
  var array = [ ] 
  var i;  
  //collecte des réponses
  for (i = 0; i < x.length ;i++) {
    // text += x.elements[i].value 
    array.push(x.elements[i].value)    
    }
    // ecriture de la lettre avec differentes variables
      /*  var adresse= "";
        adresse = array[0]+ " "+array[1]+ " "+array[2]+ " "+array[3]+ " "+array[4]+ " "+
        array[5]+ " "+array[6]+ " "+array[7]+ " "+array[8]+ " "+array[9]+ " "+array[10]+ " "+
        array[11]+ " "+array[12]+ " "+array[13];*/
    //combien d'entité
    console.log(array)
    //construction du cv
    text = ("");
    text = (text + " " +array[0]+ " ");
    text = (text + " " +array[1]+ "<br>12 rue " +array[2]+ " ");
    text = (text + "<br> " +array[3]+ " ");
    text = (text + "<br> " +array[4]+ " ans<br><center><strong>" + array[5]+ "<br></center></strong> ");
    text = (text + "<strong><br>FORMATION PROFESSIONNELLE</strong><br> " +array[6]+ "<br><strong>EXPERIENCE</strong><br> ");
    text = (text + "  " +array[8]+ " (de 2000 à 2009) <br>" +array[7]+ " (de 2010 à 2016)<strong><br>LANGUE</strong><br> " +array[9]+ " courant");
    text = (text + " <br><strong>LOISIRS</strong><br> " +array[10]+ " <br>J'aime aussi manger des " +array[11]+ " et du " +array[12]+ " au soleil ");
    text = (text + " <br><strong>MES ATOUTS</strong><br>" + "J'ai animé l'émission de télévision " + array[13]+ " pendant trois ans.<br> ");
    text = (text + "Jai écrit une biographie de " + array[13] + " parue le " + array[14]  );
    text = (text +" <br>Mes expériences de "+array[8]+" et de "+array[7]+" ainsi que mes connaissances en "+array[9]+" me permettent donc de prétendre à un poste de "+array[3]);
    text = (text +"<br>Pour ce poste mes prétentions sont de recevoir un salaire net mensuel de " +array[11]+ " par mois! ");
   //ajoute le texte dans la balise p avec l'id demo1
    document.getElementById("demo1").innerHTML = text;
  
    // var bar = document.getElementById("tagline") 
    // bar.className +="toggledCv";

              }

            


              