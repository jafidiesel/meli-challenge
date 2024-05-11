var nock = require('nock');
var assert = require('assert');
require('dotenv').config();

const { getAllItems } = require('../../items/service/items.service');
var getItemsMock = require('./getItems.mock');

const okResult = {
  author: {
    name: '',
    lastname: '',
  },
  categories: ['Computación', 'Notebooks y Accesorios', 'Notebooks'],
  items: [
    {
      id: 'MLA1669778952',
      title: 'Apple Macbook Pro 14  M3 8gb Ram - 512gb Ssd - Sportouch',
      price: {
        currency: 'ARS',
        amount: 3001400,
        decimals: 2,
      },
      picture: 'http://http2.mlstatic.com/D_775701-MLA74422702048_022024-O.jpg',
      condition: 'new',
      free_shipping: true,
      state_address: null,
    },
    {
      id: 'MLA1422410041',
      title: 'Apple Macbook Pro M3 512gb 8gb 14.2(3024×1964) Ultimo Modelo',
      price: {
        currency: 'ARS',
        amount: 5599998.6,
        decimals: 2,
      },
      picture: 'http://http2.mlstatic.com/D_773823-MLA75869019791_042024-O.jpg',
      condition: 'new',
      free_shipping: true,
      state_address: null,
    },
    {
      id: 'MLA1613168860',
      title: 'Apple Macbook Pro 13 Chip M2 512gb Color Gris Espacial',
      price: {
        currency: 'ARS',
        amount: 4099999,
        decimals: 2,
      },
      picture: 'http://http2.mlstatic.com/D_667904-MLC53805603669_022023-I.jpg',
      condition: 'new',
      free_shipping: true,
      state_address: null,
    },
    {
      id: 'MLA1409034551',
      title: 'Apple Macbook Pro 16 M3 18gb 512gb Ssd - Sportouch',
      price: {
        currency: 'ARS',
        amount: 4267900,
        decimals: 2,
      },
      picture: 'http://http2.mlstatic.com/D_674370-MLA74410595234_022024-O.jpg',
      condition: 'new',
      free_shipping: true,
      state_address: null,
    },
  ],
};
describe('GET /search', function () {
  
  it('should return 4 items', async () => {
      nock( process.env.API_URL + '/sites/MLA')
        .get('/search')
        .query({
          q: 'macbook',
          limit: 4
        })
        .reply(200, getItemsMock);
      return getAllItems('macbook', 4).then((response) => {
        assert.equal(response.items.length, 4);
      });
    });

  it('should return the same object', async () => {
    nock( process.env.API_URL + '/sites/MLA')
        .get('/search')
        .query({
          q: 'macbook',
          limit: 4
        })
        .reply(200, getItemsMock);
    return getAllItems('macbook', 4).then((response) => {
      assert.equal(JSON.stringify(response), JSON.stringify(okResult));
    });
  });
});
