function number(num){
 var input= document.getElementById('input');
 input.value +=num

}

function result(){
    var result = document.getElementById("input");
    result.value = eval(result.value);
}
function clearinput(){
document.getElementById("input").value=""
}
