export function Clock(){
  
  var show = document.getElementById('clock');
  document.getElementById ("Clock").addEventListener ("click", function(){
    
    window.history.replaceState(null, document.title, 'Clock');
    
    myTimer();
    const myInterval = setInterval(myTimer, 1000);
    document.getElementById('home').style="display:none";
    document.getElementById('main').style="display:none";
    document.getElementById('contact').style="display:none";
    show.style="display:block";

    function myTimer() {
      document.getElementById('Clock').style="background-color: antiquewhite";
      document.getElementById('Home').style="background-color: aqua";
      document.getElementById('Contact').style="background-color: aqua";
        
      const date = new Date();
      show.innerHTML = "Time:-"+date.toLocaleTimeString();
    }

    document.getElementById ("Home").addEventListener ("click", function(){
      clearInterval(myInterval);
      show.style="display:none";
      window.history.replaceState(null, document.title, 'Custom-react');
    });
    document.getElementById ("Contact").addEventListener ("click", function(){
      clearInterval(myInterval);
      show.style="display:none";
    });
    
  });
}