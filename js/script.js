// Programma che al click di un bottone genera una griglia di gioco quadrata.

// 1. Selezionare il bottone e salvarlo in una variabile.

// 2. Mettere in ascolto il bottone e scatenare un evento al 'click'.

// 3. Al click del bottone selezionare il container contenente la griglia.

// 4. Fare un ciclo su 100 (quanto il numero di blocchi che vogliamo avere in griglia).

// 5. Generare un quadrato ad ogni ciclo.

// 6. Ad ogni quadrato generato aggiungere un evento "click".

// 7. Al click del quadrato aggiungere o togliere la classe "clicked".

// 8. Aggiungere il quadrato al conteiner.


// 1.
const buttonGenerator = document.querySelector('.btn')


// 2.
buttonGenerator.addEventListener('click', function(){
  // 3
  const contenitore = document.querySelector('.container')
  contenitore.classList.remove('display-none')

  // 4.
  for (let i = 1; i <= 100; i++) {
    // 5.
    const square = createSquare();
    console.log(square)

    // 8.
    contenitore.appendChild(square);
  }

  function createSquare() {
    const newSquare = document.createElement('div')
    newSquare.classList.add('square')
    return newSquare;
  }
})