function hello(){
    console.log('hello')
}
function sum(no1, no2){
    return no1+no2
}
let person = {name:'싸피', age:2}

export {hello, sum, person}

export default{
    name:'홍기환',
    gender:'M'
}