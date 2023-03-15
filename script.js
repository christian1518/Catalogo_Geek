let itens = [
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    }
]


const body = document.querySelector("body")

const main = document.createElement("main")
body.appendChild(main)

const sectionFrames = document.createElement("section")
const sectionAction = document.createElement("section") 
main.append(sectionFrames, sectionAction)


const titleFigures = document.createElement("h3")
titleFigures.innerText = "Action Figures"
sectionAction.appendChild(titleFigures)

const titleFrames = document.createElement("h3")
titleFrames.innerText = "Paintings"
sectionFrames.appendChild(titleFrames)


sectionAction.classList.add("action_section")
sectionFrames.classList.add("frames_section")
const ulFrames = document.createElement("ul")  
const ulFigures = document.createElement("ul")  
sectionFrames.appendChild(ulFrames)  
sectionAction.appendChild(ulFigures)



let listFigures = []   
let listFrames = []    
function separeteItens(itensList){ 
    for(let i = 0; i < itensList.length; i++){
        if(itensList[i].type == 'Painting'){
            listFrames.push(itensList[i])
        }else{
            listFigures.push(itensList[i])
        }
    }
}
separeteItens(itens)



for(let i = 0; i < listFrames.length; i++){
    const cardFrames = document.createElement("li")

    const imgFrames = document.createElement("img")
    imgFrames.src= listFrames[i].image
    cardFrames.appendChild(imgFrames)

    const nameFrames = document.createElement("span")
    nameFrames.innerHTML = listFrames[i].name
    cardFrames.appendChild(nameFrames)

    const priceFrames = document.createElement("p")
    priceFrames.innerText = listFrames[i].price
    cardFrames.appendChild(priceFrames)

    ulFrames.appendChild(cardFrames)
}



for(let i = 0; i < listFigures.length; i++){
    const cardFigures = document.createElement("li")
    
    const imgFigures = document.createElement("img")
    imgFigures.src= listFigures[i].image
    cardFigures.appendChild(imgFigures)

    const nameFigures = document.createElement("span")
    nameFigures.innerText = listFigures[i].name
    cardFigures.appendChild(nameFigures) 

    const priceFigures = document.createElement("p")
    priceFigures.innerText = listFigures[i].price
    cardFigures.appendChild(priceFigures)

    ulFigures.appendChild(cardFigures) 
}