export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function makeRandomData() {
  const d = [];
  const l = randomInt(20, 25);

  for (var i = 0; i < l; i++) {
    d[i] = { id: i, r: randomInt(1, 10), x: randomInt(-500, 500), y: randomInt(-500, 500) };
  }

  return d;
}
