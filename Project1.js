let currentAudio = null;

// Play sound buttons
const buttons = document.querySelectorAll(".sound-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        // Stop previous sound if playing
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        const audioFile = btn.dataset.sound;
        currentAudio = new Audio("sounds/" + audioFile);
        currentAudio.play();
    });
});

// STOP button
document.getElementById("stopBtn").addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});
