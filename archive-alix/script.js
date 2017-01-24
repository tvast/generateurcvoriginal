var new_mot
    function CreerFenetre()
    {
      Fenetre=window.open("","displayWindow","toolbar=yes,width=350,height=100,directories=no,status=no,scrollbars=yes,resize=no,menubar=no")
    }  
    function creer(form){
      if (confirm("Vous êtes prêt lire votre CV ?"))
      {
        text = ("");
        text = (text + "<strong><center>UN CV TRÈS SPÉCIAL !</strong></center><br>");
        text = (text + " " +form.input2.value+ " ");
        text = (text + " " +form.input3.value+ "<br>12 rue " +form.input4.value+ " ");
        text = (text + "<br> " +form.input1.value+ " ");
        text = (text + "<br> " +form.input5.value+ "ans<br><strong><center> " +form.input16.value+ "<br></strong></center> ");
        text = (text + "<strong><br>FORMATION PROFESSIONNELLE</strong><br>" +form.input6.value+ "<br><strong>EXPERIENCE</strong><br> ");
        text = (text + "  " +form.input8.value+ "(de 1995 à 1999) <br>" +form.input7.value+ "(de 1999 à 2003)<strong><br>LANGUE</strong><br>" +form.input9.value+ " ");
        text = (text +" <br><strong>LOISIRS</strong><br> " +form.input10.value+ " <br>J'aime aussi manger des " +form.input11.value+ " et du " +form.input12.value+ " au soleil ");
        text = (text +"");
        text = (text +" <br><strong>MES ATOUTS</strong><br>" + " J'ai animé l'émission de télévision   " +form.input14.value+ " pendant trois ans.<br> ");
        text = (text +"<br>J'ai écrit une biographie de " +form.input15.value+ " parue le " +form.input13.value+ " 2000.");
        text = (text +"<br>Mes expériences de " +form.input8.value+ " et de  " +form.input7.value+ " ainsi que mes connaissances en "); 
        text = (text +" " +form.input9.value+ " me permettent donc de prétendre à un poste de"); 
        text = (text +" "+form.input16.value+". ");
        text = (text +"<br>Pour ce poste mes prétentions sont de recevoir un salaire net mensuel de " +form.input20.value+  " par mois! "); 


        accent(text)
        Fenetre=window.open("","displayWindow","toolbar=yes,width=375,height=400,directories=no,status=no,scrollbars=yes,resize=no,menubar=no")
        Fenetre.document.write(text)
        Fenetre.document.close()
      }
    }
    function appel(form){
      if (confirm("Attention, c'est l'original !"))
      {
        text = ("");        

        accent(text)
        Fenetre=window.open("","displayWindow","toolbar=yes,width=375,height=400,directories=no,status=no,scrollbars=yes,resize=no,menubar=no")
        Fenetre.document.write(text)
        Fenetre.document.close()
      }
    }
    function accent(mot)
    {
      b = mot.length
      for ( a=1, new_mot="" ; a <= b ; a++ )
      {
       lettre=mot.charAt(a-1)
       if ( lettre >= "à" )
         {	if ( lettre == "à" )
       {	new_mot+="&agrave;" }
       if ( lettre == "â" )
        {	new_mot+="&acirc;" } 
      if ( lettre == "ç" )
        {	new_mot+="&ccedil;" }
      if ( lettre == "é" )
        {	new_mot+="&eacute;" }
      if ( lettre == "è" )
        {	new_mot+="&egrave;" }
      if ( lettre == "ê" )
        {	new_mot+="&ecirc;" }
      if ( lettre == "ë" )
        {	new_mot+="&euml;" } 
      if ( lettre == "î" )
        {	new_mot+="&icirc;" } 
      if ( lettre == "ô" )
        {	new_mot+="&ocirc;" }
      if ( lettre == "ù" )
        {	new_mot+="&ugrave;" }
      if ( lettre == "û" )
        {	new_mot+="&ucirc;" }
      if ( lettre == "À" )
        {	new_mot+="&Agrave;" }
      if ( lettre == "Ç" )
        {	new_mot+="&Ccedil;" }
      if ( lettre == "È" )
        {	new_mot+="&Egrave;" }
      if ( lettre == "É" )
        {	new_mot+="&Eacute;" }
      if ( lettre == "Ê" )
        {	new_mot+="&Eacute;" }
      if ( lettre == "Ô" )
        {	new_mot+="&Ocirc;" }
    }
    else
     {	new_mot+=lettre }
 }
 var text=new_mot
 return text;
}
