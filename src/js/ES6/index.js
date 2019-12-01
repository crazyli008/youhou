$(function(){
    let $im1 = $('.header-middle-main-logo img:first');
    let $im2 = $('.header-middle-main-logo img:last');
    
   

    new Promise(function(resolve,reject){
         setTimeout(function(){
        $im1.css('display','none');
        $im2.css('display','block');
        resolve()
         },2000);
    }).then(()=>{
        setTimeout(function(){
            $im1.css('display','block');
            $im2.css('display','none');
            
             },2000);
    })

})
