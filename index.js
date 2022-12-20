// Random no for RHS hand
var source1;
var randomNum1=Math.random();
randomNum1=randomNum1*3;
randomNum1=Math.floor(randomNum1)+1;
var i;
var rocksource=document.querySelector("#rock").src;
var papersource=document.querySelector("#paper").src;
var scissorsource=document.querySelector("#scissor").src;
for(i=0;i<3;i++)
{
document.querySelectorAll(".img3")[i].addEventListener("click",changeImage);
function changeImage()
{
    // makeSound();
    var source1=this.src; 
    // alert(source1);
    changeLHSimg(source1);
    if(randomNum1===1)
    {
        document.querySelector(".img2").src="images/rock-cpu.png";
        if(source1===rocksource)
        {
            document.querySelector("h2").textContent="Draw";
            // draw
        }
        else if(source1===papersource)
        {
            document.querySelector("h2").textContent="You wins";
            // You Wins!
        }
        else
        {
             document.querySelector("h2").textContent="Computer Wins";
            // Computer wins
        }
        setTimeout(myFunction, 2500)
        //location.reload();
    }
    else if(randomNum1===2)
    {
        document.querySelector(".img2").src="images/paper-cpu.png";
        if(source1===rocksource)
        {
            document.querySelector("h2").textContent="Computer Wins";
        }
        else if(source1===papersource)
        {
            document.querySelector("h2").textContent="Draw";
        }
        else
        {
            document.querySelector("h2").textContent="You Wins!";
        }
        setTimeout(myFunction, 2500)
        //location.reload();
    }
    else{
        document.querySelector(".img2").src="images/scissors-cpu.png";
        if(source1===rocksource)
        {
            document.querySelector("h2").textContent="You Wins!";
        }
        else if(source1===papersource)
        {
            document.querySelector("h2").textContent="Computer Wins";
        }
        else
        {
            document.querySelector("h2").textContent="Draw";
        }
        setTimeout(myFunction, 2500)
        //location.reload();
    }
}
}
function myFunction()
{
    location.reload();
}
function changeLHSimg(source)
{
    // $(".img1").attr("src", $(".img3").attr("src"));
    document.querySelector(".img1").src=source;
}