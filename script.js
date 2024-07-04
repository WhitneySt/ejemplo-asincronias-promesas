console.log("1. Cortar las Verduras");
setTimeout(() => {
  console.log("2. Calentar el horno");
}, 3000);
console.log("3. Marinar el pollo");
console.log("4. Esperar a que se marine el pollo");

//-------------------OPERACIONES SÍNCRONAS---------------------
console.log("Inicio");

for (let index = 0; index < 3; index++) {
  console.log(`Tarea Síncrona ${index + 1} en proceso`);
}

console.log("Fin");

//--------------------OPERACIONES ASÍNCRONAS------------------------

console.log("Inicio Operacion asíncrona");

for (let index = 0; index < 3; index++) {
  setTimeout(() => {
    console.log(`Tarea Asíncrona ${index + 1} Completada`);
  }, 1000 * (index + 1));
}

console.log("Fin Operación asíncrona");

//-----------------¿Cómo crear promesas?----------------------------

const miPromesa = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const numeroAleatorio = Math.random();
      if (numeroAleatorio > 0.5) {
        resolve(
          "Se ejecutó con éxito la promesa. Número Aleatorio: " +
            numeroAleatorio
        );
      } else {
        reject("Error!" + numeroAleatorio);
      }
    }, 2000);
  });

let respuesta;
miPromesa()
  .then((resultado) => {
    respuesta = resultado;
    // console.log(resultado)
  })
  .catch((error) => {
    respuesta = error;
    // console.error(error);
  })
  .finally(() => {
    console.warn("La promesa retornó un resultado");
    console.warn("RESPUESTA: " + respuesta);
  });

console.log("respuesta " + respuesta);

miPromesa()
  .then((resultado) => {
    respuesta = resultado;
    // console.log(resultado)
    return "Primera respuesta gestionada";
  })
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    respuesta = error;
    // console.error(error);
  })
  .finally(() => {
    console.warn("La promesa retornó un resultado");
    console.warn("RESPUESTA: " + respuesta);
  });

const gestionarMiPromesa = async () => {
  try {
    const respuestaMiPromesa = await miPromesa();
    console.log("Gestionar mi promesa" + respuestaMiPromesa);
  } catch (error) {
    console.error("Error dentro de la función asíncrona" + error);
  } finally {
    console.log("Probando hilo de ejecución dentro de la función asíncrona");
  }
};

gestionarMiPromesa();

console.log("Probando hilo de ejecución");

//-------------Función que nos permita obtener los primeros 20 pokemons de la POKEAPI--------

const obtenerPokemons = () => {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((respuesta) => {
      console.log(respuesta);
      return respuesta.json();
    })
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.error(error);
    });
};

// const  obtenerPokemones =()

obtenerPokemons();
