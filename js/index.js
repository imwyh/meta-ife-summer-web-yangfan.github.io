$('body,html').animate({scrollTop:0},600); 
$(".top_logo").css("opacity",0).animate({opacity:"1",width:"+=67px",height:"+=67px",marginLeft:"-=33.5px",marginTop:"-=33.5px"},600);
$(".member_contact a").mouseenter(function(){
	$(".dialog_content").html($(this).attr('alt'));
	$(".page_dialog").css("top",$(this).offset().top-$(".page_dialog").height()/2+$(this).height()+20).css("left",$(this).offset().left-$(".page_dialog").width()/2+$(this).width()/2);
	$(".page_dialog").show();
});
$(".member_contact a").mouseleave(function(){
	$(".page_dialog").hide();
});

$(window).scroll(function(){
	if($(this).scrollTop()<380){
		$(".top_logo").css("opacity",1-$(this).scrollTop()/380).css("height",268*(1-$(this).scrollTop()/380)).css("width",268*(1-$(this).scrollTop()/380)).css("marginLeft",366+(268*$(this).scrollTop()/380)/2).css("marginTop",22+(268*$(this).scrollTop()/380)/2);
	}
	if($(this).scrollTop()>500){
		$(".go_top").fadeIn();
	}else{
		$(".go_top").fadeOut();
	}
});
$(".go_top").click(function(){
	$('body,html').animate({scrollTop:0},500);
});