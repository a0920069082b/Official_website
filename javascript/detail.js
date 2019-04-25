$(document).ready(()=>{
    $('.productShowDetailImage').click(function(){
        $('#detailImage').attr('src',($(this).attr('src')));
    })
});