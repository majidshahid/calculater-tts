function number(num){
 var input= document.getElementById('input');
 input.value +=num

}

function result(){
    var result = document.getElementById("input");
   if(result.value ==""){
result.value=''
   }else{
       result.value=eval(result.value)
   }
}
function clearinput(){
document.getElementById("input").value=""
}
function delet(){
    document.getElementById("input").value=document.getElementById("input").value.toString().slice(0,-1);
}