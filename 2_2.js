function isPrime(num){
    if (num > 1000){console.log("Данные неверны")}
    else {
        if (num < 2) {
            console.log('Число должно быть больше 1') ;
        } else if (num === 2) {
            console.log('Простое число');
        }
        const limit = Math.sqrt(num)
        let i = 2;
        if(i <= limit){
            i++;
            if (num % i === 0)
                console.log('Составное число');
        } else if (num !== 1 && num !== 0){console.log('Простое число');}

    }
}
