function bump(a, n) {
  const x = 1 / (0.1 + Math.random());
  const y = 2 * Math.random() - 0.5;
  const z = 10 / (0.1 + Math.random());
  for (let i = 0; i < n; ++i) {
    const w = (i / n - y) * z;
    a[i] += x * Math.exp(-w * w);
  }
}

export const makeStreamGraphData = () => {
  return function bumps(n, m) {
    const a = [];
    for (let i = 0; i < n; ++i) a[i] = 0;
    for (let i = 0; i < m; ++i) bump(a, n);
    return a;
  };
};
