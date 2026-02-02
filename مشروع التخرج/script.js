document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("openBtn");
    const passwordInput = document.getElementById("password");

    const SECRET_PASSWORD = "CYBER2026";

    button.addEventListener("click", function () {

        if (passwordInput.value === SECRET_PASSWORD) {

            // إضافة كلاس النجاح
            document.body.classList.add("unlocked");

        } else {
            alert("❌ الرقم السري غير صحيح");
        }

    });

});

