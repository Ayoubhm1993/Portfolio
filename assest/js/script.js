let body=document.querySelector('.hero')
function aboutMe (){
    console.log(body)

    body.innerHTML=`<section id="About-me"  >
    <div class="title-box">
          <p class='text-center aboutMeTitle'>About Me<p>
    </div>
    <div class='text-pic text-center'>
    <img src="./assest/images/me.JPG" alt="ayoub-hammouch"/>
    <p class="text-center info">
    Writing about yourself is a bit awkward, the hardest part is figuring out how to start - but I'll give it shot.</br> Professionally, my career in coding is only beginning but I am incredibly excited about this field. </br> The possibities of code seem endless and </br>I've found it difficult to put the assignments down because each one presents a new engaging puzzle.</br>
  
    My primary goal is to continue learning all that </br>I can about coding, as this field is so vast and has no shortages of new things to learn.</br> My plan is to use coding to pursue a career in bioinformatics. However,</br> I'm leaving my options open moving forward from this class because there are so many avenues left to explore.
  
  </p>
  </div>
  </section>`
}

function work(){
    body.innerHTML=`<section id="Work" class="work-cont">
    <div>
    <p class='text-center aboutMeTitle'>Work</p>
   </div>
   <div class="grid-container">
       <div class="grid-item grid-item-1"><a href="https://ayoubhm1993.github.io/Movie-Search"><img src="./assest/images/movieSearch.jpg" alt="movie"/></a><h6>Movie Search </br><span>Js/Jquery/Bulma</span></h6> </div>
       <div class="grid-item grid-item-2"><a href="#"><img src="./assest/images/ledwall.JPG" alt="led-wall"/></a><h7>LED Wall </br><span>Node/lot</span></h7></div>
       <div class="grid-item grid-item-3"><a href="#"><img src="./assest/images/calculator.jpg" alt="calculator"/></a><h8>Calculator </br><span>React/js/css</span></h8></div>
       <div class="grid-item grid-item-4"><a href="#"><img src="./assest/images/puzzle.jpg" alt="puzzle"/></a><h9>Pastel Puzzels </br><span>React/js/css</span></h9></div>
       <div class="grid-item grid-item-5"><a href="https://ayoubhm1993.github.io/Run-Buddy/"><img src="./assest/images/run-buddy.jpg" alt="run-buddy"/></a><h10>Run Buddy </br><span>Html/css</span></h10></div>
   
   </div>
   </section>`
}
function contactMe(){
    body.innerHTML=`<section  id="Contact-me"  class="contact" >
    <div ><p class='text-center aboutMeTitle'>Contact Me</p> </div>
    <div class="social">
       <a href="#"><img class="email" src='./assest/icones/gmail.png'>Ayoubhm1993@gmail.com</img></a></br>
      <a href="https://github.com/Ayoubhm1993"><img src='./assest/icones/github.png'>Ayoubhm1993</img></a></br>
      <a href="https://www.linkedin.com/in/ayoub-hammouch-aa9a701b6/"><img src='./assest/icones/linkedin.png'></img></a>
      
    </div>
    </section>`
}