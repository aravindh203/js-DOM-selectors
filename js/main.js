                    /*id*/
function idselect(){
  let a=document.getElementById("hello");
  console.log(a.innerText);
};

                    /*class*/
function classselect(){
  let a=document.getElementsByClassName("hello")
  console.log(a[0].innerText)
};

                    /*name*/
function nameselect(){
  let a=document.getElementsByName("hello")
  console.log(a[0].innerText)
};

                    /*tagname*/
function tagnameselect(){
  let a=document.getElementsByTagName("h1")
  console.log(a[3].innerText)
};