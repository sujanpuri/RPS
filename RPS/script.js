
let ycheck, ccheck;

// image selection

let you = document.querySelector('#you');
let yName = document.querySelector('#youName');

let selectR = document.querySelector('#rock');
selectR.addEventListener('click', function()
{
    you.setAttribute("src", "rock.svg");
    yName.innerHTML = "Rock";
    ycheck = "r";

});
let selectP = document.querySelector('#paper');
selectP.addEventListener('click', function()
{
    you.setAttribute("src", "paper.svg");
    yName.innerHTML = "Paper";
    ycheck = "p";
});
let selectS = document.querySelector('#scissor');
selectS.addEventListener('click', function()
{
    
    you.setAttribute("src", "scissor.svg");
    yName.innerHTML = "Scissor";
    ycheck = "s";
});

// computer image generation.

let ai = document.querySelector('#ai');
let cName = document.querySelector('#compName');

let selectedr = document.querySelector('#rock');
selectedr.addEventListener('click', function()
{
    let value = Math.floor(Math.random()*9);

    if(value<3)
    {
        ai.setAttribute("src", "rock.svg");
        cName.innerHTML = "Rock";
        ccheck = "r";
    }
    else if(value>=3 && value<6)
    {
        ai.setAttribute("src", "paper.svg");
        cName.innerHTML = "Paper";
        ccheck = "p";
    }
    else
    {
        ai.setAttribute("src", "scissor.svg");
        cName.innerHTML = "Scissor";
        ccheck = "s";
    }
    check();
})

let selectedp = document.querySelector('#paper');
selectedp.addEventListener('click', function()
{
    let value = Math.floor(Math.random()*9);

    if(value<3)
    {
        ai.setAttribute("src", "rock.svg");
        cName.innerHTML = "Rock";
        ccheck = "r";
    }
    else if(value>=3 && value<6)
    {
        ai.setAttribute("src", "paper.svg");
        cName.innerHTML = "Paper";
        ccheck = "p";
    }
    else
    {
        ai.setAttribute("src", "scissor.svg");
        cName.innerHTML = "Scissor";
        ccheck = "s";
    }
    check();
})

let selecteds = document.querySelector('#scissor');
selecteds.addEventListener('click', function()
{
    let value = Math.floor(Math.random()*9);

    if(value<3)
    {
        ai.setAttribute("src", "rock.svg");
        cName.innerHTML = "Rock";
        ccheck = "r";
    }
    else if(value>=3 && value<6)
    {
        ai.setAttribute("src", "paper.svg");
        cName.innerHTML = "Paper";
        ccheck = "p";
    }
    else
    {
        ai.setAttribute("src", "scissor.svg");
        cName.innerHTML = "Scissor";
        ccheck = "s";
    }
    check();
})

// Value Comparision.
let yresult=0, cresult=0;
function check()
{
    if(ycheck==ccheck)
    {
        let c = document.querySelector('#comp');
        let y = document.querySelector('#your');
        yresult +=0;
        cresult +=0;
        c.innerHTML= cresult;
        c.style.color="black";
        y.innerHTML= yresult;
        y.style.color="black";
    }
    
    else if(ycheck=="r" && ccheck=="p" || ycheck=="p" && ccheck=="s" || ycheck=="s" && ccheck=="r")
    {
        let c = document.querySelector('#comp');
        let y = document.querySelector('#your');
        cresult+=1;
        yresult+=0;
        c.innerHTML=cresult;
        c.style.color = "green"
        y.innerHTML=yresult;
        y.style.color="red";
    }
    else
    {
        let c = document.querySelector('#comp');
        let y = document.querySelector('#your');
        cresult+=0;
        yresult+=1;
        c.innerHTML=cresult;
        c.style.color="red"
        y.innerHTML=yresult;
        y.style.color="green";
    }
}