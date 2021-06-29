function thankyou(){
    document.getElementById("contact-form").style.display="none";
    document.getElementById("thankyoumessage").style.display="flex";
    
}

var counter=1;
setInterval(
    function(){
        document.getElementById("radio"+counter).checked = true;
        counter++;
        if(counter>4){
            counter=1;
        }
    },4000);