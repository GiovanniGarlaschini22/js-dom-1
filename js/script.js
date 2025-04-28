// Variabili //
const lampadina = document.getElementById('lampadina');
const btn = document.getElementById('btn');

// lampadina spenta //
let accesa = false;

// Funzione per cambiare stato lampadina
const btnLampadina = () => {
  if (accesa === false) {
    lampadina.src = 'yellow_lamp.png';
    lampadina.alt = 'Lampadina Accesa';
    toggleButton.innerHTML = 'Spegni!';
    accesa = true;
  } else {
    lampadina.src = 'white_lamp.png';
    lampadina.alt = 'Lampadina Spenta';
    toggleButton.innerHTML = 'Accendi!';
    accesa = false;
  }
};

toggleButton.addEventListener('click', btnLampadina);
