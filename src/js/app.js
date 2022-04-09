export default function getHealthStatus(hero) {
  if (hero.health > 50) {
    return 'healthy';
  }
  if (hero.health < 15) {
    return 'critycal';
  }
  return 'wounded';
}
