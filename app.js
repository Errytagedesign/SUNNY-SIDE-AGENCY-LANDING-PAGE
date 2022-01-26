//  Declare all variables

const toggleBtn =  document.querySelector('.hamburger');
const links = document.querySelector('.links');







toggleBtn.addEventListener('click', function(){

    if(toggleBtn.classList.contains('fa-bars')){

        toggleBtn.classList.remove('fa-bars')
        toggleBtn.classList.add('fa-times');
    
    } else{
        
        toggleBtn.classList.remove('fa-times')
        toggleBtn.classList.add('fa-bars');
        
    };

    links.classList.toggle("show-links");
    // document.style.transform = "rotate:90deg"
})