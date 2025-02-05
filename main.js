let countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const targetDate = new Date("2025-09-01T09:00:00").getTime();
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    document.getElementById("title").innerHTML = "Pappa Otto är tillbaka!";
    document.getElementById("pappa-otto").classList.add("rotate-center");
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById(
    "countdown"
  ).innerHTML = `${days} dagar, ${hours} timmar, ${minutes} minuter och ${seconds} sekunder`;
}

const button = document.getElementById("button");

button.addEventListener("click", () => {
  MIDIjs.play("Aerosmith_-_I_Don't_Wanna_Miss_a_Thing.mid");
  button.remove();
});

updateCountdown();
