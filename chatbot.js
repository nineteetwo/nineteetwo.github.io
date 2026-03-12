function toggleChat() {
    const chat = document.getElementById("chatWindow");
    chat.classList.toggle("open");
    
    // Replace your old if/else overflow logic with this single line
    updateScrollState();
}