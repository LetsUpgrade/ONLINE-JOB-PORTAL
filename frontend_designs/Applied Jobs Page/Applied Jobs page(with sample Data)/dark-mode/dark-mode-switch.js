const darkSwitch = document.getElementById('darkSwitch');
window.addEventListener('load', () => {
  if (darkSwitch) {
    initTheme();
    darkSwitch.addEventListener('change', () => {
      resetTheme();
    });
  }
});


/**
 * Summary: function that adds or removes the attribute 'data-theme' depending if
 * the switch is 'on' or 'off'.
 *
 * Description: initTheme is a function that uses localStorage from JavaScript DOM,
 * to store the value of the HTML switch. If the switch was already switched to
 * 'on' it will set an HTML attribute to the body named: 'data-theme' to a 'dark'
 * value. If it is the first time opening the page, or if the switch was off the
 * 'data-theme' attribute will not be set.
 * @return {void}
 */
function initTheme() {
  const darkThemeSelected =
    localStorage.getItem('darkSwitch') !== null &&
    localStorage.getItem('darkSwitch') === 'dark';
  darkSwitch.checked = darkThemeSelected;
  if(darkThemeSelected){
    document.body.setAttribute('data-theme','dark');
    var len=document.getElementsByTagName("table").length;
    document.getElementsByTagName("table")[0].classList.add("table-dark");
    for(var i=1;i<len;i++){
      document.getElementsByTagName("table")[i].classList.add("table-dark");
      document.getElementsByTagName("table")[i].classList.remove("table-striped");
    }
  }else{
    document.body.removeAttribute('data-theme');
    var len=document.getElementsByTagName("table").length;
    document.getElementsByTagName("table")[0].classList.remove("table-dark");
    for(var i=1;i<len;i++){
      document.getElementsByTagName("table")[i].classList.remove("table-dark");
      document.getElementsByTagName("table")[i].classList.add("table-striped");
    }
  }
}


/**
 * Summary: resetTheme checks if the switch is 'on' or 'off' and if it is toggled
 * on it will set the HTML attribute 'data-theme' to dark so the dark-theme CSS is
 * applied.
 * @return {void}
 */
function resetTheme() {
  if (darkSwitch.checked) {
    document.body.setAttribute('data-theme', 'dark');
    var len=document.getElementsByTagName("table").length;
    document.getElementsByTagName("table")[0].classList.add("table-dark");
    for(var i=1;i<len;i++){
      document.getElementsByTagName("table")[i].classList.add("table-dark");
      document.getElementsByTagName("table")[i].classList.remove("table-striped");
    }
    localStorage.setItem('darkSwitch', 'dark');
  } else {
    document.body.removeAttribute('data-theme');
    var len=document.getElementsByTagName("table").length;
    document.getElementsByTagName("table")[0].classList.remove("table-dark");
    for(var i=1;i<len;i++){
      document.getElementsByTagName("table")[i].classList.remove("table-dark");
      document.getElementsByTagName("table")[i].classList.add("table-striped");
    }
    localStorage.removeItem('darkSwitch');
  }
}
