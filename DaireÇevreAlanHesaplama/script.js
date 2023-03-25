let yaricap = prompt("Yarıçapı Giriniz")

function daireCevreAlani(yaricap){
    let cevre = parseInt(2 * Math.PI * yaricap)
    alert("Dairenin Cevresi = " + cevre)

    let alan = parseInt(Math.PI * yaricap * yaricap)
    alert("Dairenin alani = " + alan)

}

daireCevreAlani(yaricap)