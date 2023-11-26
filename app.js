let run = () => {
  let htmlCode = document.querySelector("#html-code").value;
  let cssCode = document.querySelector("#css-code").value;
  let javascriptCode = document.querySelector("#javascript-code").value;
  let outPut = document.querySelector("#out-put");


  outPut.contentDocument.body.innerHTML = htmlCode +"<style>"+ cssCode +"</style>" ;
  outPut.contentWindow.eval(javascriptCode)
};
