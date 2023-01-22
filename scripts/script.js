let btn = document.getElementById("opensidebar")
let SideBar = document.getElementById("sidebar")
let transPrance = document.getElementById("transPrance")
let sidebarSlid1 = document.getElementById("slid1")
let sidebarSlid2 = document.getElementById("slid2")
let sidebarSlid3 = document.getElementById("slid3")
let sidebarSlid4 = document.getElementById("slid4")

transPrance.addEventListener("click", () => {
    SideBar.style.transform = "translateX(-250px)"
    transPrance.style.display = "none"
})
btn.addEventListener("click", () => {
    SideBar.style.transform = "translateX(0px)"
    transPrance.style.display = "block"
})
let a = 0;
let jk = setInterval(() => {
    a++
    if (a == 1) {
        sidebarSlid1.style.transform = "translateX(0%)"
        sidebarSlid2.style.transform = "translateX(-100%)"
        sidebarSlid3.style.transform = "translateX(-100%)"
        sidebarSlid4.style.transform = "translateX(-100%)"
    } else if (a == 2) {
        sidebarSlid1.style.transform = "translateX(100%)"
        sidebarSlid2.style.transform = "translateX(0%)"
        sidebarSlid3.style.transform = "translateX(-100%)"
        sidebarSlid4.style.transform = "translateX(-100%)"
    } else if (a == 3) {
        sidebarSlid1.style.transform = "translateX(100%)"
        sidebarSlid2.style.transform = "translateX(100%)"
        sidebarSlid3.style.transform = "translateX(0%)"
        sidebarSlid4.style.transform = "translateX(-100%)"
    } else if (a == 4) {
        sidebarSlid1.style.transform = "translateX(100%)"
        sidebarSlid2.style.transform = "translateX(100%)"
        sidebarSlid3.style.transform = "translateX(100%)"
        sidebarSlid4.style.transform = "translateX(0%)"

    } else if (a == 5) {
        sidebarSlid1.style.transform = "translateX(100%)"
        sidebarSlid2.style.transform = "translateX(100%)"
        sidebarSlid3.style.transform = "translateX(0%)"
        sidebarSlid4.style.transform = "translateX(-100%)"
    } else if (a == 6) {
        sidebarSlid1.style.transform = "translateX(100%)"
        sidebarSlid2.style.transform = "translateX(0%)"
        sidebarSlid3.style.transform = "translateX(-100%)"
        sidebarSlid4.style.transform = "translateX(-100%)"
    } else if (a == 7) {
        sidebarSlid1.style.transform = "translateX(0%)"
        sidebarSlid2.style.transform = "translateX(-100%)"
        sidebarSlid3.style.transform = "translateX(-100%)"
        sidebarSlid4.style.transform = "translateX(-100%)"
    }
    else if (a == 8) {
        a = 1;

    }
}, 4000);