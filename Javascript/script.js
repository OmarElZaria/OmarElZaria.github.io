function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById('date').innerHTML = new Date().toDateString();
  document.getElementById("defaultOpen").click();

function show_content(){
    var x = document.getElementById("content");

    if(x.style.display == "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    } 
}

function show_values(){
    var y = document.getElementById("values");


    if(y.style.display == "none"){
        y.style.display = "block";

    }else{
        y.style.display = "none";
    } 
}

function show_hobbies(){
    var z = document.getElementById("hobbies");


    if(z.style.display == "none"){
        z.style.display = "block";

    }else{
        z.style.display = "none";
    } 
}