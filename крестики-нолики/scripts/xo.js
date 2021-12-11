//xo

var permennaya , button, allBlock; 
//для каждой кнопки создали функцию, сами по себе функции одинаковые, просто относятся к разным кнопкам
function b1 (){     //1 кнопка
    rezult = document.getElementById("rezult").innerHTML;
    if(rezult != "false") //когда rezult будет = false игра закончится
    {  
    button =document.getElementById("id_1").innerHTML; 
    if(button === "") {
        if(rezult == "x"){permennaya = "0"} else { permennaya = "x";} //для смены игрока (х на 0 и 0 на х)
      document.getElementById("id_1").innerHTML  = permennaya; 
      document.getElementById("rezult").innerHTML  = permennaya; } //заменяет значение
      test();     //вызываем функцию, которая будет проверять нужно заканчивать игру или нет
    }
    else
    {
      alert('Игра закончена - перезагрузите страницу');
    }

}
function b2 (){     //2 кнопка 
    rezult = document.getElementById("rezult").innerHTML;
    if(rezult != "false")
    { button =document.getElementById("id_2").innerHTML; 
    if(button === "") {if(rezult == "x"){permennaya = "0"} else { permennaya = "x";}
      document.getElementById("id_2").innerHTML  = permennaya; 
      document.getElementById("rezult").innerHTML  = permennaya; }
      test();     
    }
    else
    {
      alert('Игра закончена - перезагрузите страницу');
    }
    
}
function b3 (){     
    rezult = document.getElementById("rezult").innerHTML;
    if(rezult != "false")
    {  
    button =document.getElementById("id_3").innerHTML; 
    if(button === "") {if(rezult == "x"){permennaya = "0"} else { permennaya = "x";}
      document.getElementById("id_3").innerHTML  = permennaya; 
      document.getElementById("rezult").innerHTML  = permennaya; }
      test();     
    }
    else
    {
      alert('Игра закончена - перезагрузите страницу');
    }
    
}
function b4 (){     
    rezult = document.getElementById("rezult").innerHTML;
    if(rezult != "false")
    {  
    button =document.getElementById("id_4").innerHTML; ;
    if(button === "") {if(rezult == "x"){permennaya = "0"} else { permennaya = "x";}
      document.getElementById("id_4").innerHTML  = permennaya; 
      document.getElementById("rezult").innerHTML  = permennaya; }
      test();     
    }
    else
    {
      alert('Игра закончена - перезагрузите страницу');
    }

}
function b5 (){     
    rezult = document.getElementById("rezult").innerHTML;
    if(rezult != "false")
    {  
    button =document.getElementById("id_5").innerHTML; 
    if(button === "") {if(rezult == "x"){permennaya = "0"} else { permennaya = "x";}
      document.getElementById("id_5").innerHTML  = permennaya; 
      document.getElementById("rezult").innerHTML  = permennaya; }
      test();     
    }
    else
    {
      alert('Игра закончена - перезагрузите страницу');
    } 

}
function b6 (){     
    rezult = document.getElementById("rezult").innerHTML;
    if(rezult != "false")
    {  
    button =document.getElementById("id_6").innerHTML; 
    if(button === "") {if(rezult == "x"){permennaya = "0"} else { permennaya = "x";}
      document.getElementById("id_6").innerHTML  = permennaya; 
      document.getElementById("rezult").innerHTML  = permennaya; }
      test();     
    }
    else
    {
      alert('Игра закончена - перезагрузите страницу');
    }
    
}
function b7 (){     
    rezult = document.getElementById("rezult").innerHTML;
    if(rezult != "false")
    {  
    button =document.getElementById("id_7").innerHTML; 
    if(button === "") {if(rezult == "x"){permennaya = "0"} else { permennaya = "x";}
      document.getElementById("id_7").innerHTML  = permennaya; 
      document.getElementById("rezult").innerHTML  = permennaya; }
      test();     
    }
    else
    {
      alert('Игра закончена - перезагрузите страницу');
    }

}
function b8 (){     
    rezult = document.getElementById("rezult").innerHTML;
    if(rezult != "false")
    {  
    button =document.getElementById("id_8").innerHTML; 
    if(button === "") {if(rezult == "x"){permennaya = "0"} else { permennaya = "x";}
      document.getElementById("id_8").innerHTML  = permennaya; 
      document.getElementById("rezult").innerHTML  = permennaya; }
      test();     
    }
    else
    {
      alert('Игра закончена - перезагрузите страницу');
    }   

}
function b9 (){     
    rezult = document.getElementById("rezult").innerHTML;
    if(rezult != "false")
    {  
    button =document.getElementById("id_9").innerHTML; 
    if(button === "") {if(rezult == "x"){permennaya = "0"} else { permennaya = "x";}
      document.getElementById("id_9").innerHTML  = permennaya; 
      document.getElementById("rezult").innerHTML  = permennaya; }
      test();     
    }
    else
    {
      alert('Игра закончена - перезагрузите страницу');
    }

}
// проверяем победил ли кто-нибудь, если да, то выводим победителя
function test(){
    allBlock = document.getElementsByClassName("block")
    if(allBlock[0].innerHTML =='x' 
    & allBlock[1].innerHTML =='x' 
    & allBlock[2].innerHTML =='x'){
        alert('Крестики победили! Перезагрузите страницу, если хотите сыграть еще раз'); document.getElementById("rezult").innerHTML  =  false;
    } else if (allBlock[0].innerHTML =='0' 
    & allBlock[1].innerHTML =='0' 
    & allBlock[2].innerHTML =='0') {
        alert('Нолики победили! Перезагрузите страницу, если хотите сыграть еще раз'); document.getElementById("rezult").innerHTML  =  false;
    } else if (allBlock[3].innerHTML =='0' 
    & allBlock[4].innerHTML =='0' 
    & allBlock[5].innerHTML =='0') {
        alert('Нолики победили! Перезагрузите страницу, если хотите сыграть еще раз'); document.getElementById("rezult").innerHTML  =  false;
    } else if (allBlock[6].innerHTML =='0' 
    & allBlock[7].innerHTML =='0' 
    & allBlock[8].innerHTML =='0') {
        alert('Нолики победили! Перезагрузите страницу, если хотите сыграть еще раз'); document.getElementById("rezult").innerHTML  =  false;
    } else if (allBlock[3].innerHTML =='x' 
    & allBlock[4].innerHTML =='x' 
    & allBlock[5].innerHTML =='x') {
        alert('Крестики победили! Перезагрузите страницу, если хотите сыграть еще раз'); document.getElementById("rezult").innerHTML  =  false;
    } else if (allBlock[6].innerHTML =='x' 
    & allBlock[7].innerHTML =='x' 
    & allBlock[8].innerHTML =='x') {
        alert('Крестики победили! Перезагрузите страницу, если хотите сыграть еще раз'); document.getElementById("rezult").innerHTML  =  false;
    } else if (allBlock[0].innerHTML =='x' 
    & allBlock[4].innerHTML =='x' 
    & allBlock[8].innerHTML =='x') {
        alert('Крестики победили! Перезагрузите страницу, если хотите сыграть еще раз'); document.getElementById("rezult").innerHTML  =  false;
    } else if (allBlock[2].innerHTML =='x' 
    & allBlock[4].innerHTML =='x' 
    & allBlock[6].innerHTML =='x') {
        alert('Крестики победили! Перезагрузите страницу, если хотите сыграть еще раз'); document.getElementById("rezult").innerHTML  =  false;
    } else if (allBlock[0].innerHTML =='x' 
    & allBlock[3].innerHTML =='x' 
    & allBlock[6].innerHTML =='x') {
        alert('Крестики победили! Перезагрузите страницу, если хотите сыграть еще раз'); document.getElementById("rezult").innerHTML  =  false;
    }else if (allBlock[1].innerHTML =='x' 
    & allBlock[4].innerHTML =='x' 
    & allBlock[7].innerHTML =='x') {
        alert('Крестики победили! Перезагрузите страницу, если хотите сыграть еще раз'); document.getElementById("rezult").innerHTML  =  false;
    }else if (allBlock[2].innerHTML =='x' 
    & allBlock[5].innerHTML =='x' 
    & allBlock[8].innerHTML =='x') {
        alert('Крестики победили! Перезагрузите страницу, если хотите сыграть еще раз'); document.getElementById("rezult").innerHTML  =  false;
    } else if (allBlock[0].innerHTML =='0' 
    & allBlock[4].innerHTML =='0' 
    & allBlock[8].innerHTML =='0') {
        alert('Нолики победили! Перезагрузите страницу, если хотите сыграть еще раз'); document.getElementById("rezult").innerHTML  =  false;
    } else if (allBlock[2].innerHTML =='0' 
    & allBlock[4].innerHTML =='0' 
    & allBlock[6].innerHTML =='0') {
        alert('Нолики победили! Перезагрузите страницу, если хотите сыграть еще раз'); document.getElementById("rezult").innerHTML  =  false;
    } else if (allBlock[0].innerHTML =='0' 
    & allBlock[3].innerHTML =='0' 
    & allBlock[6].innerHTML =='0') {
        alert('Нолики победили! Перезагрузите страницу, если хотите сыграть еще раз'); document.getElementById("rezult").innerHTML  =  false;
    }else if (allBlock[1].innerHTML =='0' 
    & allBlock[4].innerHTML =='0' 
    & allBlock[7].innerHTML =='0') {
        alert('Нолики победили! Перезагрузите страницу, если хотите сыграть еще раз'); document.getElementById("rezult").innerHTML  =  false;
    }else if (allBlock[2].innerHTML =='0' 
    & allBlock[5].innerHTML =='0' 
    & allBlock[8].innerHTML =='0') {
        alert('Нолики победили! Перезагрузите страницу, если хотите сыграть еще раз'); document.getElementById("rezult").innerHTML  =  false;
    } else if ((allBlock[0].innerHTML =='0'| allBlock[0].innerHTML =='x')
    & (allBlock[1].innerHTML =='0' | allBlock[1].innerHTML =='x')
    & (allBlock[2].innerHTML =='0'| allBlock[2].innerHTML =='x')
    & (allBlock[3].innerHTML =='0' | allBlock[3].innerHTML =='x')
    & (allBlock[4].innerHTML =='0' | allBlock[4].innerHTML =='x')
    & (allBlock[5].innerHTML =='0'| allBlock[5].innerHTML =='x')
    & (allBlock[6].innerHTML =='0' | allBlock[6].innerHTML =='x')
    & (allBlock[7].innerHTML =='0' | allBlock[7].innerHTML =='x')
    & (allBlock[8].innerHTML =='0'| allBlock[8].innerHTML =='x')) {alert('Ничья! Перезагрузите страницу, если хотите сыграть еще раз'); document.getElementById("rezult").innerHTML  =  false;
} 
}
