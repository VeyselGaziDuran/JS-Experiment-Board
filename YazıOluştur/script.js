window.onload = function(){
    let beforeButton = document.querySelector("#beforeButton")
    beforeButton.addEventListener("click", function(){

        let newNode = document.createElement("p")
        newNode.innerHTML = "<strong> New Paragraf Element </strong>"
        newNode.setAttribute("id", "myNode")

        let myArray = document.getElementsByClassName("container")
        myArray[0].insertBefore(newNode, myArray[0].firstElementChild)
    })
}