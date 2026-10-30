export type Destination = { name: string; image: string; description: string }
export type Category = { name: string; image: string; count: string }

export const destinations: Destination[] = [
  { name: 'Buenos Aires', image: '/assets/img/buenos-aires.webp', description: 'Elegância europeia na América do Sul com roteiros culturais exclusivos.' },
  { name: 'Santiago', image: '/assets/img/santiago.webp', description: 'O equilíbrio perfeito entre modernidade urbana e a Cordilheira dos Andes.' },
  { name: 'Lima', image: '/assets/img/lima.webp', description: 'A capital gastronômica do continente e sua rica história colonial.' },
  { name: 'Paris', image: '/assets/img/paris.webp', description: 'A Cidade Luz espera por você com arte e experiências inesquecíveis.' },
]

export const categories: Category[] = [
  { name: 'Restaurantes', image: '/assets/img/carousel/restaurante.webp', count: '5.4k lugares' },
  { name: 'Praias', image: '/assets/img/carousel/capri-italia.webp', count: '920 praias' },
  { name: 'Atividades', image: '/assets/img/carousel/exploradores.webp', count: '2.1k experiências' },
  { name: 'Destinos', image: '/assets/img/buenos-aires.webp', count: '1.8k destinos' },
  { name: 'Hotéis', image: '/assets/img/lima.webp', count: '3.2k opções' },
  { name: 'Roteiros', image: '/assets/img/carousel/roteiro.webp', count: '680 roteiros' },
]
