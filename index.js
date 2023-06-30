import { Flag } from './components/bharat.js';
import { Contact } from './components/contact.js';
import {Clock} from './components/clock.js';

document.getElementById('root').innerHTML =`
<nav>
<button id="Contact">Contact</button>
<button id="Clock">Clock</button>
<button id="Home">Home</button>
</nav>
${home()}
<br>
<div id="main">
${Flag(["#138808","#FFFFFF","#FF9933"])}
</div>

<div id="clock" style="display:none"></div>
<div id="contact" style="display:none"></div>
`

Clock();
Contact();



function home(){
  return `
    <div id="home">
    <p>
    Sanskrit is a classical language belonging to the Indo-Aryan branch of the Indo-European languages.
    It arose in South Asia after its predecessor languages had diffused there from the northwest in the late Bronze Age. 
    Sanskrit generally connotes several Old Indo-Aryan language varieties.[27][28] 
    The most archaic of these is the Vedic Sanskrit found in the Rigveda, a collection of 1,028 hymns composed between 1500 BCE and 1200 BCE by Indo-Aryan tribes migrating east from what is today Afghanistan across northern Pakistan and into northwestern India.[29][30] Vedic Sanskrit interacted with the preexisting ancient languages of the subcontinent, absorbing names of newly encountered plants and animals; in addition, the ancient Dravidian languages influenced Sanskrit's phonology and syntax.
    </p>
    </div>
  `
}

document.getElementById('Home').style="background-color: antiquewhite";

document.getElementById ("Home").addEventListener ("click", function(){
  
  document.getElementById('home').style="display:block";
  document.getElementById('main').style="display:flex";
  document.getElementById('contact').style="display:none";
  document.getElementById('Clock').style="background-color: aqua";
  document.getElementById('Home').style="background-color: antiquewhite";
  document.getElementById('Contact').style="background-color: aqua";
  
});

