// function number(num) {
//     var input = document.getElementById('input');
//     var lastindex = input.value.slice(-1);
//     var opt = ["+", "-", "/", "*"];
//     if (opt.indexOf(lastindex) !== -1 && opt.indexOf(num) !== -1) {
//         input.value = input.value.slice(0, -1) + num
//     } else {
//         input.value += num
//     }

// }

function number (num){
    var input= document.getElementById("input");
    var lastindex = input.value.slice(-1);
    var opt = ["+","-","/","*"];
    if (opt.indexOf(lastindex) !== -1 && opt.indexOf(num) !== -1){
        input.value =input.value.slice(0,-1) + num
    }else{
        input.value += num
    }
}
function result() {
    var result = document.getElementById("input");
    if (result.value == "") {
        result.value = ''
    } else {
        result.value = eval(result.value)
    }
}
function clearinput() {
    document.getElementById("input").value = ""
}
function delet() {
    document.getElementById("input").value = document.getElementById("input").value.toString().slice(0, -1);
}
