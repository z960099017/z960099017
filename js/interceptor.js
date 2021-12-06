
      function interceptor(){
        if(!$.cookie().name){
          alert("请登录")
          window.location="../login.html"
        }
      }
   