var form = document.getElementById("myForm"),
    imgInput = document.querySelector(".img"),
    file = document.getElementById("imgInput"),
    userName = document.getElementById("name"),
    age = document.getElementById("age"),
    city = document.getElementById("city"),
    email = document.getElementById("email"),
    phone = document.getElementById("phone"),
    post = document.getElementById("post"),
    sDate = document.getElementById("sDate"),
    submitBtn = document.querySelector(".submit"),
    userInfo = document.getElementById("data"),
    modal = document.getElementById("userForm"),
    modalTitle = document.querySelector("#userForm .modal-title"),
    newUserBtn = document.querySelector(".newUser")


let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : []

let isEdit = false, editId
showInfo()

newUserBtn.addEventListener('click', () => {
    submitBtn.innerText = 'Submit',
        modalTitle.innerText = "Fill the Form"
    isEdit = false
    ingInput.src = "./image/Profile Icon.webp"
    form.reset()
})


file.onchange = function () {
    if (file.files[0].size < 1000000) { // 1MB = 1000000
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            imgUrl = e.target.result
            imgInput.src = imgUrl
        }


        fileReader.readAsDataURL(file.files[0])
    }
    else {
        alert("This file is too large!")
    }
}