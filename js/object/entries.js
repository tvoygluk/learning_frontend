const obj = {
    a: 1,
    b: 5,
    c: 10
}
 
let foo = Object.entries(obj);
foo.forEach((element) => {
    console.log(element[0]);
    console.log(element[1]);
})