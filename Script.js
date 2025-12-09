document.addEventListener("DOMContentLoaded", function () {
    const AMOUNT = 80;
    const body = document.body;

    function rand(min, max) {
        return Math.random() * (max - min) + min;
    }

    for (let i = 0; i < AMOUNT; i++) {
        const flake = document.createElement("div");
        flake.className = "snowflake";
        flake.textContent = "❄";

        const size = Math.round(rand(10, 36));
        const opacity = (rand(0.3, 0.95)).toFixed(2);
        const duration = (rand(6, 16)).toFixed(2) + "s";
        const delay = (rand(0, 10)).toFixed(2) + "s";
        const drift = Math.round(rand(-120, 120)) + "px";

        flake.style.left = rand(0, 100) + "vw";
        flake.style.setProperty("--size", size + "px");
        flake.style.setProperty("--opacity", opacity);
        flake.style.setProperty("--duration", duration);
        flake.style.setProperty("--delay", delay);
        flake.style.setProperty("--drift", drift);

        flake.classList.add("fade");
        body.appendChild(flake);

        if (body.querySelectorAll(".snowflake").length > 200) {
            const first = body.querySelector(".snowflake");
            if (first) first.remove();
        }
    }
});
