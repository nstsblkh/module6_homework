function func(a){
    return function sum(b){
        console.log(a + b)
    }
};
func(2)(3);