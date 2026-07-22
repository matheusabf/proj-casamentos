const giftsData = [
  ["Jogo de lençol", 130],
  ["Edredom", 180],
  ["Cobertor ou manta", 180],
  ["Colcha", 230],
  ["Jogo de talheres ou faqueiro", 250],
  ["Jogo de pratos", 90],
  ["Jogo de copos", 60],
  ["Jogo de panelas", 400],
  ["Panela de pressão", 160],
  ["Jogo de toalhas marrom", 140],
  ["Ferro de passar", 150], // média entre 100 e 180
  ["Tábua de passar", 90],
  ["Travessa de vidro com tampa", 60],
  ["Ventilador", 140],
  ["Sanduicheira", 120],
  ["Frigideira", 50],
  ["Jogo de xícaras", 80],
  ["Microondas", 600],
  ["Liquidificador", 200],
  ["Assadeira Teflon", 50],
  ["Escorredor de Inox", 60],
  ["Jogo de utensílios de silicone vermelho ou preto", 50],
  ["Kit fervedor em alumínio", 60],
  ["Batedeira", 130],
  ["Cafeteira elétrica", 120],
].map((item, index) => ({
  id: index + 1,
  name: item[0],
  price: item[1]
}));

export default giftsData;