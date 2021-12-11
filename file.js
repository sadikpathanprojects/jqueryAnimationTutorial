$("#sample").click(function () {
     $("#sample").fadeOut();

  function fun1(){
    document.querySelector(".a").classList.add("b");
    document.querySelector(".b").classList.remove("a");
  }

  setTimeout(fun1,500);


  
})

