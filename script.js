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

//criando elementos e adicionando dados a eles
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
const ulFrames = document.createElement("ul")  // armazenará os cards tipo "frames"
const ulFigures = document.createElement("ul")  // armazenará os cards tipo "action"
sectionFrames.appendChild(ulFrames)  
sectionAction.appendChild(ulFigures)



let listFigures = []   //armazenará os objetos tipo "action"
let listFrames = []    //armazenará os objetos tipo "frames"
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


//criando card para seção de frames
for(let i = 0; i < listFrames.length; i++){
    const cardFrames = document.createElement("li")

    const boxImgFrames = document.createElement("figure")
    const imgFrames = document.createElement("img")
    imgFrames.src= listFrames[i].image
    boxImgFrames.appendChild(imgFrames)
    cardFrames.appendChild(boxImgFrames)

    const nomeFrames = document.createElement("span")
    nomeFrames.innerHTML = listFrames[i].name
    cardFrames.appendChild(nomeFrames)

    const priceFrames = document.createElement("p")
    priceFrames.innerText = listFrames[i].price
    cardFrames.appendChild(priceFrames)

    ulFrames.appendChild(cardFrames)
}


//criando card para seção de action figures
for(let i = 0; i < listFigures.length; i++){
    const cardFigures = document.createElement("li")
    
    const boxImgFigures = document.createElement("figure")
    const imgFigures = document.createElement("img")
    imgFigures.src= listFigures[i].image
    boxImgFigures.appendChild(imgFigures)
    cardFigures.appendChild(boxImgFigures)

    const nomeFigures = document.createElement("span")
    nomeFigures.innerText = listFigures[i].name
    cardFigures.appendChild(nomeFigures) 

    const priceFigures = document.createElement("p")
    priceFigures.innerText = listFigures[i].price
    cardFigures.appendChild(priceFigures)

    ulFigures.appendChild(cardFigures) 
}