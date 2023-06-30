export function Contact(){
    document.getElementById ("Contact").addEventListener ("click", function(){
      
      window.history.replaceState(null, document.title, 'Contact');
      
      var show = document.getElementById('contact');
      show.style="display:block";
      document.getElementById('home').style="display:none";
      document.getElementById('main').style="display:none";
      document.getElementById('Clock').style="background-color: aqua";
      document.getElementById('Home').style="background-color: aqua";
      document.getElementById('Contact').style="background-color: antiquewhite";
      
      show.innerHTML = `
        Email :- mayankagrawal328@gmail.com<br>
        <br>
        Phone NO. :- 9119005045<br>
        <br> <br>
        <a  id="2"href="https://www.linkedin.com/in/mayank-agrawal-001047222/" target="_blank"><img src="images/linkdin.jpg" alt="LinkedIn"></a>
        <a id="3"href="mailto:mayankagrawal328@gmail.com" target="_blank"><img src="images/gmail.png" alt="Mail"></a>
      `
  });
  document.getElementById ("Home").addEventListener ("click", function(){
    window.history.replaceState(null, document.title, '/Custom-react');
  });
}
  