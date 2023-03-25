let vize = prompt( "Vize notunu giriniz") 
let final = prompt( "Final notunu giriniz") 

function dersSonucu(vize, final){
    let dersNotu = parseInt((vize * 0.4) + (final * 0.6))
    if(dersNotu > 50){
        alert("Dersi Geçtiniz, Notunuz : " + dersNotu)
    }else{
        alert("Dersten Kaldınız, Notunuz : " + dersNotu)
    }
}

dersSonucu(vize, final)