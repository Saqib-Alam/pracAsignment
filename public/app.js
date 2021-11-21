

function color(col){
    var bg_text=document.getElementById("bg_text");
    if(col=='bg'){
        var bgColor =prompt("Enter background color");
        bg_text.style.backgroundColor=bgColor;
    }
    if(col=='text'){
        var textColor= prompt("Enter text color");
        bg_text.style.color=textColor;
    }
}


function imgSize(shw){
    var size=document.getElementById('spiderMan');
    if(shw=='show'){
        size.style.display='inline-block';
        size.style.width='400px';
        size.style.height='500px';
    }

    else if(shw=='big'){
        size.style.display='inline-block';
        size.style.width='500px';
        size.style.height='600px';
    }

    else if(shw=='small'){
        size.style.display='inline-block';
        size.style.width='300px';
        size.style.height='400px';
    }
    else if(shw=='hide'){
        size.style.display='none';
        
    }
}


function bulb(state){
    var bulb=document.getElementById("bulb");
    if(state=='on'){
        bulb.src="./images/bulb-On.jpg"
    }

    else if(state=='off'){
        bulb.src="./images/bulb-Off.jpg"
    }
}


function changeColor(){

    var pColor=document.getElementsByTagName('p')
    var p1=prompt("Color for p1");
    var p2=prompt("Color for p2");
    var p3=prompt("Color for p3");
    var p4=prompt("Color for p4");


    pColor[0].style.color=p1;
    pColor[1].style.color=p2;
    pColor[2].style.color=p3;
    pColor[3].style.color=p4;
}
