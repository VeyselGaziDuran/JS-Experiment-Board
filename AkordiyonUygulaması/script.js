

let accordion = document.querySelector('#accordion')


let titles = accordion.getElementsByTagName('h2')



for(i = 0; i < titles.length; i++){

    titles[i].addEventListener('click', displayAccordion)

}


function displayAccordion(){
    content = this.nextElementSibling

    if(content.style.display != 'block' ){
        content.style.display ='block'
    }else{
        content.style.display ='none'
    }
}
