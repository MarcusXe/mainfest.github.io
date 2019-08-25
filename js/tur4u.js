window.onload = function() {
	
	//轮播图 
	var index = 0, timer = null;
	function show(index) {
		var alpha = 0;
		clearInterval(timer);

		for(i = 0; i < $(".header img").length; i++) {
			$(".header img")[i].style.opacity = 0;
			$(".header img")[i].style.filter = "alpha(opacity=0)";
		}

		timer = setInterval(function() {
			alpha += 2;
			alpha > 100 && (alpha = 100);
			$(".header img")[index].style.opacity = alpha / 100;
			$(".header img")[index].style.filter = "alpha(opacity = " + alpha + ")";
			alpha == 100 && clearInterval(timer);
		},20);
	}

	function autoPlay() {
		show(index);
		index++;
		(index == 3) && (index = 0);
		setTimeout(autoPlay,5000);
	}
	autoPlay();

	//产品导航栏往上移与往下移
	var windowHeight =  $(window).height(),navHeight = $("#bs-example-navbar-collapse-1").height(),serverHeight = $("#server").height();
	$("#index").on("click",function(){
		$(".server-msg").css("margin-top","0px");
	});

	$("#production").on("click",function(){
		scrollTo(0,windowHeight-navHeight-35);
		$(".server-msg").css("margin-top","-35px");

	});

	$("#about-us").on("click",function() {
		scrollTo(0,windowHeight+serverHeight-66);
		console.log($(window).scrollTop());
	})
	$(window).on("scroll",function () {
		// console.log($(window).scrollTop());
		if($(window).scrollTop()<200||$(window).scrollTop()===200){
			$(".server-msg").css("margin-top","0px");
		}
		if($(window).scrollTop()>200) {
			$(".server-msg").css("margin-top","-35px");
		}

	});
	//产品系列图片排布 
            	var ChangePhoto = function() {
		$('#ft-sl').height($('#ft-sl').width()*2);                
		$('#fo-sl').height($('#fo-sl').width()*2);
		$('#tf-sl').height($('#tf-sl').width()*2);
		$('#fun-sl').height($('#fun-sl').width()*2);       
		$('#st-sl').height($('#st-sl').width()/0.648);  
		$('#ft-sr').height($('#ft-sl').height());
		$('#fo-sr').height($('#fo-sl').height());
		$('#tf-sr').height($('#tf-sl').height());
		$('#fun-sr').height($('#fun-sl').height());
		$('#st-sr').height($('#st-sl').height());
		$('#st-ct').height($('#st-sl').height());
            }
            ChangePhoto();
            $(window).on('resize',function() {
              		ChangePhoto();
            });
            $('#tab-list a').on("click",function (e) { 
		e.preventDefault();
		$(this).tab("show");
		ChangePhoto();
		if($("#football-tab").css("display")==="block"){
			$(".server").css("background","url(img/zq.jpg) no-repeat");
			$(".server").css("background-size","cover")
			$("#triangle-fb").css("display","block");
			console.log($("#triangle-fb").css("display"));
		}else{
			$("#triangle-fb").css("display","none");
		}	  	
		if($("#food-tab").css("display")==="block"){
			$(".server").css("background","url(img/foodbg.jpg) no-repeat");
			$(".server").css("background-size","cover")
			$("#triangle-fo").css("display","block");
		}else{
			$("#triangle-fo").css("display","none");
		}	
		if($("#fun-tab").css("display")==="block"){
			$(".server").css("background","url(img/bg-fun.jpg) no-repeat");
			$(".server").css("background-size","cover")
			$("#triangle-fn").css("display","block");
		}else{
			$("#triangle-fn").css("display","none");
		}	
		if($("#traffic-tab").css("display")==="block"){
			$(".server").css("background","url(img/tf-bg.jpg) no-repeat");
			$(".server").css("background-size","cover")
			$("#triangle-tf").css("display","block");
		}else{
			$("#triangle-tf").css("display","none");
		}	
		if($("#stay-tab").css("display")==="block"){
			$(".server").css("background","url(img/bg-st.jpg) no-repeat");
			$(".server").css("background-size","cover")
			$("#triangle-st").css("display","block");
		}else{
			$("#triangle-st").css("display","none");
		}	
             }) ;
	// 产品图片上的遮罩
	$('.lb, .rt , .rtl, .rtr, #st-sl, .st-br, .st-tr, .st-bl,.st-tl').mouseover(function() {
		$(this).find('img').css({
			zIndex : 2,
			transform : 'scale(1.23,1.23)',
			transition : 'transform 1s'	

		});
		$(this).find('.mask').css({
			zIndex : 3

		})
	})
	$('.lb, .rt , .rtl, .rtr, #st-sl, .st-br, .st-tr, .st-bl,.st-tl').mouseout(function() {
		$(this).find('img').css({
			zIndex : 1,
			transform : 'scale(1.0,1.0)',
			transition : 'transform 1s'	
		});

		$(this).find('.mask').css({
			zIndex : 0
		});	
	})
	//导航栏
	$(window.document).scroll(function() {
		$(".navbar").addClass("scroll");
		if($(this).scrollTop() == 0) {
			$(".navbar").removeClass("scroll");
			$(".navbar").removeClass("scrollDeepColor");
			$(".navbar-brand").css("background","url(img/logo.png) no-repeat");
			$(".navbar-brand").css("background-size","100% 100%");
			document.getElementsByClassName('server-msg')[0].style.cssText = "";
		}
		if($(this).scrollTop() > 0) {
			$(".navbar-brand").css("background","url(img/logo2.png) no-repeat");
			$(".navbar-brand").css("background-size","100% 100%");
		} 
		if($(this).scrollTop() >= 600) {
			$(".navbar").removeClass("scroll");
			$(".navbar").addClass("scrollDeepColor");
		}
	});       
}	


