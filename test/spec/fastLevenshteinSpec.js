'use strict';

describe('Service: Fast Levenshtein', function () {
  var service;
  beforeEach(module('ngFastLevenshtein'));
  beforeEach(inject(function(fastLevenshteinService) {
    service = fastLevenshteinService;
  }));

  it('should calculate the correct Levenshtein distance: base', function () {
    // identical strings
    expect(service.distance('hello', 'hello')).toBe(0);
  });

  it('should calculate the correct Levenshtein distance: substitutions', function () {
    // substitutions
    expect(service.distance('a', 'b')).toBe(1);
    expect(service.distance('ab', 'ac')).toBe(1);
    expect(service.distance('ac', 'bc')).toBe(1);
    expect(service.distance('abc', 'axc')).toBe(1);
  });

  it('should calculate the correct Levenshtein distance: many ops', function () {
    // many ops
    expect(service.distance('xabxcdxxefxgx', '1ab2cd34ef5g6')).toBe(6);
    expect(service.distance('javawasneat', 'scalaisgreat')).toBe(7);
    expect(service.distance('example', 'samples')).toBe(3);
    expect(service.distance('sturgeon', 'urgently')).toBe(6);
    expect(service.distance('levenshtein', 'frankenstein')).toBe(6);
    expect(service.distance('distance', 'difference')).toBe(5);
  });

  it('should calculate the correct Levenshtein distance: non-latin', function () {
    // non-latin
    expect(service.distance('因為我是中國人所以我會說中文', '因為我是英國人所以我會說英文')).toBe(2);
  });

  it('should calculate the correct Levenshtein distance: long text', function () {
    // long text
    expect(service.distance('Morbi interdum ultricies neque varius condimentum. Donec volutpat turpis interdum metus ultricies vulputate. Duis ultricies rhoncus sapien, sit amet fermentum risus imperdiet vitae. Ut et lectus',
      'Duis erat dolor, cursus in tincidunt a, lobortis in odio. Cras magna sem, pharetra et iaculis quis, faucibus quis tellus. Suspendisse dapibus sapien in justo cursus')).toBe(143);
  });
});