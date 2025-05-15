let cats = [
  {
    id: 1,
    name: 'Cici',
    image: '/images/01.jpg',
  },
  {
    id: 2,
    name: 'Milo',
    image: '/images/02.jpg',
  },
  {
    id: 3,
    name: 'Simba',
    image: '/images/03.jpg',
  },
];

const CatsLocal = {
  async getAllCats() {
    return [...cats];
  },

  async getCatById(id) {
    const selectedCat = cats.find((cat) => cat.id == id);

    if (!selectedCat) {
      throw new Error(`Cat with id ${id} was not found.`);
    }

    return selectedCat;
  },
};

export default CatsLocal;
