document.addEventListener("DOMContentLoaded", () => {
    const song = document.querySelector("#song");
    const playButton = document.querySelector("#play-btn");
    const stopButton = document.querySelector("#stop-btn");
  
    if (song && playButton && stopButton) {
      // Play button functionality
      playButton.addEventListener("click", () => {
        song.play()
          .then(() => {
            console.log("Music is playing.");
          })
          .catch((error) => {
            console.error("Error while trying to play music:", error);
          });
      });
  
      // Stop button functionality
      stopButton.addEventListener("click", () => {
        song.pause(); // Pause the music
        song.currentTime = 0; // Reset to the beginning
        console.log("Music has been stopped.");
      });
    } else {
      console.error("Audio element or buttons not found.");
    }
  });
  