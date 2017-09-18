$(document).ready(function(){     //所有属性必须是在加载后重新执行底下的a的属性加载有问题
	                               //www.makeru.com.cn/card  卡号13041511517   密码2362457448

	$(".a_two").mouseover(function(){
		$(".first_up").attr("src","image/up.png")
		$(".first_up").css("margin-right",20+'px');
		$("#ul_li").css("display","block");//?????慢慢的加
		
		$("#ul_li").children(".li_ul").children("a").css("background-position",4+'px');
		$("#ul_li").children(".li_ul").children("a").animate(
			{
				filter:"alpha(opacity=70)",
			    opacity:"0.7"
			},"slow",function(){
				
			}
		);
		
	});
	
	$(".a_two").mouseleave(function(){
		$(".first_up").attr("src","image/down.png");
		$("#ul_li").css("display","none")
	});
	
	
	$(".a_one").click(function(){
	$("#login").css("display","block");//显示样式
	
	   $top=($(window).height()-$("#login").height())/2+'px';
	   //alert($(document).height());  1129
	   // alert($(window).height()); 584
        $left=($(window).width()-$("#login").width())/2+'px';
	$("#login").css({"position":"absolute","left":$left,"top":$top});
	///??????
	
	
       //打开遮罩并且设置动画
		$('#screen').show("fast",function(){
		    $screenwidth=$(document).width()+15+'px';
			$screenheight=$(document).height()+'px';
			$("#screen").css("width",$screenwidth).css("height",$screenheight);
             $("body").css({"overflow":"-Scroll","overflow-y":"hidden"});
		    
		}).animate({
			filter:"alpha(opacity=30)",
		    opacity:"0.3"//火狐谷歌
		},"slow",function(){
				///alert("你好");
			}
		);
	
	
		
		





        //移动窗口时页面的变化
		$(window).resize(function(){   //resize()函数放错位置了
		
		$log_left=$("#login").offset().left;
		$log_top=$("#login").offset().top;

		if($log_left>$(window).innerWidth()-$("#login").width()){
				$log_left=$(window).innerWidth()-$("#login").width();
	   //$("#login").css({"position":"absolute","left":$left,"top":$top});//$top要不要添加双引号""
	                     //绝对定位也是必须的
		$("#login").css({"position":"absolute","left":$log_left});
		}
		if($log_top>$(window).innerHeight()-$("#login").height()){
			$log_top=$(window).innerHeight()-$("#login").height();
			$("#login").css({"position":"absolute","top":$log_top});
		}
		
	
	
	
	$('#screen').show("fast",function(){
		$screenwidth=$(window).width()+'px';
		$screenheight=$(window).height()+'px';
		$("#screen").css("width",$screenwidth).css("height",$screenheight);
		$("body").css("overflow","auto");
	});
	})
	
	
});
	//设置动画，再关闭遮罩
  $(".ingag").click(function(){
	  $("#login").css("display","none");
	   $("body").css({"overflow":"auto"});
	  $('#screen').animate({
		  filter:"alpha(opacity=0)",
		  opacity:"0"/*火狐谷歌*/

	  },"slow",function(){
		  $('#screen').css("display","none");
		 
	  }
	  )

  });
  /*拖拽功能的实现
    1.将目标对象先点下去
	2.在点下的物体被选中，进行move移动
	3.抬起鼠标，停止移动
	4.点击某个物体，用oDiv即可，move和up是全局区域，也就是整个文档通用
	
  */
  
  $("#login").mousedown(function(e){
	//  e.preventDefault();//阻止默认行为  解决第一个问题////////////
	$diffX=e.pageX-$("#login").offset().left;//offset()左边的值是如何获取的offset().left
	 $diffY=e.pageY-$("#login").offset().top;
	  $(document).mousemove(function (e){
	 $leftX=e.pageX-$diffX;
	 $topY=e.pageY-$diffY;
	 if($leftX<0){
		$leftX=0; 
	 }else if($leftX>$(window).innerWidth()-$("#login").width()){
		 $leftX=$(window).innerWidth()-$("#login").width();
	 }
	 if($topY<0){
		$topY=0; 
	 }else if($topY>$(window).innerHeight()-$("#login").height()){
		$topY=$(window).innerHeight()-$("#login").height();
	 }
	 $x= $leftX+'px';
	  $y= $topY+'px';
	 
	  $("#login").css({"position":"absolute","left":$x,"top":$y});
	  
	 
  })
  //这个的位置放错了。。。导致调了很久
   $(document).mouseup(function (){
	  
		//$(document).mousemove(null);
		$(document).unbind("mousemove");//jquery中禁止事件触发
		$(document).unbind("mouseup");
		

	
	
  })
  });
  //图片延迟加载
    var wait=$('.wait');
	
	
	  
    $(window).bind('scroll',function(){
		  setTimeout(function(){ 
		   for(var i=0;i<wait.length;i++){
			    var _this=wait.get(i);//jquery对象化为dom对象
				 if($(window).height()+$(document).scrollTop()>=_this.offsetTop){
					  $(_this).attr('src',$(_this).attr('xsrc')).animate({
						   filter:"alpha(opacity=30)",
		                   opacity:"30"/*火狐谷歌*/
					  },"slow",function(){}
					  )
				 }
		     }
		  },100)
	})
	
			 
				 
				 
					  
				  
				  
			  
		 
 
//百度分享收缩效果
	//hover()方法规定当鼠标指针悬停在被选元素上时要运行的两个函数
	//animate()用于创建自定义动画，并且能够规定动画执行时长，擦除效果。动画完成后还可以触发一个回调函数
	   //百度分享初始化位置  将"分享"放在页面的中间
	   
	   
	  $("#share").css("top",$(document).scrollTop()+($(window).height()-$("#share").first().height())/2+'px');
	tp=($(document).scrollTop()+($(window).height()-$("#share").first().height()))/2+'px';
	
	$(window).bind("scroll",function(){//获取的对象有问题
		setTimeout(function(){//滚动不是很平滑，利用这个可以延长一点时间，看起来平滑一些
			$hua=$(document).scrollTop()+($(window).height()-$("#share").first().height())/2+'px';
		 $("#share").animate(
			 {
				 top: $hua
			 },2,function(){}
		 )
		},100)
		

	});
	
	$("#share").hover(
	function(){
		$(this).animate(
		{position:"absolute",
		  top:"tp",
		  left:0
		 
		},"fast",
		function(){}
		);
		
	},
	function(){
		$(this).animate(
		{position:"absolute",
		  top:"tp",
		  left:-213
		  },"fast",
		 function(){
			
		}
		);
		
	}
	
	);
	//滑动导航
	$(".blank li").hover(   //目前这个无法解决的就是移入移出不稳定
	function(){
		
		$target=$(this).first().position().left;//position 相对于父元素的坐标
		$(".nav_bg").animate(
		{
			left:$target+10,  //这儿left的值直接是number类型
		                       //悬停上黑圈放到哪个位置
		},"normal",function(){
			$("#nav .white").animate({
			left:-$target    //改变滑动块里的文本 放到哪显示的哪的文字
		}
		)
		});
		/*event.stopPropagation();
		return false;*/
		
	},function(){
		
		$(".nav_bg").animate(
		{
			left:10,    //离开黑圈放到"首页"
			
		}
		,"normal",function(){
			$("#nav .white").animate({   //离开滑块里的文本放的是"首页"两个字
			left:0
		})
		}
		)
		/*event.stopPropagation();
		return false;*/
		}
		
	)
	
	//左侧菜单
	$("#middle .sidebar h2").click(function(){
		$(this).next().slideToggle("slow");
	})
	  //重置
	$("#regist")[0].reset();//jquery中无reset()方法，用该方法可以将jquery对象转成dom对象
	//表单验证
	$("input[name='user']").focus(function(){
		$(".succ_user").css('display','none');
		$(".info_user").css('display','block');
		$(".error_user").css('display','none');
	    
	})
	//trim()用于去掉字符串首尾的空白字符
    //test()用于正则验证
	$("input[name='user']").blur(function(){
		if($.trim($(this).val())==''){
		$(".info_user").css('display','none');
		$(".error_user").css('display','none');
	    $(".succ_user").css('display','none');
	    
		}else if(!check_user()){
        $(".succ_user").css('display','none');
		$(".info_user").css('display','none');
		$(".error_user").css('display','block');
		}else{
		$(".succ_user").css('display','block');
	    $(".info_user").css('display','none');
		$(".error_user").css('display','none');
	    
		}
		
		
	})
	function check_user(){
		if(/^[a-zA-Z0-9_]{6,20}$/.test($.trim($("input[name='user']").val())))
			return true;
	}
	//密码验证
	$("input[name='pass']").focus(function(){
		$(".succ_pass").css('display','none');
		$(".info_pass").css('display','block');
		$(".error_pass").css('display','none');
	    
	})
	$("input[name='pass']").blur(function(){
		if($.trim($(this).val())==''){
		
		$(".info_pass").css('display','none');
		}else if( check_password()){
			$(".info_pass").css('display','none');
			$(".succ_pass").css('display','block');
			$(".error_pass").css('display','none');
		}else{
			$(".info_pass").css('display','none');
			$(".succ_pass").css('display','none');
			$(".error_pass").css('display','block');
		}
	});
	
	//密码强度验证
	//6-20个
	
	$("input[name='pass']").keyup(function(){
		 check_password();
	});
	function check_password(){
		$value=$("input[name='pass']").val();
		$len=$value.length;
		
		
		if($len>5&&$len<21){
			$("#q1").html('●').css('color','green');//html()设置内容
		}else{
			$("#q1").html('○').css('color','#666');//刚开的错误是整了个实心的黑圈
		}
		if($len>0&&!/^\s$/.test($value)){
			$("#q2").html('●').css('color','green');
		}else{
			$("#q2").html('○').css('color','#666');
		}
	
	//大写字母 小写字母 数字 非空字符任意两种进行混拼
	     $num=0;
	      if(/\d/.test($value)){//   /^$/这样写有什么问题
			$num++;  
			//alert($num);    //怎么理解这儿的$num++
		  }
		  if(/[a-z]/.test($value)){
			$num++;  
			
		  }
		  if(/[A-Z]/.test($value)){
			$num++;  
		  }
		  if(/[^0-9A-Za-z]/.test($value)){
			$num++;  
		  }
		  //alert($num);
		 if($num>=2){
		    $("#q3").html('●').css('color','green');
		}else{
			$("#q3").html('○').css('color','#666');
		}
		  //安全级别
		  if($len>9&&$num>=3){
			  $(".s1").css("color","green");
			  $(".s2").css("color","green");
			  $(".s3").css("color","green");
			  $(".s4").html("高").css("color","green");
		  }else if($len>7&&$num>=2){
			   $(".s1").css("color","#f60");
			  $(".s2").css("color","#f60");
			  $(".s3").css("color","#ccc");
			  $(".s4").html("中").css("color","#f60");
		  }else if($len>=1){
			   $(".s1").css("color","maroon");
			  $(".s2").css("color","#ccc");
			  $(".s3").css("color","#ccc");
			  $(".s4").html("");
		  }
		  //$flag=false;
		  if($len>5&&$len<21&&!/^\s$/.test($value)&&$num>=2){
			    return true;
		  }else{
			  return false;
		  }
			 
	      
	}
	  //密码确认
	  $("input[name='notpass']").focus(function(){
		$(".succ_notpass").css('display','none');
		$(".info_notpass").css('display','block');
		$(".error_notpass").css('display','none');
	    
	})
	$("input[name='notpass']").blur(function(){
		if($.trim($(this).val())==''){
		
		$(".info_notpass").css('display','none');
		}else if( check_notpass()){
			$(".info_notpass").css('display','none');
			$(".succ_notpass").css('display','block');
			$(".error_notpass").css('display','none');
		}else{
			$(".info_notpass").css('display','none');
			$(".succ_notpass").css('display','none');
			$(".error_notpass").css('display','block');
		}
	});
	  function check_notpass(){
		  if($.trim($("input[name='notpass']").val())==$.trim($("input[name='pass']").val())){
			  return true;
		  }
	  }
	  //提问
	     $(".selectone").change(function(){
			  if(check_question())
			  $(".error_select").css('display','none');
		 })
	    function check_question(){     ////////
			if($(".selectone").val()!=0)
		   
			return true;
		}
		//alert($(".selectone").val());
	//回答
	$("input[name='ans']").focus(function(){
		
		$(".succ_ans").css('display','none');
		$(".info_ans").css('display','block');
		$(".error_ans").css('display','none');
	    
	})
	$("input[name='ans']").blur(function(){
		if($.trim($(this).val())==''){
		
		$(".info_ans").css('display','none');
		}else if(check_ans()){
			$(".info_ans").css('display','none');
			$(".succ_ans").css('display','block');
			$(".error_ans").css('display','none');
		}else{
			$(".info_ans").css('display','none');
			$(".succ_ans").css('display','none');
			$(".error_ans").css('display','block');
		}
	});
	function check_ans(){
		if($.trim($("input[name='ans']").val()).length>=2&&$.trim($("input[name='ans']").val()).length<=32)
	    return true;
}
	//电子邮件/////
	$("input[name='email']").focus(function(){
		if($(this).val().indexOf('@')==-1)$(".all_email").css('display','block');
		$(".succ_email").css('display','none');
		$(".info_email").css('display','block');
		$(".error_email").css('display','none');
	    
	})
	$("input[name='email']").blur(function(){
		$(".all_email").css('display','none');
		if($.trim($(this).val())==''){
		
		$(".info_email").css('display','none');
		}else if(check_email()){
			$(".info_email").css('display','none');
			$(".succ_email").css('display','block');
			$(".error_email").css('display','none');
		}else{
			$(".info_email").css('display','none');
			$(".succ_email").css('display','none');
			$(".error_email").css('display','block');
		}
	});
	function check_email(){
		if(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test($.trim($("input[name='email']").val())))
	     return true;
}
	//电子邮件缓存框的补全移入移出效果
	  $('.all_email li').hover(function(){
		  $(this).css('background','#e5edf2');
		  $(this).css('color','#369');
	  },function(){
		  $(this).css('background','none');
		  $(this).css('color','#369');
	  })
	  //电子邮件补全系统键入
	  $("input[name='email']").keyup(function(event){
		  if($(this).val().indexOf('@')==-1){
			  $('all_email').css('display','block');
			  $(".all_email li span").html($(this).val());
		  }else{
			  $(".all_email").css('display','none');
		  }
		  //键盘上的上下键控制   所有的li的个数完了它还会往下加所以就继续初始化从0开始
		    if(event.keyCode==40){  //40表示向下的键
				if(this.index==undefined||this.index>=$(".all_email li").length-1){
					this.index=0;
				}else{
					this.index++;
				}
				$(".all_email li").css('background','none');
		        $(".all_email li").css('color','#666');
				$(".all_email li").eq(this.index).css('background','#e5edf2');
				$(".all_email li").eq(this.index).css('background','#369');
			}
			if(event.keyCode==38){  //40表示向下的键
				if(this.index==undefined||this.index<=0){
					this.index=$(".all_email li").length-1;
				}else{
					this.index--;
				}
				$(".all_email li").css('background','none');
		        $(".all_email li").css('color','#666');
				$(".all_email li").eq(this.index).css('background','#e5edf2');
				$(".all_email li").eq(this.index).css('background','#369');
			}
			if(event.keyCode==13){
				$(this).val($(".all_email li").eq(this.index).text());
			    $(".all_email").css('display','none');
				this.index=undefined;
			}
	  });
	  //电子邮件补全系统点击获取
	  $(".all_email li").mousedown(function(){
		   $("input[name='email']").val($(this).text());
	  });
	  //click事件是点击弹起后触发的，而blur失去了焦点后，没有点击弹起的元素，导致无法触发，最后选用mousedown
	
	  //年月日
	  ///$year=$("select[name='year']");
	 // $month=$("select[name='month']");
	 // $day=$("select[name='month']");
	  //注入年
	   
	   
	   
	   var i=1945;
    var date = new Date();
    year = date.getFullYear();//获取当前年份    
    var dropList;
    for(i;i<=year;i++){        
        if(i == year){
            dropList = dropList + "<option value='"+i+"' selected>"+i+"</option>";
        }else{
            dropList = dropList + "<option value='"+i+"'>"+i+"</option>";
        }        
    }
    $('select[name=year]').html(dropList);//生成年份下拉菜单
    var monthly;
    for(month=1;month<13;month++){
        monthly = monthly + "<option value='"+month+"'>"+month+"</option>";
    }
    $('select[name=month]').html(monthly);//生成月份下拉菜单
    var dayly;
    for(day=1;day<=31;day++){
        dayly = dayly + "<option value='"+day+"'>"+day+"</option>";
    }
    $('select[name=day]').html(dayly);//生成月份下拉菜单
    
    $('select[name=month]').change(function(){
        var currentDay;
        var Flag = $('select[name=year]').val();
        var currentMonth = $('select[name=month]').val();
        switch(currentMonth){
            case "1" : 
            case "3" :
            case "5" :
            case "7" :
            case "8" :
            case "10" :
            case "12" :total = 31;break;
            case "4" :
            case "6" :
            case "9" :
            case "11" :total = 30;break;
            case "2" :
                if(Flag%4 == 0 ){
                    total = 29;
                }else{
                    total = 28;
                }
            default:break;                
        }        
        for(day=1;day <= total;day++){
            currentDay = currentDay + "<option value='"+day+"'>"+day+"</option>"; 
        }
        $('select[name=day]').html(currentDay);//生成日期下拉菜单
        })
     //备注操作   鼠标粘贴129
   $('.textps').click(function(){  //暂时先这样写着
	   //alert("请核对你的生日是否正确");
	   $('.error_birthday').css("display","block");
   })
   $(".textps").keyup(function(){
	  $('.error_birthday').css("display","none");
		    check_ps();
   })	 
   //清尾
   $(".spanclear").click(function(){
	   $(".textps").val( $(".textps").val().substring(0,100));
	    check_ps();
   })
   function check_ps(){
      $num2=100- $(".textps").val().length;
		//alert($num2);
		if($num2>=0){
			$(".ps").eq(0).css('display','block');
			$('.explnum').eq(0).html($num2);
			$('.ps').eq(1).css('display','none');
		     return true;
		}else{
			$(".ps").eq(0).css('display','none');
			$('.explnum').eq(1).html(Math.abs($num2));
			$('.spanclear').css('color','red');
			$('.ps').eq(1).css('display','block');
		 return false;
		}
   }
    //表单提交
	$(".button_sumit").click(function(){
		 $flag=true;
		 if(!check_user()){
			 $(".error_user").css('display','block');
			$flag=false;
		 }
		 
		if(!check_password()){
			 $(".error_pass").css('display','block');
			 $flag=false;
		}
		if(!check_notpass()){
			$(".error_notpass").css('display','block');
			$flag=false;
		}
	    if(!check_email()){
			$(".error_email").css('display','block');
			flag=false;
		}
		if(!check_question()){
			$(".error_select").css('display','block');
			$flag=false;
	}
	if(!check_ans()){
			$(".error_ans").css('display','block');
			$flag=false;
	}
	if(!check_ps()){
			$flag=false;
}
           //$("#loading").css("display","block");
		    // $regtop=$("#reg").height()/2+'px';
			// $regleft=$("#reg").width()/2+'px';
			 //alert($regtop);
			//$("#loading p").css({"positon":"absolute","left": $regleft,"top": $regtop});
		 if($flag){
			 
			 //$("form[name='reg']").submit();
             $.ajax({
				// method:'post',
				type:'post',
				dataType:'json',
				 url:'test.json',
				 data:$('form[name="reg"]').serialize(),
				 success:function(){
				/*	$("#regist").empty();
			      var box='';
			  $.each(data,function(commentIndex,comment){
			 box+='<div class="comment"><h4>'+comment[0].username+':</h4><p class="para">'+comment[0].content+':</p></div>';
			 
			  });
			  $('#regist').html(box); */
					 alert("你好");
					 }
				
			 })	;		 
		 }
		 $("body").css("overflow","auto");
	})
	
   //轮播器
   //初始化 
  /*$("#banner img").css('display','none');//因为所有的在同一层,先关掉所有然后再开启第一个
   $("#banner img").eq(0).css('display','block');
  $("#banner strong").html($("#banner img").eq(0).attr("alt"));
   $("#banner .banner1").css('color','black');//因为写的$("img")而报undefined的错
    $indexnum=1;// 1 2 0 1 2 0  自动播放是从1开始因为0在静态页面上
	setInterval(function(){
		auto();
	},1000);
	//不加手动，只是自动
	function auto(){
		if($indexnum>=$("#banner img").length)$indexnum=0
		 $("#banner img").css('display','none');
		 $("#banner img").eq($indexnum).css('display','block');
		 $("#banner strong").html($("#banner img").eq($indexnum).attr("alt"));
		 $("#banner ul li").css('color','#999');
		 $("#banner ul li").eq($indexnum).css('color','black');
		 $indexnum++;
	}
	//hover()事件的对象到底是谁，又想了很久   仅仅是手动不加自动
	$("#banner ul li").hover(function(){
		$("#banner img").css('display','none');
		$("#banner img").eq($(this).index()).css('display','block');
		 $("#banner strong").html($("#banner img").eq($(this).index()).attr("alt"));
				$("#banner ul li").css('color','#999');
		$("#banner ul li").eq($(this).index()).css('color','black');//前面的对象

	})*/
	$("#banner img").css('display','none');//因为所有的在同一层,先关掉所有然后再开启第一个
   $("#banner img").eq(0).css('display','block');
  $("#banner strong").html($("#banner img").eq(0).attr("alt"));
   $("#banner .banner1").css('color','black');
	$indexnum=1;
	$timer=setInterval(auto,1000);
	$("#banner ul li").hover(function(){
		clearInterval($timer);
		banner(this);//手动一般点到哪就是哪
	},function(){
		$indexnum=$(this).index()+1;//手指放开的那个位置+1
		$timer=setInterval(auto,1000);
	});
	function banner(obj){
		 $("#banner img").css('display','none');
		 $("#banner img").eq($(obj).index()).css('display','block');
		 $("#banner ul li").css('color','#999');
		 $(obj).css('color','#333');
		 $("#banner strong").html($("#banner img").eq($(obj).index()).attr("alt"));//(2)

		
	}
	  function auto(){
		  if($indexnum>=$("#banner img").length)$indexnum=0
	     banner($("#banner ul li").eq($indexnum).first());//主要问题在于怎么将手动的index与自动的index的值保持一致(1)
		 $indexnum++;
	  }
	  
	  
	  
	  
	  //延迟加载就是网站打开的时候并没有加载这些图片
	  //使用延迟加载可以帮助网站节约大量的流量资源
	  
	  //调用ajax
	   $(".a_three").mouseover(function(){
		   $(".a_three").css("cursor","pointer");
	   })
	   $(".a_one").mouseover(function(){
		   $(".a_one").css("cursor","pointer");
	   })
	   $(".a_two").mouseover(function(){
		   $(".a_two").css("cursor","pointer");
	   })
	  $(".a_three").click(function(){
		  
		  $("#reg").css("display","block");//显示样式
	
	     $top=($(window).height()-$("#reg").height())/2+'px';
	   
        $left=($(window).width()-$("#reg").width())/2+'px';
	     $("#reg").css({"position":"absolute","left":$left,"top":$top});
	
	
	
       //打开遮罩并且设置动画注册
		$('#screen').show("fast",function(){
		    $screenwidth=$(document).width()+15+'px';
			$screenheight=$(document).height()+'px';
			$("#screen").css("width",$screenwidth).css("height",$screenheight);
             $("body").css({"overflow":"-Scroll","overflow-y":"hidden"});
		    
		}).animate({
			filter:"alpha(opacity=30)",
		    opacity:"0.3"//火狐谷歌
		},"slow",function(){
				///alert("你好");
			}
		);
	  });
	  //关闭注册
	  $(".close").click(function(){
	  $("#reg").css("display","none");
	   $("body").css({"overflow":"auto"});
	  $('#screen').animate({
		  filter:"alpha(opacity=0)",
		  opacity:"0"/*火狐谷歌*/

	  },"slow",function(){
		  $('#screen').css("display","none");
		 
	  })

  });
  
  //将注册进行拖拽
  $("#reg").mousedown(function(e){
	 // e.preventDefault();//阻止默认行为  解决第一个问题
	$diffX=e.pageX-$("#reg").offset().left;//offset()左边的值是如何获取的offset().left
	 $diffY=e.pageY-$("#reg").offset().top;
	  $(document).mousemove(function (e){
	 $leftX=e.pageX-$diffX;
	 $topY=e.pageY-$diffY;
	 if($leftX<0){
		$leftX=0; 
	 }else if($leftX>$(window).innerWidth()-$("#reg").width()){
		 $leftX=$(window).innerWidth()-$("#reg").width();
	 }
	 if($topY<0){
		$topY=0; 
	 }else if($topY>$(window).innerHeight()-$("#reg").height()){
		$topY=$(window).innerHeight()-$("#reg").height();
	 }
	 $x= $leftX+'px';
	  $y= $topY+'px';
	 
	  $("#reg").css({"position":"absolute","left":$x,"top":$y});
	  
	 
  })
  
   $(document).mouseup(function (){
	  
		//$(document).mousemove(null);
		$(document).unbind("mousemove");//jquery中禁止事件触发
		$(document).unbind("mouseup");
	})
  });
   
	$("input[name='bton']").click(function(){
		
		if((/^[a-zA-Z0-9_]{6,20}$/.test($.trim($("input[name='numb']").val())))&&($("input[name='pswd']").val().length>5&&$("input[name='pswd']").val().length<20)){
			
			partthis=this;
			$("#loading").css("display","block");
			setTimeout(function(){ 
				$("#success").css("display","block");
				 $("#success p").html('登录成功，请稍后...');
				 setTimeout(function(){
					 $('#screen').animate({
					   filter:"alpha(opacity=0)",
					   opacity:"0"
				      },"slow",function(){
				      $('#screen').css("display","none");
					  $("#loginform")[0].reset();
					  $("#loading").css("display","none");
	                  $("#success").css("display","none");
                      
	               
                   
				      $("#login").css("display","none");
		            })
				 },1500)
				 $(partthis).removeClass('btnright');
	               $(partthis).addClass('btnleft');
				   $(partthis).attr({"disabled":"false"});//????????第二次点的时候怎么不能点了
				  
			},2000) 
			$(partthis).attr({"disabled":"true"});
			$(partthis).removeClass('btnleft');
			$(partthis).addClass('btnright');
			/*ajax发送请求*/
		}else{ 
			$("#login .warning").html("用户名或密码不正确，请重新确认");
			setTimeout(function(){
				$("#login .warning").html("");
		    },1500);
		  }
		 $("body").css("overflow","auto");
	 })
	 //发文使用
	 
	 
	 $("#ul_li a").eq(0).click(function(){
		$("#article").css("display","block");
		 $('#screen').show("fast",function(){
		    $screenwidth=$(document).width()+15+'px';
			$screenheight=$(document).height()+'px';
			$("#screen").css("width",$screenwidth).css("height",$screenheight);
             $("body").css({"overflow":"-Scroll","overflow-y":"hidden"});
		    
		}).animate({
			filter:"alpha(opacity=30)",
		    opacity:"0.3"//火狐谷歌
		},"slow",function(){
				
			}
		);
		 
	 })
	 
    
 $("#article").mousedown(function(e){
	 // e.preventDefault();//阻止默认行为  解决第一个问题
	$diffX=e.pageX-$("#article").offset().left;//offset()左边的值是如何获取的offset().left
	 $diffY=e.pageY-$("#article").offset().top;
	  $(document).mousemove(function (e){
	 $leftX=e.pageX-$diffX;
	 $topY=e.pageY-$diffY;
	 if($leftX<0){
		$leftX=0; 
	 }else if($leftX>$(window).innerWidth()-$("#article").width()){
		 $leftX=$(window).innerWidth()-$("#article").width();
	 }
	 if($topY<0){
		$topY=0; 
	 }else if($topY>$(window).innerHeight()-$("#article").height()){
		$topY=$(window).innerHeight()-$("#article").height();
	 }
	 $x= $leftX+'px';
	  $y= $topY+'px';
	 
	  $("#article").css({"position":"absolute","left":$x,"top":$y});
	  
	 
  })
  
   $(document).mouseup(function (){
	  
		//$(document).mousemove(null);
		$(document).unbind("mousemove");//jquery中禁止事件触发
		$(document).unbind("mouseup");
	})
  });
     $("input[name='articlebtn']").click(function(){
		    $("#middle .index span").css("display","none");
		    if($.trim($("input[name='title']").val()).length<=0||$.trim($(".contentarea").val()).length<=0)
			{
				$("#article .tip span").html('内容和标题不得为空');
				
			}else{
				_this=this;
				$("#publicing").css('display','block');
				$("#publicing").html('正在发表文章....');
				//alert("......");
				$(_this).attr({"disabled":"true"});
			    $(_this).removeClass('articlebtn');
			    $(_this).addClass('artbtnright');
				$.ajax({
					type:'post',
				    dataType:'json',
				    url:'public.json',
				   data:$('form[name="blog"]').serialize(),
				 success:function(){
				
					 $("#publicing").css('display','none');
					 if(2<1){
						 $('#article .tip span').html('发表失败');
					 }else{
						  $('#article .tip span').html('');
						  $("#pubsuccess").css('display','block');
						  $("#pubsuccess p").html('发表成功');
						  setTimeout(function(){
							   $("#pubsuccess").css('display','none');
							    $("#article").css('display','none');
								$("#blog")[0].reset();
								 $('#screen').animate({
						  filter:"alpha(opacity=0)",
						  opacity:"0"

					  },"slow",function(){
						  $('#screen').css("display","none");
					//ajax发送内容到页面	  
		  $.ajax({
	      type:"get",
		  url:'public.json',
		  data:{},
		  dataType:"json",
		  success:function(data){
			  $(".index").empty();
		  var boxx='';
			for(var i=0;i<data.arr.length;i++){
         boxx+='<h2>'+data.arr[i].title+'<em>'+data.arr[i].date+'</em></h2>'+'<div>'+data.arr[i].content+'</div>';	
	}
			  $('.index').html(boxx);
			 
		  }
	   })
						 
					  }) 
					  $(_this).attr({"disabled":"true"});
			          $(_this).removeClass('artbtnright');
			          $(_this).addClass('articlebtn'); 
                      
						  },1500);
						  $(_this).attr({"disabled":"true"});
					 }
					 }
				})
			}
			$("body").css("overflow","auto");
	   })
	   $("#article .close").click(function(){
	    $("#article").css("display","none");
	    $('#screen').animate({
		  filter:"alpha(opacity=0)",
		  opacity:"0"
       },"slow",function(){
		  $('#screen').css("display","none");
	   })
      });
	  //获取博文列表
	  
	  
	   
	  })
	 


	

