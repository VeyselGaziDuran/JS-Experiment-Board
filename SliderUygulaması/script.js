let models =[
    {
        name:'Antelope',
        image:'img/Antelope.png',
        link:'https://en.wikipedia.org/wiki/Antelope'
    },
    {
        name:'Dolphin',
        image:'img/Dolphin.png',
        link:'https://en.wikipedia.org/wiki/Dolphin'
    },
    {
        name:'Horse',
        image:'img/Horse.png',
        link:'https://en.wikipedia.org/wiki/Horse'
    },
    {
        name:'Lemur',
        image:'img/Lemur.png',
        link:'https://en.wikipedia.org/wiki/Lemur'
    },
    {
        name:'Zebra',
        image:'img/zebra.png',
        link:'https://en.wikipedia.org/wiki/Zebra'
    },
]

let index = 0
let slaytCount = models.length
showSlide(index)

document.querySelector('.fa-circle-arrow-left').addEventListener
('click',function(){
    index--
    showSlide(index)
})

document.querySelector('.fa-circle-arrow-right').addEventListener
('click',function(){
    index++
    showSlide(index)
})


function showSlide(i){

    index = i

    if(i<0){
        index = slaytCount-1
    }
    if(i>=slaytCount){
        index=0
    }

    document.querySelector('.card-title').textContent =models[index].name

    document.querySelector('.card-img-top').setAttribute('src',models[index].image)

    document.querySelector('.card-link').setAttribute('href',models[index].link)
}


