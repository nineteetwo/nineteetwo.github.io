function updateScrollState() {
    const menuOpen = document.getElementById("menuBox").classList.contains("active");
    const chatOpen = document.getElementById("chatWindow")?.classList.contains("open");
    
    if (menuOpen || chatOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
}

function toggleMenu() {
    const menu = document.getElementById("menuBox");
    menu.classList.toggle("active");
    // Call the central function instead of setting overflow directly
    updateScrollState();
}

function toggleLang(event) {
    event.preventDefault(); 
    event.stopPropagation();
    document.getElementById("langDropdown").classList.toggle("show");
}


// Menü dışına tıklanınca açılır menüyü kapatan event listener
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}