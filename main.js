//linked Account start
$(window).on('load', function() {
    document.querySelectorAll("#approveConsent")[0].style.display = "none";
    document.querySelectorAll("#rejectConsent")[0].style.display = "none";
});

document.addEventListener("DOMContentLoaded", function(event) {

    function OTPInput() {
        const inputs = document.querySelectorAll('#otp > *[id]');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('keydown', function(event) {
                if (event.key === "Backspace") { inputs[i].value = ''; if (i !== 0) inputs[i - 1].focus(); } else {
                    if (i === inputs.length - 1 && inputs[i].value !== '') { return true; } else if (event.keyCode > 47 && event.keyCode < 58) {
                        inputs[i].value = event.key;
                        if (i !== inputs.length - 1) inputs[i + 1].focus();
                        event.preventDefault();
                    } else if (event.keyCode > 64 && event.keyCode < 91) {
                        inputs[i].value = String.fromCharCode(event.keyCode);
                        if (i !== inputs.length - 1) inputs[i + 1].focus();
                        event.preventDefault();
                    }
                }
            });
        }
    }
    OTPInput();
});


function consentDetails(divid) {
    var consentDetailsNo = divid.substring(16);
    document.getElementById("bankname_" + consentDetailsNo).value;
    document.getElementById("bankdate_" + consentDetailsNo).value;
    document.getElementById("banktime_" + consentDetailsNo).value;
    // Simulate a mouse click:
    window.location.href = "/new.html";
}

function accountlinksuccessfully() {
    $('#otpAccountLinkModel').modal('hide');
    swal({
        text: "Account Successfully Linked",
        icon: "success",
        timer: 2000,
        buttons: false,
    });
}

function approveConsent() {
    document.querySelectorAll("#approveConsent")[0].style.display = "flex";
    document.querySelectorAll("#rejectConsent")[0].style.display = "none";
}

function rejectConsent() {
    document.querySelectorAll("#approveConsent")[0].style.display = "none";
    document.querySelectorAll("#rejectConsent")[0].style.display = "flex";
}

function Consentsuccessfully(consentstatus) {
    $('#consentOtpModel').modal('hide');
    if (consentstatus === 'approveConsent') {
        swal({
            text: "Consent Approved Successfully",
            icon: "success",
            timer: 2000,
            buttons: false,
        });
    }
    if (consentstatus === 'rejectConsent') {
        swal({
            text: "Consent Rejected Successfully",
            icon: "success",
            timer: 2000,
            buttons: false,
        });
    }
    if (consentstatus === 'pauseConsent') {
        swal({
            text: "Consent Paused Successfully",
            icon: "success",
            timer: 2000,
            buttons: false,
        });
    }
    if (consentstatus === 'revokedConsent') {
        swal({
            text: "Consent Revoked Successfully",
            icon: "success",
            timer: 2000,
            buttons: false,
        });
    }
}

function accountdelinksuccessfully() {
    $('#delinkModal').modal('hide');
    swal({
        text: "Account De-Linked Successfully",
        icon: "success",
        timer: 2000,
        buttons: false,
    });
}

function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

function openNavbar() {
    document.querySelector("#navbar").style.width = "100%";
    document.querySelectorAll(".open")[0].style.opacity = 0;
    document.querySelectorAll(".profile")[0].style.zIndex = -1;
    document.querySelectorAll(".content-container")[0].style.opacity = 0;
}

function closeNavbar() {
    document.querySelector("#navbar").style.width = "0";
    document.querySelectorAll(".open")[0].style.opacity = 1;
    document.querySelectorAll(".profile")[0].style.zIndex = 1;
    document.querySelectorAll(".content-container")[0].style.opacity = 1;
}

async function searchButton() {
    document.querySelectorAll(".loader")[0].style.opacity = 1;
    document.querySelectorAll(".searchButton")[0].style.display = "none";
    document.getElementById("closedisabled").disabled = true;
    await sleep(2000);
    document.querySelectorAll(".loader")[0].style.opacity = 0;
    document.querySelectorAll(".loader")[0].style.display = "none";
    accountListEnable();
}

function accountListEnable() { /* do stuff on page load */
    document.querySelectorAll(".account-list")[0].style.display = "block";
    document.getElementById("closedisabled").disabled = false;
}

function refreshButton() {
    document.querySelectorAll(".loader")[0].style.display = "block";
    document.querySelectorAll(".loader")[0].style.opacity = 0;
    document.querySelectorAll(".searchButton")[0].style.display = "flex";
    document.querySelectorAll(".account-list")[0].style.display = "none";
    document.querySelectorAll("#addAccountBtn")[0].style.display = "flex";
    document.querySelectorAll("#addAccountManuallyBtn")[0].style.display = "none";
}

function addAccountManually() {
    document.querySelectorAll("#addAccountBtn")[0].style.display = "none";
    document.querySelectorAll("#addAccountManuallyBtn")[0].style.display = "flex";
}

//linked account end


// gsap.from('.nav', { opacity: 0, duration: 1, delay: 0.5, y: -30 })
// gsap.from('.sidebar-container', { opacity: 0, duration: 1, delay: 0.6, y: 50 })
// gsap.from('.content-container', { opacity: 0, duration: 1, delay: 0.7, y: 50 })


// /* Barba */
// function pageTransition() {
//     var tl = gsap.timeline();

//     tl.to('ul .transition li', { duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2 })
//     tl.to('ul .transition li', { duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1 })
// }

// function delay(n) {
//     n = n || 2000;
//     return new Promise(done => {
//         setTimeout(() => {
//             done();
//         }, n);
//     });
// }

// barba.init({
//     sync: true,

//     transitions: [{
//         async leave(data) {
//             const done = this.async();
//             pageTransition();
//             await delay(1500);
//             done();
//         }
//     }]
// });
// AOS.init({
//     duration: 500,
//     easing: 'ease-out-quart',
//     once: true
// });