'use strict';






// Window Loads
$(function () {
	let bodyElement = $(`body`);
	$('.loader-box').fadeOut(500, function () {
		$('.loader-box').remove();
	});
	bodyElement.prepend(header);
	bodyElement.append(footer);
	bodyElement.append(goToTopbutton);
	activeTab();
	activeSmallTab();
	if (sessionStorage['mode']) {
		changeTheme(sessionStorage['mode']);
	}
});

window.onscroll = function () {
	scrollFunction();
};

//Single Declartion of changed theme button

function openNav() {
	document.getElementById('myNav').style.display = 'block';
	let toggleThemeButton = document.getElementById('themeChangeButton');
	toggleThemeButton.remove();
	let positionOfToggleButtonForSmallScreen = document.getElementById('themeChangeButtonSmallScreen');
	positionOfToggleButtonForSmallScreen.appendChild(toggleThemeButton);
}

function closeNav() {
	document.getElementById('myNav').style.display = 'none';
	let toggleThemeButton = document.getElementById('themeChangeButton');
	toggleThemeButton.remove();
	let positionOfToggleButtonForBigScreen = document.getElementById('themeChangeButtonBigScreen');
	positionOfToggleButtonForBigScreen.appendChild(toggleThemeButton);
}

function topBtnClick() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function init() {
	let imgDefer = document.getElementsByTagName('img');
	for (let i = 0; i < imgDefer.length; i++) {
		if (imgDefer[i].getAttribute('data-src')) {
			imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
		}
	}
}

window.onload = init;
