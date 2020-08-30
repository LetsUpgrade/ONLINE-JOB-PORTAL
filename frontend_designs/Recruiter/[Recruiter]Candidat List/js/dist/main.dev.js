"use strict";

function toggle_visibility(obj) {
  var id = obj;
  var e = document.getElementById(id);
  if (e.nextElementSibling.style.display == 'block') e.nextElementSibling.style.display = 'none';else e.nextElementSibling.style.display = 'block';
}