console.log('hey');
let colors=['red','green','purple','orange','blue']
let myBtn=document.getElementById("myBtn");
let body=document.body;
myBtn.addEventListener('click',change);
function change()
{
    let color=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[color];
}