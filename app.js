$(document).ready(function () {
	$('#apps').accordion(
		{
			collapsible: true,
			active: false,
		},
		1000
	);
	$('.appsContainerBox').sortable();
	$('.shortCut1').mouseenter(function () {
		$('#more1').fadeIn(500);
	});
	$('.shortCut1').mouseleave(function () {
		$('#more1').fadeOut(500);
	});
	$('.shortCut2').mouseenter(function () {
		$('#more2').fadeIn(500);
	});
	$('.shortCut2').mouseleave(function () {
		$('#more2').fadeOut(500);
	});
	$('.shortCut3').mouseenter(function () {
		$('#more3').fadeIn(500);
	});
	$('.shortCut3').mouseleave(function () {
		$('#more3').fadeOut(500);
	});
	$('.shortCut4').mouseenter(function () {
		$('#more4').fadeIn(500);
	});
	$('.shortCut4').mouseleave(function () {
		$('#more4').fadeOut(500);
	});
	$('.shortCut5').mouseenter(function () {
		$('#more5').fadeIn(500);
	});
	$('.shortCut5').mouseleave(function () {
		$('#more5').fadeOut(500);
	});
	$('.shortCut6').mouseenter(function () {
		$('#more6').fadeIn(500);
	});
	$('.shortCut6').mouseleave(function () {
		$('#more6').fadeOut(500);
	});
	$('.shortCut7').mouseenter(function () {
		$('#more7').fadeIn(500);
	});
	$('.shortCut7').mouseleave(function () {
		$('#more7').fadeOut(500);
	});
	$('.shortCut8').mouseenter(function () {
		$('#more8').fadeIn(500);
	});
	$('.shortCut8').mouseleave(function () {
		$('#more8').fadeOut(500);
	});
	$('.shortCut9').mouseenter(function () {
		$('#more9').fadeIn(500);
	});
	$('.shortCut9').mouseleave(function () {
		$('#more9').fadeOut(500);
	});
	$('.shortCut10').mouseenter(function () {
		$('#more10').fadeIn(500);
	});
	$('.shortCut10').mouseleave(function () {
		$('#more10').fadeOut(500);
	});
	$('.shortCutContainer').sortable();
});
