function toggle_visibility(obj) {
    var id = obj;
    console.log(obj)
    var e = document.getElementById(id)
    console.log(e.nextSibling)
    if (e.nextElementSibling.style.display == 'block')
        e.nextElementSibling.style.display = 'none';
    else
        e.nextElementSibling.style.display = 'block';
}
