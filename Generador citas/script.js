const quoteEl = document.getElementById('quotes')
const quoteBtn = document.getElementById('quotes-btn')

quoteBtn.addEventListener('click', generateQuote)

generateQuote()

function generateQuote(){

    fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: "application/json"
        }
    })
    .then((res) => res.json())
    .then((data) => {
        quoteEl.innerHTML = data.joke
    })
}