window.onload = function () {
    const userName = document.getElementById('username');
    const password = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');
    const storageKey = 'admina';
    function checkAdmin() {
        let AdminObject = localStorage.getItem(storageKey);
        if (!AdminObject) {
            const newAdmin = {
                username: 'admin',
                password: 'admin',
                isActive: false,
            };
            localStorage.setItem(storageKey, JSON.stringify(newAdmin))
        }
    }
    loginBtn.addEventListener('click', function () {
        let AdminObject = JSON.parse(localStorage.getItem(storageKey));
        const user = userName.value.trim();
        const pwd = password.value.trim();
        if (user === '' || pwd === '') {
            alert("შეყვანილი ინფორმაცია არ არის სწორი!...");
            userName.value = '';
            password.value = '';
        }
        else {
            if (user == AdminObject.username && pwd == AdminObject.password) {
                AdminObject.isActive = true;
                localStorage.setItem(storageKey, JSON.stringify(AdminObject))
                location.replace('dashboard.html')
            }
            else {
                alert("მომხმარებელი ან პაროლი არ არის სწორი.")
            }
        }
    });
    password.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("loginBtn").click();
        }
    });

    checkAdmin();
}