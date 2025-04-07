(function test(a,b){
   

    let c = a + b;
    
    console.log(c)

})(10,20);



const fun = function(){
    
    console.log('hello')
};
fun();


//Arrow Function
const fun1 = (x,y) => {
    console.log(x-y)
}
fun1(10,30);