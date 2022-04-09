import getHealthStatus from '../app.js';

const heroesList = [
  [{ name: 'Mar', health: 90 }, 'healthy'],
  [{ name: 'Bar', health: 45 }, 'wounded'],
  [{ name: 'Gar', health: 10 }, 'critycal'],
];

const handler = test.each(heroesList);

handler('should show health status for %s', (hero, expected) => {
  const result = getHealthStatus(hero);
  expect(result).toBe(expected);
});
