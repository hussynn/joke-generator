const generatebtn = document.getElementById('generatebtn');
const displayjoke = document.getElementById('displayjoke');

    
    async function joke(){
        const res = await fetch("https://official-joke-api.appspot.com/random_joke");

        const data = await res.json();
     displayjoke.innerText=`${data.setup} - ${data.punchline}`;
    }

    generatebtn.addEventListener("click" , joke);
 