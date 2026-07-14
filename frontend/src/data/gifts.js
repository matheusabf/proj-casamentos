const giftsData = [
  ["Jogo de lençol", 80],
  ["Edredom", 100],
  ["Cobertor ou manta", 80],
  ["Colcha", 80],
  ["Jogo de talheres ou faqueiro", 70],
  ["Jogo de pratos", 90],
  ["Jogo de copos", 60],
  ["Jogo de panelas", 150],
  ["Panela de pressão", 120],
  ["Jogo de toalhas marrom", 50],
  ["Ferro de passar", 70],
  ["Tábua de passar", 50],
  ["Travessa de vidro com tampa", 40],
  ["Ventilador", 80],
  ["Sanduicheira", 120],
  ["Frigideira", 90],
  ["Jogo de xícaras", 50],
  ["Microondas", 240],
  ["Liquidificador", 200],
].map((item, index) => ({
  id: index + 1,
  name: item[0],
  price: item[1].toFixed(2)
}));

export default giftsData;