const productsCart = [{
        id: 1,
        name: "Monitor LED 27 240Hz",
        price: 2799
    },
    {
        id: 2,
        name: 'Mouse',
        price: 209.99
    },
    {
        id: 3,
        name: 'Teclado Mêcanico',
        price: 799.99
    },
    {
        id: 4,
        name: 'Headset Gamer',
        price: 699.99
    },
    {
        id: 5,
        name: 'Placa de Vídeo Nvídia Geforce RTX3080 TI',
        price: 9999.99
    }
]
let body = document.querySelector('body')
let main = document.createElement('main')
let productlist = document.createElement('ul')
let section = document.createElement('section')
let soma = []
let btnFinalizar = document.createElement('button')
let header = document.createElement('header')
let h1 = document.createElement('h1')

function Somar(prod) {
    let resultado = 0
    for (let i = 0; i < prod.length; i++) {
        resultado += prod[i].price
    }
    return resultado
}

body.appendChild(header)
header.appendChild(h1)
body.appendChild(main)
main.appendChild(productlist)
main.appendChild(section)
section.append(soma)
section.appendChild(btnFinalizar)

h1.innerText = 'Virtual Market'
section.id = 'section'
btnFinalizar.id = 'btn'
btnFinalizar.innerText = 'Finalizar compra'

let listaDeCompras = []

function create(nome, valor) {
    let item = {
        name: nome,
        price: valor
    };

    return item;
}

let item = document.createElement('li')
let span = document.createElement('span')
let span0 = document.createElement('span')

span.innerText = 'Item'
span0.innerText = 'Valor'
item.id = 'item'

span.setAttribute('class', 'span1')
span0.classList.add('span2')

productlist.append(item)
item.appendChild(span)
item.appendChild(span0)

for (let i = 0; i < productsCart.length; i++) {

    listaDeCompras.push(create(productsCart[i].name, productsCart[i].price));

}

function criarCardProduto(produto) {

    if (listaDeCompras.length > 0) {

        for (let i = 0; i < listaDeCompras.length; i++) {


            let productItem = document.createElement('li')
            let span1 = document.createElement('span')
            let span2 = document.createElement('span')

            productItem.id = 'produtosDoCarrinho'
            span1.innerText = listaDeCompras[i].name
            span2.innerText = `R$ ${listaDeCompras[i].price}`
            span1.setAttribute('class', 'span1')
            span2.classList.add('span2')

            productlist.appendChild(productItem)
            productItem.appendChild(span1)
            productItem.appendChild(span2)


        }
    }

}
criarCardProduto(productsCart)

let Total = document.createElement('li')
let spanTotal = document.createElement('span')
let spanSoma = document.createElement('span')

spanTotal.innerText = 'Total'
spanSoma.innerText = `R$ ${Somar(productsCart)}`

Total.id = 'Total'
spanSoma.id = 'spanSoma'
spanTotal.id = 'spanTotal'

spanTotal.setAttribute('class', 'span1')
spanSoma.classList.add('span2')

productlist.append(Total)
Total.appendChild(spanTotal)
Total.appendChild(spanSoma)