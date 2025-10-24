export const sleep = (time:number) => new Promise((resolve)=> setTimeout(() => { resolve(true) }, time));

interface PosicionesGeograficas {
    latitude:any
    longitude:any  
} 

export const compararCoordenadas = (posicionInicial:PosicionesGeograficas, posicionFinal:PosicionesGeograficas, distanciaCompara = 5) => {
  const R = 6371e3; // Radio de la Tierra en metros
  const rad = Math.PI / 180;

  const phi1 = posicionInicial?.latitude * rad;
  const phi2 = posicionFinal?.latitude * rad; 
  const deltaPhi = (posicionFinal?.latitude - posicionInicial?.latitude) * rad; 
  const deltaLambda = (posicionFinal?.longitude - posicionInicial?.longitude) * rad; 

  // Haversine
  const a = Math.sin(deltaPhi / 2) ** 2 + Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distancia = R * c; // Distancia en metros
  return {
    iguales: distancia <= distanciaCompara,
    distancia
  };
}
