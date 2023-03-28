let i = 0
let images = [
    'https://picsum.photos/400/200',
    'https://picsum.photos/seed/picsum/400/200',
    'https://picsum.photos/400/200/?blur=2',
]

let duration = 1000;


function slideImg(){
    document.getElementById("slide").src = images[i]

    if(i < images.length -1){
        i++
    }else{
        i = 0
    }

    setTimeout(slideImg, duration)
}

window.onload = slideImg;
