 function num() {
        var num1 = document.getElementById('num1').value;
        var num3 = document.getElementById('nume').value;
        var num2 = document.getElementById('num2').value;
        var numOperators = (num3.match(/[+\-*/]/g) || []).length; // Count the number of operators
        if (numOperators > 1) {
        alert("Please enter only one operator (+, -, /, *)");
        return;}
        console.log("num1: " + num1);
        console.log("num3: " + num3);
        console.log("num2: " + num2);
        var text = num1 + num3 + num2;
        console.log("text: " + text);
        var result1 = eval(text);
        console.log("result1: " + result1);
        alert('caculated, the answer is :'+result1)
        document.getElementById("screen").innerHTML = result1;


 }
function er(err){
        alert("Something Error")

}  
      //window.location.reload()

function clear2(){
    document.getElementById('num1').value=" "
    document.getElementById('num2').value=" "
    document.getElementById('screen').innerHTML = ''
    console.log('workingclear')
    
}
function up(){
    document.getElementById('num1').value = document.getElementById('screen').innerHTML
    document.getElementById('num2').value=" "
    document.getElementById('screen').innerHTML = ''
    console.log('workingup')
}