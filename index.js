//index.html
$(window).on('load', function() {

    if (!sessionStorage.getItem('shown-modal')) {
        $('#LinkMoreAccountModal').modal('show');
        sessionStorage.setItem('shown-modal', 'true');
    }

});

function accountlinksuccessfully() {
    $('#otpAccountLinkModel').modal('hide');
    swal({
        text: "Account Successfully Linked",
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

// function writer(text, element, duration) {
//     text = text || "Sample Text";
//     element = element || document.body;
//     duration = duration || 400;
//     let len = text.length;
//     let i = 0;
//     let loop = setInterval(() => {
//         if (i == len) {
//             clearInterval(loop)
//         } else {
//             element.innerHTML += text[i];
//         }
//         i++;
//     }, duration);
// }
// writer("NSDL e-Governance Account Aggregator Limited", document.getElementById("text"), 50)



gsap.from('.nav', { opacity: 0, duration: 1, delay: 0.5, y: -30 })
gsap.from('.sidebar-container', { opacity: 0, duration: 1, delay: 0.6, y: 50 })
gsap.from('.content-container', { opacity: 0, duration: 1, delay: 0.7, y: 50 })


/* Barba */
function pageTransition() {
    var tl = gsap.timeline();

    tl.to('ul .transition li', { duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2 })
    tl.to('ul .transition li', { duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1 })
}

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({
    sync: true,

    transitions: [{
        async leave(data) {
            const done = this.async();
            pageTransition();
            await delay(1500);
            done();
        }
    }]
});
AOS.init({
    duration: 500,
    easing: 'ease-out-quart',
    once: true
});