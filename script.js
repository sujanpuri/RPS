
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

function check()
{
    if(ycheck==ccheck)
    {
        document.querySelector('#comp').innerHTML="Draw";
        document.querySelector('#your').innerHTML="Draw";
    }
    
    else if(ycheck=="r" && ccheck=="p" || ycheck=="p" && ccheck=="s" || ycheck=="s" && ccheck=="r")
    {
        document.querySelector('#comp').innerHTML="Win";
        document.querySelector('#your').innerHTML="Loose";
    }
    else
    {
        document.querySelector('#comp').innerHTML="Loose";
        document.querySelector('#your').innerHTML="Win";
    }
}