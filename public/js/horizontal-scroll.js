// duration of scroll animation
var scrollDuration = 300;
// arrows
var leftArrow = document.getElementsByClassName('left-arrow');
var rightArrow = document.getElementsByClassName('right-arrow');
// get items dimensions
var itemsLength = $('.item').length;
var itemSize = $('.item').outerWidth(true);
// get some relevant size for the paddle triggering point
var arrowMargin = 20;

// get wrapper width
var getMenuWrapperSize = function() {
	return $('.menu-wrapper').outerWidth();
}
var menuWrapperSize = getMenuWrapperSize();
// the wrapper is responsive
$(window).on('resize', function() {
	menuWrapperSize = getMenuWrapperSize();
});
// size of the visible part of the menu is equal as the wrapper size 
var menuVisibleSize = menuWrapperSize;

// get total width of all menu items
var getMenuSize = function() {
	return itemsLength * itemSize;
};
var menuSize = getMenuSize();
// get how much of menu is invisible
var menuInvisibleSize = menuSize - menuWrapperSize;

// get how much have we scrolled to the left
var getMenuPosition = function() {
	return $('.menu').scrollLeft();
};

// finally, what happens when we are actually scrolling the menu
$('.menu').on('scroll', function() {

	// get how much of menu is invisible
	menuInvisibleSize = menuSize - menuWrapperSize;
	// get how much have we scrolled so far
	var menuPosition = getMenuPosition();

	var menuEndOffset = menuInvisibleSize - arrowMargin;

	// show & hide the arrows 
	// depending on scroll position
	if (menuPosition <= arrowMargin) {
		$(leftArrow).addClass('hidden');
		$(rightArrow).removeClass('hidden');
	} else if (menuPosition < menuEndOffset) {
		// show both arrows in the middle
		$(leftArrow).removeClass('hidden');
		$(rightArrow).removeClass('hidden');
	} else if (menuPosition >= menuEndOffset) {
		$(leftArrow).removeClass('hidden');
		$(rightArrow).addClass('hidden');
}

	// print important values
	$('#print-wrapper-size span').text(menuWrapperSize);
	$('#print-menu-size span').text(menuSize);
	$('#print-menu-invisible-size span').text(menuInvisibleSize);
	$('#print-menu-position span').text(menuPosition);

});

// scroll to left
$(rightArrow).on('click', function() {
	$('.menu').animate( { scrollLeft: menuInvisibleSize}, scrollDuration);
});

// scroll to right
$(leftArrow).on('click', function() {
	$('.menu').animate( { scrollLeft: '0' }, scrollDuration);
});