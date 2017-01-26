
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
        console.log(array.length)

        //construction du cv
        text = ("");
        text = (text + "<strong><center>UN CV TRÈS SPÉCIAL !</strong></center><br>");
        text = (text + " " +array[0]+ " ");
        text = (text + " " +array[1]+ "<br>12 rue " +array[2]+ " ");
        text = (text + "<br> " +array[3]+ " ");
        text = (text + "<br> " +array[4]+ "ans<br><strong><center> " + array[5]+ "<br></strong></center> ");
        text = (text + "<strong><br>FORMATION PROFESSIONNELLE</strong><br>" +array[6]+ "<br><strong>EXPERIENCE</strong><br> ");
        text = (text + "  " +array[8]+ "(de 1995 à 1999) <br>" +array[7]+ "(de 1999 à 2003)<strong><br>LANGUE</strong><br>" +array[9]+ " ");
        text = (text +" <br><strong>LOISIRS</strong><br> " +array[10]+ " <br>J'aime aussi manger des " +array[11]+ " et du " +array[12]+ " au soleil ");
        text = (text +"");
        text = (text +" <br><strong>MES ATOUTS</strong><br>" + " J'ai animé l'émission de télévision   " +array[13]+ " pendant trois ans.<br> ");
                /*text = (text +"<br>J'ai écrit une biographie de " +form.input15.value+ " parue le " +form.input13.value+ " 2000.");
                text = (text +"<br>Mes expériences de " +form.input8.value+ " et de  " +form.input7.value+ " ainsi que mes connaissances en "); 
                text = (text +" " +form.input9.value+ " me permettent donc de prétendre à un poste de"); 
                text = (text +" "+form.input16.value+". ");*/
                text = (text +"<br>Pour ce poste mes prétentions sont de recevoir un salaire net mensuel de " +array[11]+  " par mois! ");



                document.getElementById("demo1").innerHTML = text;

                console.log(adresse)
                var bar = document.getElementById("tagline") 
                bar.className +="toggledCv";
              }

              