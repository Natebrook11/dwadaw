


function displayMadridTime() {
    const madridTimeZone = 'Europe/Madrid';
    const options = { timeZone: madridTimeZone, hour: '2-digit', minute: '2-digit', hour12: false };

    const madridTime = new Intl.DateTimeFormat('en-US', options).format(new Date());

    const madridTimeElement = document.getElementById('timer'); // Asegúrate de que 'timer' sea el ID de tu elemento HTML
    madridTimeElement.textContent = ` Spain ${madridTime}`;
}

// Llamar a la función para mostrar la hora de Madrid
displayMadridTime();

// Actualizar la hora cada segundo (1,000 milisegundos)
setInterval(displayMadridTime, 1000);


function playsound(audio) {
    const audioPath = `/assets/sounds/${audio}.mp3`;
    const audioElement = new Audio(audioPath); // Crear un nuevo elemento de audio con la ruta especificada

    audioElement.volume = 1.0; // Establecer el volumen al máximo
    audioElement.currentTime = 0; // Reiniciar el audio al principio
    audioElement.play(); // Reproducir el sonido
}