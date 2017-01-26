
function toggleCv() {
  var foo = document.getElementById("questioncv").className ="toggleCv";
  var bar = document.getElementById("reponsecv").className +="toggledCv";  
}

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
              console.log(array.length)
            }
        // ecriture de la lettre avec differentes variables
        var adresse= "";
        adresse = array[0]+ " "+array[1]+ " "+array[2]+ " "+array[3]+ " "+array[4]+ " "+
        array[5]+ " "+array[6]+ " "+array[7]+ " "+array[8]+ " "+array[9]+ " "+array[10]+ " "+
        array[11]+ " "+array[12]+ " "+array[13];
        document.getElementById("demo1").innerHTML = adresse;

        console.log(adresse)
        var bar = document.getElementById("tagline") 
        bar.className +="toggleCv";
      }  