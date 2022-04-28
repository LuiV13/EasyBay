console.log("Page Loaded Successfully!!")

function over(element){
    document.getElementById("succulents").src = 
    "images/assets/succulents-2.jpg";
    console.log("It changes photos on hover");
}

function out(element){
    document.getElementById("succulents").src = 
    "images/assets/succulents-1.jpg";
}

function hide(cookies){
    cookies.remove();
    console.log("The cookie pop-up has been removed!!");
}