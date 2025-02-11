// Hii ni script ya msingi kwa ajili ya kufanya kazi za msingi kwenye tovuti yako.
document.addEventListener('DOMContentLoaded', function() {
    // Event listener ili kuhakikisha kuwa HTML imeloadi kabla ya kufanyika jambo lolote.
    
    const backButton = document.querySelector('.back-button');

    // Hii itahakikisha button ya "Rudi Nyuma" inafanya kazi ya kurudi nyuma kwa kivinjari.
    backButton.addEventListener('click', function() {
        history.back(); // Hii itarudisha mtumiaji kwenye ukurasa uliopita.
    });
});
