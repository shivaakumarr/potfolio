let foot =document.getElementById("foot");

function home(){
    let sec = document.getElementById("same");
    let content = "<p> Welcome to my portfolio! Iam <strong>Shiva Kumar</strong>, a dedicated Aspring <strong>SWE</strong>. In my portfolio, you will find curated section of <strong>Projects</strong> that showcase my <strong>Skills</strong> in <strong>Java</strong> as well as <strong>Web Development.</strong>  </p>";
    sec.innerHTML = content;
    foot.style.display = "none";
}
function skills(){
    let sec = document.getElementById("same");
     let content ="<div class=skil>";
     content+="<h2>Skills:</h2>";
     content+="<br>";
    content += "<div class=out>";
   content +="  <div class=in>JAVA</div>";
     content+="</div>";
     content+="<div class=out>";
     content+="<div class=in1>HTML/CSS</div>";
     content+="</div>";
    content+="<div class=out>";
    content+="<div class=in2>JAVASCRIPT</div>";
    content+="</div>";
    content+="<div class=out>";
    content+="<div class=in3>NODEJS</div>";
    content+="</div>";
    content+="<div class=out>";
    content+="<div class=in4>REACTJS</div>";
    content+="</div>";
    content+="</div>";
    sec.innerHTML = content;
    foot.style.display = "none";
}
function project(){
    let sec = document.getElementById("same");
    let content ="<div class=skil>";
        content+="<h2>Projects:</h2>";
     content+="<button id = btn1 onclick =mini()>mini</button>";
     content+="<br>";
     content+="<br>";
     content+="<div id=mini></div>";
     content+="<br>";
     content+="<button id = btn2 onclick = major()>major</button>";
     content+="<br>";
     content+="<br>";
     content+="<div id=major></div>";
     content+="</div>";
     sec.innerHTML =content;
     foot.style.display = "none";
}
function mini(){
    let a = document.getElementById("mini");
    let content 
    content = "<a href=https://shivaakumarr.github.io/guessing/><button id = btn1 >View</button></a>";
    a.innerHTML=content;
    a.style.display ="block";
    let btn =document.getElementById("btn1");
    btn.style.backgroundColor="#000";
    btn.style.color="#fff";
  }
 function contact(){
    home();
    foot.style.display = "block";
 }
 function major(){
    let s = document.getElementById("major");
    let content ="<p> (It is under construction.)</p>";
    s.innerHTML=content;
    s.style.display ="block";
     let btn =document.getElementById("btn2");
    btn.style.backgroundColor="#000";
    btn.style.color="#fff";
 }
 function educate(){
    let sec = document.getElementById("same");
    let content = "<p>Iam, An Upcomig Engnieer from  <strong>GNI.</strong></p>";
    sec.innerHTML = content;
    foot.style.display = "none";

 }
   
