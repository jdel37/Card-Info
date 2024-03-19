let name=document.querySelector(".num1")
let nameTar=document.querySelector(".numb")
let name2=name.value
name.addEventListener('keyup',()=>
{
    if(name.value=="")
    {
        nameTar.textContent="0000 0000 0000 0000"
    }
    else
    {
        nameTar.textContent=name.value
    }
   
})

