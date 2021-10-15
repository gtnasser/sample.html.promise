


// on ready
const load = () => {
    // create cards
    var list = [];
    for (var i=1;i<=400;i++){
        list.push(('000' + Math.random()*1000).slice(-3))
    }
    var cards = document.querySelector('.cards')
    list
        //.sort((a, b) => a.localeCompare(b))
        .map((i) => {
            var el = document.createElement('div')
            el.classList.add('card')
            el.textContent = ('000' + Math.random() * 1000).slice(-3)
            el.addEventListener('click', () => checkCard(el))
            cards.appendChild(el);
        })
}

// check cards
const checkCards = (id) => {
    var cards = document.getElementsByClassName('card')
    ;[...cards]
        .filter(card => id==undefined || id==(card.innerText%2))
        .map(m => checkCard(m))
}

// check one card
const checkCard = (card) => {
    card.classList.remove('c0','c1','c2','c3','c4','c5')
    card.classList.add('spinner')
    doSomething(card.innerHTML)
        .then(ok => {
            card.classList.add('c'+ok)
        })
        .catch(err => console.error('card '+card.innerHTML, 'err '+err))
        .finally(()=> card.classList.remove('spinner'))
}

// promise
const doSomething = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const r = (Math.random()*1000).toFixed(0)
            if (r<80) reject(r)
            else resolve(r%5)
         }, 1000 + Math.random() * 3500);
     });
}
