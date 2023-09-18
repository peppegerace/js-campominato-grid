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

  contenitore.innerHTML = '';

  // 4.
  for (let i = 1; i <= 100; i++) {
    // 5.
    const square = createSquare(i);
    
    // 6.
    square.addEventListener('click', function(){
      // determino se l'indice è pari o dispari
      const oddEven = i % 2 === 0 ? 'even' : 'odd';

      // 7.
      this.classList.toggle('clicked')
      this.classList.toggle(oddEven)
      console.log(this)
      console.log(i)
    })

    // 8.
    contenitore.append(square);
  }
})

/************FUNZIONI************/ 
function createSquare(index) {
  const newSquare = document.createElement('div');
  newSquare.className = 'square';
  
  newSquare.innerHTML = `<span>${index}</span>`;
  return newSquare;
}



