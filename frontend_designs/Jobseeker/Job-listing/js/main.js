window.onload = function () {

}

// side bar
function toggle_visibility(obj) {
    var id = obj;
    var e = document.getElementById(id)
    if (e.nextElementSibling.style.display == 'block')
        e.nextElementSibling.style.display = 'none';
    else
        e.nextElementSibling.style.display = 'block';
}

//jobs list

let bookmark = document.getElementsByClassName('bookmark')
Array.from(bookmark).forEach(v => v.addEventListener('click', function () {

    let el = this.parentElement.getElementsByClassName('bookmark')[0]

    if (el.classList.contains("fa-heart-o")) {
        el.classList.remove("fa-heart-o")
        el.classList.add("fa-heart")
        el.innerText = "Job saved"

    } else {
        el.classList.remove("fa-heart")
        el.classList.add("fa-heart-o")
        el.innerText = "Save Job"
    }
}));



let jobs = document.getElementsByClassName('job-update')
console.log(jobs)
Array.from(jobs).forEach(v => v.addEventListener('click', function () {
    let job = this.parentElement.getElementsByClassName('job-update')[0]

    // display the side bar on job listing click
    document.querySelector('#clicked-job .container').style.display = "block";

    // changing the name of comapny in side-panel
    let listedCompanName = job.getElementsByClassName('company-name')[0].innerText
    document.querySelector('#heading h1').innerText = listedCompanName

    // changing the post in side-panel
    let jobPost = job.getElementsByClassName('post')[0].innerText
    document.querySelector('#side-post').innerText = jobPost

    //changing the location in the side-panel
    let location = job.getElementsByClassName('location')[0].innerText
    document.querySelector('#side-location').innerText = location

    //changing the Experience in the side-panel
    let experience = job.getElementsByClassName('experience')[0].innerText
    document.querySelector('#side-experience').innerText = experience

    //changing the Salary in the side-panel
    let salary = job.getElementsByClassName('salary')[0].innerText
    document.querySelector('#side-salary').innerText = salary

    //changing the description in the side-panel

    let description = job.getElementsByClassName('job-listing-description')[0].innerText
    document.querySelector('#side-description').innerText = description






}));