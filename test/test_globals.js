const fetch = require('node-fetch');
/**
 * These globals are set to support the Worker environment. They are set to sane and very barebone defaults
 * To use them for testing, you can stub them in your tests and reset them with sinon.
 * Like this:
 *
 * let fetchStub = sinon.stub(global, 'fetch').callFake(() => {})
 *
 * And then fetchStub.restore() at the end of your tests.
 */
global.accesskv = {
  put: function() {
    return new Promise(resolve => {
      resolve();
    });
  },
  get: function() {
    return new Promise(resolve => {
      resolve();
    });
  },
  delete: function() {
    return new Promise(resolve => {
      resolve();
    });
  }
};

global.accesstokens = {
  put: function() {
    return new Promise(resolve => {
      resolve();
    });
  },
  get: function() {
    return new Promise(resolve => {
      resolve();
    });
  },
  delete: function() {
    return new Promise(resolve => {
      resolve();
    });
  }
};

global.accesskeys = {
  put: function() {
    return new Promise(resolve => {
      resolve();
    });
  },
  get: function() {
    return new Promise(resolve => {
      resolve();
    });
  },
  delete: function() {
    return new Promise(resolve => {
      resolve();
    });
  }
};

global.event = {
  request: { url: 'https://test.accessonworkers.com' },
  waitUntil: () => {}
};

global.CLOUDFLARE_ZONE_ID = '4321';
global.CLOUDFLARE_AUTH_EMAIL = 'test@cfemail.com';
global.CLOUDFLARE_AUTH_KEY = '1234';

global.SCRIPT_NAME = 'unit test';

global.fetch = function(url, init) {
  return new Promise(resolve => {
    resolve();
  });
};

global.crypto = {
  getRandomValues: function() {
    return new Array(1, 2, 3, 4, 5);
  }
};

global.Headers = fetch.Headers;

global.Response = fetch.Response;
global.Request = fetch.Request;
global.btoa = s => Buffer.from(s).toString('base64');
global.atob = s => Buffer.from(s, 'base64').toString();
global.STAGE = 'test';
