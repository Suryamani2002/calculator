var typebox=document.getElementById("type-box");

// console.log(dis)
function dis(val) {
    console.log(val)
    document.getElementById("type-box").value+=val;
}
function clr(){
    document.getElementById("type-box").value="";

}

function solve(){
    let x=document.getElementById("type-box").value;
    let y=eval(x);
    document.getElementById("type-box").value=y;
}

// var enter=document.getElementById("equal-to");
// console.log(enter);

// enter.addEventListener('click',function(){
//     solve();
// });

typebox.addEventListener('keydown',function(e){
   if(e.keycode===13){
       console.log("hello ,anm")
        solve();
   }
   if(e.keycode===61){
       console.log("2nd wal")
        solve();
   }
});



