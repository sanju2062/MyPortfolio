function thankyou(){
    document.getElementById("contact-form").style.display="none";
    document.getElementById("thankyoumessage").style.display="flex";
    
}


// var slideIndex = 0;
// carousel();

// function carousel(){
//     var i;
//     var x = document.getElementsByClassName("skill");
//     if(window.innerWidth<700){console.log(window.innerWidth);
//         for(i=0;i<x.length;i++){
//             x[i].style.display = 'none';
//         }
//         slideIndex++;
//         if(slideIndex> x.length)
//         {slideIndex= 1}
//         x[slideIndex-1].style.display='flex';
        
//     }
//     else{
//         for(i=0;i<x.length;i++){
//             x[i].style.display = 'flex';
//         }
//     }
// }
// setTimeout(carousel,2000);
// window.addEventListener('resize',()=>{
//     if(window.innerWidth<700){
//         carousel();
//     }
// });
// window.addEventListener('onload',carousel);

var counter=1;
setInterval(
    function(){
        document.getElementById("radio"+counter).checked = true;
        counter++;
        if(counter>3){
            counter=1;
        }
    },2000);