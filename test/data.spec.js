import { filterSelect, sortData, computeStats } from '../src/data.js';

const arrayTest = [{id: 1, name: "Summer Sanchez", status: "Dead"}, {id: 2, name: "Nick Perez", status: "Alive"}, {id: 3, name: "Fabiana Fernandez", status: "Dead"}];

describe('filterSelect', () => {
  it('is a function', () => {
    expect(typeof filterSelect).toBe('function');
  });
  it('[{id: 1, name: "Summer Sanchez", status: "Dead"}, {id: 3, name: "Fabiana Fernandez", status: "Dead"}] for filterSelect(arrayTest, "status", "Dead") ', () => {
    expect(filterSelect(arrayTest, "status", "Dead")).toEqual([{id: 1, name: "Summer Sanchez", status: "Dead"}, {id: 3, name: "Fabiana Fernandez", status: "Dead"}]);
  });
});

describe('sortData', () => {
  it('is an object', () => {
    expect(typeof sortData).toBe('object');
  });
    it('[{id: 3, name: "Fabiana Fernandez", status: "Dead"}, {id: 2, name: "Nick Perez", status: "Alive"}, {id: 1, name: "Summer Sanchez", status: "Dead"}] for sortData.sortByAlphabet(arrayTest) ', () => {
      expect(sortData.sortByAlphabet(arrayTest)).toEqual([{id: 3, name: "Fabiana Fernandez", status: "Dead"}, {id: 2, name: "Nick Perez", status: "Alive"}, {id: 1, name: "Summer Sanchez", status: "Dead"}]);
  });
it('returns [{id: 1, name: "Summer Sanchez", status: "Dead"}, {id: 2, name: "Nick Perez", status: "Alive"}, {id: 3, name: "Fabiana Fernandez", status: "Dead"}] for sortData.sortByAlphabetReverse(arrayTest) ', () => {
  expect(sortData.sortByAlphabetReverse(arrayTest)).toEqual([{id: 1, name: "Summer Sanchez", status: "Dead"}, {id: 2, name: "Nick Perez", status: "Alive"}, {id: 3, name: "Fabiana Fernandez", status: "Dead"}]);    
});
it('returns [{id: 3, name: "Fabiana Fernandez", status: "Dead"}, {id: 2, name: "Nick Perez", status: "Alive"}, {id: 1, name: "Summer Sanchez", status: "Dead"}] for sortData.sortByLessPopular(arrayTest) ', () => {
  expect(sortData.sortByLessPopular(arrayTest)).toEqual([{id: 3, name: "Fabiana Fernandez", status: "Dead"}, {id: 2, name: "Nick Perez", status: "Alive"}, {id: 1, name: "Summer Sanchez", status: "Dead"}]);    
});
});

describe('computeStats', () => {
  it('is an object', () => {
    expect(typeof computeStats).toBe('object');
  });
  it('"0.61" for computeStats.percentageFilter(arrayTest)', () => {
    expect(computeStats.percentageFilter(arrayTest)).toEqual("0.61");
  });
  it('{"propertyKeys": ["Dead", "Alive"], "propertyValues": [2, 1]} for computeStats.getDataProperty(arrayTest, "status")', () => {
    expect(computeStats.getDataProperty(arrayTest, "status")).toEqual({"propertyKeys": ["Dead", "Alive"], "propertyValues": [2, 1]});
  });
});