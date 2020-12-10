$(document).ready(function () {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family
  const icone = [
    {
      name: "cat",
      prefix: "fas",
      type: "fa-cat",
      family: "animali"
    },
    {
      name: "crow",
      prefix: "fas",
      type: "fa-crow",
      family: "animali"
    },
    {
      name: "dog",
      prefix: "fas",
      type: "fa-dog",
      family: "animali"
    },
    {
      name: "dove",
      prefix: "fas",
      type: "fa-dove",
      family: "animali"
    },
    {
      name: "dragon",
      prefix: "fas",
      type: "fa-dragon",
      family: "animali"
    },
    {
      name: "horse",
      prefix: "fas",
      type: "fa-horse",
      family: "animali"
    },
    {
      name: "hippo",
      prefix: "fas",
      type: "fa-hippo",
      family: "animali"
    },
    {
      name: "fish",
      prefix: "fas",
      type: "fa-fish",
      family: "animali"
    }
  ];
  console.log(icone);
  // Selezioniamo il container icons
  const container = document.getElementById('icons');
  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
  icone.forEach(icon => {
    const markup = `
    <div>
    <i class=" ${icon.prefix} ${icon.type} "></i>
    <div class = "title">${icon.name.toUpperCase()}</div>
    </div>
    `;
    container.insertAdjacentHTML('beforeend', markup);
  });

});


/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.



// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup
