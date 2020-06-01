/* eslint-disable node/no-unpublished-require */
const sinon = require('sinon');
const chai = require('chai');

const { expect } = chai;

const InventoryController = require('./inventoryController');

describe('InventoryController', () => {
  let controller;
  let InventoryControllerStub;
  const inventory = [
    {
      imageId: 1,
      title: 'Water Lilies',
      artist: 'Claude Monet',
      medium: 'oil on canvas',
      status: 'available',
      purchaseDate: '2020-02-19T20:13:24.407Z',
      retailPrice: 3000000,
      boughtFrom: 'Gallery LLC',
      createdAt: '2020-05-22T20:13:24.407Z'
    },
    {
      imageId: 2,
      title: 'Blue Dancers',
      artist: 'Edgar Degas',
      medium: 'pastel on paper',
      status: 'sold',
      sellDate: '2020-07-19T20:13:24.407Z',
      customer: 'GMG Gallery',
      retailPrice: 3000000,
      purchaseDate: '2020-02-19T20:13:24.407Z',
      boughtFrom: 'Gallery LLC',
      createdAt: '2020-05-22T20:13:24.407Z'
    },
    {
      imageId: 3,
      title: 'The Demon Seated',
      artist: 'Mikhail Vrubel',
      medium: 'oil on canvas',
      status: 'loaned out',
      retailPrice: 3000000,
      purchaseDate: '2020-02-19T20:13:24.407Z',
      boughtFrom: 'Gallery LLC',
      loanStartDate: '2020-03-19T20:13:24.407Z',
      loanEndDate: '2020-04-19T20:13:24.407Z',
      customer: 'GMG Gallery',
      createdAt: '2020-05-22T20:13:24.407Z'
    },
    {
      imageId: 4,
      title: 'Swan Princess',
      artist: 'Mikhail Vrubel',
      medium: 'oil on canvas',
      status: 'available',
      retailPrice: 3000000,
      purchaseDate: '2020-02-19T20:13:24.407Z',
      boughtFrom: 'Gallery LLC',
      createdAt: '2020-05-22T20:13:24.407Z'
    },
    {
      imageId: 5,
      title: 'Faust',
      artist: 'Mikhail Vrubel',
      medium: 'oil on canvas',
      status: 'available',
      retailPrice: 3000000,
      purchaseDate: '2020-02-19T20:13:24.407Z',
      boughtFrom: 'Gallery LLC',
      createdAt: '2020-05-22T20:13:24.407Z'
    },
    {
      imageId: 6,
      artist: 'Gustav Klimt',
      title: 'Portrait of Adele Bloch-Bauer I',
      medium: 'oil on canvas',
      status: 'available',
      retailPrice: 3000000,
      purchaseDate: '2020-02-19T20:13:24.407Z',
      boughtFrom: 'Gallery LLC',
      createdAt: '2020-05-22T20:13:24.407Z'
    },
    {
      imageId: 7,
      artist: 'Gustav Klimt',
      title: 'The Kiss',
      medium: 'oil on canvas',
      status: 'available',
      retailPrice: 3000000,
      purchaseDate: '2020-02-19T20:13:24.407Z',
      boughtFrom: 'Gallery LLC',
      createdAt: '2020-05-22T20:13:24.407Z'
    },
    {
      imageId: 8,
      artist: 'Claude Monet',
      title: 'Woman with a Parasol',
      medium: 'oil on canvas',
      status: 'available',
      retailPrice: 3000000,
      purchaseDate: '2020-02-19T20:13:24.407Z',
      boughtFrom: 'Gallery LLC',
      createdAt: '2020-05-22T20:13:24.407Z'
    },
    {
      imageId: 9,
      artist: 'Vincent van Gogh',
      title: 'The Starry Night',
      medium: 'oil on canvas',
      status: 'available',
      purchaseDate: '2020-02-19T20:13:24.407Z',
      boughtFrom: 'Gallery LLC',
      retailPrice: 3000000,
      createdAt: '2020-05-22T20:13:24.407Z'
    },
    {
      imageId: 10,
      artist: 'Unknown',
      title: 'Flowers',
      medium: 'oil on canvas',
      status: 'available',
      purchaseDate: '2020-02-19T20:13:24.407Z',
      boughtFrom: 'Gallery LLC',
      retailPrice: 3000000,
      createdAt: '2020-05-22T20:13:24.407Z'
    }
  ];

  before(() => {
    controller = InventoryController;
    InventoryControllerStub = sinon.stub(controller, 'getAllInventory');
  });

  it('should get all inventory', () => {
    InventoryControllerStub.returns(inventory);
    const response = controller.getAllInventory();
    expect(response).to.be.eql(inventory);
  });
});
