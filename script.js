/** more opetion bar for mobile screen **/
document.querySelector('.more').onclick =()=>
{
    document.querySelector('.v-nav').classList.toggle('dis-more')
}

window.addEventListener('scroll',()=>
{
    if(document.querySelector('.v-nav').classList.contains('dis-more'))
    {   
        document.querySelector('.v-nav').classList.remove('dis-more');
    }
})

document.querySelector('.home-btn').onclick =()=>{
    document.querySelector('.v-nav').classList.toggle('dis-more')
}




// THIS SCRIPT FOR HIDE OR UNHIDE COLOR BAR

const hider = document.querySelector('.set-col');
const d = document.querySelector('.color-changer');
hider.addEventListener('click', ()=>{
    document.querySelector('.color-changer').classList.toggle('open');
})

window.addEventListener('scroll',()=>{
    if (d.classList.contains('open'))
    {
        d.classList.remove('open');
    }
})

// SCRIPT FOR CHANGE THE COLOR

const getAll = document.querySelectorAll('.alternateStyle')

function StyleColor(color)
{
    getAll.forEach(element => {
        if(element.getAttribute('title')== color)
        {
            element.removeAttribute('disabled');
        }
        else
        {
            element.setAttribute('disabled',true);
        }
    });
}


// CREATE DAY AND NIGHT ICON

const dayNight = document.querySelector('.dayNight');
dayNight.addEventListener('click',()=>{

    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})

window.onload = function()
{
    if( dayNight.classList.contains('dark'))
    {
        dayNight.classList.remove('dark');
    }
}