export const mod = (n: number, m: number) => ((n % m) + m) % m

export const round = (value: number, decimals: number) => {
  return Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals)
}

export const normalizeDelta = (delta: number) => round((1000 * delta) / 8, 4)
