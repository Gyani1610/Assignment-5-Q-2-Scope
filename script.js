var x = 4;
console.log("In global: x=" + x + " (Because we are just printing a global variable.)");
function a() {
    var x = 6;
    console.log("a: x= " + x + "  (Because inside function a() we have set another value(6) in var x. )"); 
    b(); 
} 

function b() {
    console.log("b: x= " + x + "  (Because function b() is defined outside of function a(). )");
} 

function c() {
    console.log("c: x= " + x + "  (Because function b() is defined as well as called globally. )");
} 
a(); 

c();