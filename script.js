const slider = document.getElementById('volume');
const dihDiv = document.getElementById('Dih');

function updateDihPosition() {
    const value = Number(slider.value);
    const scale = value / 51 + 0.1;
    const shiftX = scale * 85;
    const shiftY = 200;
    dihDiv.style.transform = `translateX(${shiftX}px) translateY(${shiftY}px) scale(${scale})`;
}

slider.addEventListener('input', updateDihPosition);

// initialize once
updateDihPosition();