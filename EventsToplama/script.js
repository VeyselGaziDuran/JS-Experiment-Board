        
        
        let num1 = document.querySelector("#numberOne")
        let num2 = document.querySelector("#numberTwo")
        let sum = document.querySelector("#sum")

        num1.addEventListener('input', topla)
        num2.addEventListener('input', topla)

        function topla(){
        let one = parseInt(num1.value) || 0
        let two = parseInt(num2.value) || 0

        sum.innerHTML = "Toplam Sonuç: " + (one + two)
    }