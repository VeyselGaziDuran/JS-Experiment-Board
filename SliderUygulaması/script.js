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
let interval

let settings={
    duration:'2000',
    random:false
}





init(settings)

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

document.querySelectorAll('.fa-2x').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval)
    })
})

document.querySelectorAll('.fa-2x').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings)
    })
})

function init(settings){

    let prev
   interval = setInterval(function(){

        if(settings.random){

            do{
            index= Math.floor(Math.random() * slaytCount)
            }while(index == prev){
                prev = index
            }
        }else{
            if(slaytCount==index +1){
                index=-1
            }
            showSlide(index)
            index++
        }
        showSlide(index)
    },settings.duration)


}



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


