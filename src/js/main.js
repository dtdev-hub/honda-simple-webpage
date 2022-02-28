const swiper = new Swiper('.swiper-container', {
	// Optional parameters
	centeredSlides: true,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},


	// And if we need scrollbar
	// scrollbar: {
	//     el: '.swiper-scrollbar',
	// },
});

$('#vehicle-list').mCustomScrollbar({
	theme: 'dark'
});
function move(value) {
	$('#vehicle-list').mCustomScrollbar("scrollTo", value, {
		scrollEasing: 'easeOut',
	})
}
$('.vehicle-nav ul li a').click(function () {
	if ($(this).attr('id') === "cars-nav") {
		move("#cars");
	}
	if ($(this).attr('id') === "suvs-nav") {
		move("#suvs");
	}
	if ($(this).attr('id') === "minivan-nav") {
		move("#minivans");
	}
})
var count = "";
$('#navbar > a').click(function () {
	if (count === "") {
		count = $(this).attr('id');
		$(this).addClass('active');
		if (count === "vehicles-link") {
			$("#vehicles").removeClass('hide-vehicle');
			$(".vehicle-nav").addClass('fadeInDown');
		}
	} else {
		if (count === $(this).attr('id')) {
			$(this).removeClass('active');
			count = "";
			$(".vehicle-nav").addClass('fadeOutUp');
			$("#vehicle-list").addClass('fadeOutDown');

			setTimeout(() => {
				$("#vehicles").addClass('hide-vehicle');
				$(".vehicle-nav").removeClass('fadeOutUp');
				$("#vehicle-list").removeClass('fadeOutDown');
			}, 300);
		} else {
			$('#navbar > a').removeClass('active');
			$(this).addClass('active');
			count = $(this).attr('id');
			if (count != "vehicles-link") {
				$(".vehicle-nav").addClass('fadeOutUp');
				$("#vehicle-list").addClass('fadeOutDown');

				setTimeout(() => {
					$("#vehicles").addClass('hide-vehicle');
					$(".vehicle-nav").removeClass('fadeOutUp');
					$("#vehicle-list").removeClass('fadeOutDown');
				}, 300);
			} else {
				$("#vehicles").removeClass('hide-vehicle');
				$(".vehicle-nav").addClass('fadeInDown');
				$("#vehicle-list").addClass('fadeInUp');
			}
		}
	}
})
$('#vehicle-close').click(function () {
	$(".vehicle-nav").addClass('fadeOutUp');
	$("#vehicle-list").addClass('fadeOutDown');

	setTimeout(() => {
		$("#vehicles").addClass('hide-vehicle');
		$(".vehicle-nav").removeClass('fadeOutUp');
		$("#vehicle-list").removeClass('fadeOutDown');
	}, 300);
	$('#navbar-nav a').removeClass('active');
	count = "";
})
$('.vehicle-product').addClass('animated fadeInUp')
$('.carousel-indicators-config li').click(function () {
	$('.carousel-indicators-config li').removeClass('active');
	$(this).addClass('active');
})
$('.indicators-xs-header').click(function () {
	$('.carousel-indicators-xs ol').slideToggle();
	if ($('.indicators-xs-header i').hasClass('transform-rotate')) {
		$('.indicators-xs-header i').removeClass('transform-rotate')
	} else {
		$('.indicators-xs-header i').addClass('transform-rotate')
	}

})
$('.carousel-indicators-xs ol li').click(function () {
	$('.indicators-title span').html($(this).html());
	$('.carousel-indicators-xs ol').slideUp();
})
var count = 0;
$('.carousel-control-prev').click(function () {
	$('.carousel-indicators-config li').removeClass('active')
	if (count == 0) {
		count = 4;
	} else {
		count--;
	}
	$('.carousel-indicators-config li').each(function (i) {
		if (i == count) {
			$(this).addClass('active');
			$('.indicators-title span').html($(this).html())
		}
	})
})
$('.carousel-control-next').click(function () {
	$('.carousel-indicators-config li').removeClass('active')
	if (count == 4) {
		count = 0;
	} else {
		count++;
	}
	$('.carousel-indicators-config li').each(function (i) {
		if (i == count) {
			$(this).addClass('active');
			$('.indicators-title span').html($(this).html())
		}
	})
})
//set up back to top function
var lastScrollTop = 0;
$(window).scroll(function (event) {
	var st = $(this).scrollTop();
	if (st > lastScrollTop) {
		$(".back-to-top").css("transform", "translateX(50px)");
	} else {
		$(".back-to-top").css("transform", "translateX(0px)");
	}
	lastScrollTop = st;
});

$(".back-to-top").click(function () {
	$("body,html").animate(
		{
			scrollTop: 0,
		},
		0
	);
});