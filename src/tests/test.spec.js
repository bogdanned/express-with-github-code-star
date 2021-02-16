const supertest = require('supertest'); 
const test = require('unit.js');
const app = require('../app.js');

const request = supertest(app);

describe('Tests app', function() {
  it('verifies get', function(done) {
    return request.get('/').expect(200).end(function(err, result) {
      if(err) done(err);
      expect(result.text).toEqual(expect.stringContaining('hello world'));
      return done()
    });
  });
});
