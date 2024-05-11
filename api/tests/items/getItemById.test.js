var nock = require('nock');
var assert = require('assert');
require('dotenv').config();

const { getItemById } = require('../../items/service/items.service');
var getItemMock = require('./getItem.mock');
var getItemDescriptionMock = require('./getItemDescription.mock');

const ITEM_ID = 'MLA1639167830';

const okResult = {
  author: {
    name: '',
    lastname: '',
  },
  item: {
    id: 'MLA1639167830',
    title:
      'Macbook Pro Macbook Pro 14  M3 Pro Space Black 14 , Apple M3 M3 Pro  18gb De Ram 512gb Ssd, Apple M3 Pro 14-core Gpu 120 Hz 3024x1964px Macos',
    price: {
      currency: 'ARS',
      amount: 5139900,
      decimals: 2,
    },
    picture: 'http://http2.mlstatic.com/D_755622-MLA73279643202_122023-O.jpg',
    thumbnail: 'http://http2.mlstatic.com/D_755622-MLA73279643202_122023-I.jpg',
    condition: 'new',
    free_shipping: true,
    description:
      'La MacBook Pro es la notebook más poderosa de Apple, creada para quienes se proponen nuevos desafíos y logran cosas imposibles. Tiene una pantalla envolvente, procesadores superrápidos, gráficos de última generación, un nuevo teclado Magic Keyboard y un increíble espacio de almacenamiento.\n\nPantalla con gran impacto visual\nSu pantalla de 14" y 3024x1964px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle. \n\nEficiencia a tu alcance\nSu procesador Apple M3 de 11 núcleos, te permitirá ejecutar programas variados y procesos indispensables para desenvolverte en el día a día, ya sea en tu trabajo o en los momentos de ocio en tu hogar. \n\nPotente disco sólido \nEl disco sólido de 512 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas.\n\nUn procesador exclusivo para los gráficos\nSu placa de video Apple M3 Pro 14-Core GPU convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.',
  },
};
describe('GET /:id', function () {
  it('should have the same ID', async () => {
    nock(process.env.API_URL + '/items')
      .get('/' + ITEM_ID)
      .reply(200, getItemMock);
    nock(process.env.API_URL + '/items')
      .get('/' + ITEM_ID + '/description')
      .reply(200, getItemDescriptionMock);

    return getItemById(ITEM_ID).then((response) => {
      assert.equal(response.item.id, ITEM_ID);
    });
  });

  it('should return the same object', async () => {
    nock(process.env.API_URL + '/items')
      .get('/' + ITEM_ID)
      .reply(200, getItemMock);
    nock(process.env.API_URL + '/items')
      .get('/' + ITEM_ID + '/description')
      .reply(200, getItemDescriptionMock);

    return getItemById(ITEM_ID).then((response) => {
      assert.equal(JSON.stringify(response), JSON.stringify(okResult));
    });
  });
});
