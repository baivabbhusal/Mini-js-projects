const time=document.querySelector("#clock");




setInterval(function(){
    const date=new Date();//to access time 
    
    clock.innerHTML= date.toLocaleTimeString()
    clock.style.color="black";
    //clock.style.fontWeight="bolder";
    //clock.style.textAlign="center";
},1000)//1000 change after 1 sec
