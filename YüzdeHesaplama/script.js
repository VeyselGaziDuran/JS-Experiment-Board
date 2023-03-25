alert(" Yüzde Hesaplamay Hoşgeldin \n DİKKATLİ OL \n !!!!  küsüralı değer kabul edilmez !!!! ")
let sayi1
while (true) {
sayi1 = prompt("hangi sayı nın yüzdesini almak istersin  ?")
if (Number.isInteger(Number(sayi1))) {
    break
}
alert("Geçersiz Karakter ")
}


let sayi2
while (true) {
sayi2 = prompt("Yüzde kaçını almak istersin ?")
if (Number.isInteger(Number(sayi2))) {
    break
}
alert("Geçersiz Karakter ")
}

let sonuc = (sayi1 / 100 ) * sayi2

if(sonuc == null || sonuc == undefined ){
alert("Cevap yok")
}else{

const sonSonuc = sayi1 + " sayısının yüzde " + sayi2 + " değeri = " + (sonuc)
alert(sonSonuc)
console.log(document.write(sonSonuc))
}

let sorgu

sorgu = prompt("Yeniden Hesaplama Yapmak istermisin \n 1 evet \n 2 hayır")

if( sorgu == 1){
    alert("F5'e bas")
}else if(sorgu == 2){
    alert("Tekrar gel :)")
}else{
alert(" yanlış karakter")
}