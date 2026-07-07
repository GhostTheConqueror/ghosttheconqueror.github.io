function updateStatus() {

    const start = new Date(CONFIG.startDate).getTime();
    const launch = new Date(CONFIG.launchDate).getTime();
    const now = Date.now();

    const totalDuration = launch - start;
    const elapsed = now - start;

    const percentage = Math.max(
        0,
        Math.min(100, (elapsed / totalDuration) * 100)
    );

    document.getElementById("status-progress").textContent =
        percentage.toFixed(3) + "%";

}

function updateCountdown() {

    const launchDate = new Date(CONFIG.launchDate).getTime();
    const now = new Date().getTime();

    const distance = launchDate - now;

    if (distance <= 0) {

        document.getElementById("days").textContent = "000";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent =
        String(days).padStart(3, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

function update() {
    updateCountdown();
    updateStatus();
}

update();

setInterval(update, 200);