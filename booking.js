document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); 


    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var drinks = document.getElementById("drinks").value;
    var food = document.getElementById("food").value;
    var date = document.getElementById("date").value;

    var confirmationMessage = `
        Jina la Mteja: ${name} <br>
        Namba ya Simu: ${phone} <br>
        Vinywaji: ${drinks} <br>
        Chakula: ${food} <br>
        Tarehe na Wakati: ${date}
    `;
    
    document.getElementById("confirmationDetails").innerHTML = confirmationMessage;
    document.getElementById("confirmationMessage").style.display = "block"; 
});


function goBack() {
    window.history.back(); 
}
