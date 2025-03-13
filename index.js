import net from "node:net";
import fs from "node:fs";
//1. no funciona como se espera
//2. hay que arreglar algo
//

export const ping = (ip, callback) => {
  const startTime = process.hrtime();

  const client = net.connect({ port: 80, host: ip }, () => {
    client.end();
    //return { time: process.hrtime(startTime), ip };Ç
    callback(null, { time: process.hrtime(startTime), ip });
  });

  client.on("error", (err) => {
    callback(err);
    //throw err; <-- No funciona
    client.end;
  });
};

ping("google.com", (err, info) => {
  if (err) console.error(err);
  console.log(info);
});

//EJERCICIO 2
//Tranformar callback en promesa
//añadi manejo de errores

/* export function obtenerDatosPromesa(callback){
  setTimeout(()=>{
    callback(null, {data: 'datos importantes'});
  },2000)
} */
export function obtenerDatosPromesa() {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      try {
        resolve({ data: "datos importantes" });
      } catch (e) {
        rejects(e);
      }
    }, 2000);
  });
}

//opción 1 con then
obtenerDatosPromesa()
  .then((info) => {
    console.log(info);
  })
  .catch((error) => {
    console.error(error);
  });

//opcion 2 con await
try {
  const info = await obtenerDatosPromesa();
  console.log(info);
} catch (error) {
  console.error(error);
}

//EJERCICIO 3
//EXPLICA QUE HACE LA FUNCION
//añadir import fs

export function procesarArchivo(callback) {
  const handleReadFile = (error, contenido) => {
    if (error) {
      console.error("Error leyendo archivo:", error.message);
      callback(error);
      //return false; <-- No tiene sentido
    }
    //setTimeout(()=>{ <-- Innecesario
    const textoProcesado = contenido.toUpperCase();
    fs.writeFile("output.txt", textoProcesado, handleWriteFile);
  }
    const handleWriteFile = (error) => {
      if (error) {
        console.error("Error guardando archivo:", error.message);
        callback(error);
        //return false;
      }

      console.log("Archivo procesado y guardado con éxito");
      //return true
      callback(null);
    };
    fs.readFile("input.txt","utf8",  handleReadFile);
    // },2000)
  };


procesarArchivo(() => {
  console.log("Esto ya funciona");
});

export async function procesarArchivoPromise() {
  let contenido = ''
    contenido = await fs.promises.readFile('input.txt', 'utf8')
    .catch(erro => {
      console.error('Error leyendo archivo:', error.message)
      return ''
    })
    const textoProcesado = contenido.toUpperCase();

    try{
      await fs.promises.writeFile('output.txt', textoProcesado);
    } catch(error) {
      console.error('Error guardando el archivo:', error.message)
      throw error
    }
}
await procesarArchivoPromise()

//EJERCICIO 4
 export async function leerArchivos(){
  console.time('leerArchivos')
  const [archivo1, archivo2, archivo3] = await Promise.allSettled([
    fs.readFileSync('archivo1.txt', 'utf8'),
    fs.readFileSync('archivo2.txt', 'utf8'),
    fs.readFileSync('archivo3.txt', 'utf8')
  ]).catch(err =>{
    console.log(err)
    return []
  })
  const message = [archivo1.value, archivo2.value, archivo3.value]
  .filter((value) => typeof value !== 'undefined')
  .join(' ')
/*const archivo1 = fs.readFileSync('archivo1.txt', 'utf8')
  const archivo2 = fs.readFileSync('archivo2.txt', 'utf8')
  const archivo3 = fs.readFileSync('archivo3.txt', 'utf8') */
  console.timeEnd('leerArchivos')
  console.log(message)
  return message
 }

leerArchivos()

export async function delay(time) {
  return new Promise(resolve =>{
    setTimeout(resolve, time)
  })
}
delay(3000).then(() => console.log('hola mundo'))