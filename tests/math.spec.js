//
// import the module to test here:
import * as module from '../src/assets/scripts/math';

//
// load path to the fixtures used for jQuery testing here:
jasmine.getFixtures().fixturesPath = 'base/tests/fixtures';

describe('addition(): ', function() {
  it('can do addition', function() {
    let value = module.addition(2, 2);
    expect(value).toEqual(4);
  });
});

describe('subtraction(): ', function() {
  it('can do subtraction', function() {
    let value = module.subtraction(4, 2);
    expect(value).toEqual(2);
  });
});

describe('show(): ', function() { 
  beforeEach(function () {
    //
    // Spies are utilities provided by jasmine to make sure a callback function has been called.
    spyOn($.fn, 'show');
    module.show();
  });
 
  it('should call jQuerys .show()', function () {
    expect($.fn.show).toHaveBeenCalled();
  });
});

describe('The wow component', function() {
  beforeEach(function() {
    //
    // make call to for fixture to test here:
    loadFixtures('wow.html');    
  });

  it('should use <p> with class of wowzer', function() {
    expect($('.wowzer')).toHaveClass('wowzer');
  });
});

describe('ajax(): ', function() {
  beforeEach(function() {
    jasmine.Ajax.install();
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });

  it ("Success: Logs success text from the service to the console", function () {
    let consoleSpy = spyOn(console, "log");

    jasmine.Ajax.stubRequest('/some/url').andReturn({
      "status": 200, 
      "contentType": 'text/plain',
      "responseText": 'Hello from the world'
    });

    let result = module.ajax();
    expect(consoleSpy).toHaveBeenCalledWith('Hello from the world');
  });

  it ("Failure: Logs error text from the service to the console", function () {
    let consoleSpy = spyOn(console, "log");

    jasmine.Ajax.stubRequest('/some/url').andReturn({
      "status": 404, 
      "contentType": 'text/plain',
      "responseText": 'error'
    });

    let result = module.ajax();
    expect(consoleSpy).toHaveBeenCalledWith('error');
  });
});