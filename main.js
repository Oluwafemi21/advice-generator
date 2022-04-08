// Selectors
const adviceId = document.querySelector('#advice-id');
const adviceText = document.querySelector('.advice-text');
const newAdvice = document.querySelector('.new-advice');
const main = document.querySelector('main');
const loader = document.querySelector('.loader');

// Event Listeners
newAdvice.addEventListener("click", getAdvice)

// Functions
function getAdvice(){
    axios.get('https://api.adviceslip.com/advice')
    .then(data => updateAdvice(data))
    .catch(err => console.log(err)) 
}

function updateAdvice(data){
    //Destructuring
    const { id , advice } = data.data.slip
    adviceId.textContent = id;
    adviceText.textContent = advice;
}


// CSS PRELOADER
function init(){
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = "none";

        main.style.display = 'flex';
        setTimeout(() => 
            main.style.opacity = 1 , 50);
        
    }, 2500);
}

init();