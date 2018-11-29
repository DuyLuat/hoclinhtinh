var point = 0;
function addCls(id) {
  var element = document.getElementById(id);
  element.classList.add("mystyle");
}

function removeCls(id) {
  var element = document.getElementById(id);
    element.classList.remove("mystyle");

}
function clickbtn(id) {
  var classNames = document.getElementById(id).className;
  console.log(classNames);
  return classNames;
}

function play() {
  var classNa;
  var curClass='';

   
    setInterval(function() {
        var tmp = Math.floor(Math.random() * 9);
        var btn = "btn" + tmp;
    
      addCls(btn);

      //classNa=clickbtn(btn);
      //console.log(classNa);

      // if (classNa == "mystyle") {
      //   point++;
      //   var result = document.getElementById("score");
      //   var resulthtml = "Score: " + point;
      //   result.innerText = resulthtml;
      // } else {
      //   alert("Hỏng rồi");
      // }
      //removeCls(btn);
    }, 1000);
    



}
