import { pdf } from './calculations'
import { getP } from './curves'

//Convert user/axis scale to pixel scale for writing to screen
export function screenScale(x) {
  const { mu0, std } = getP()
  return d3
    .scaleLinear()
    .domain([mu0 - 4 * std, mu0 + 4 * std])
    .range([0, $('.maingraph').innerWidth()])(x)
}

//Convert pixel-scale for writing to screen to user/axis scale
export function displayScale(x) {
  const { mu0, std } = getP()
  return d3
    .scaleLinear()
    .domain([0, $('.maingraph').innerWidth()])
    .range([mu0 - 4 * std, mu0 + 4 * std])(x)
}

//Scale vertically by mapping the max height a curve can have (pdf w n==100) to the screen height
export function verticalScale(y) {
  const { mu0, std } = getP()
  return d3
    .scaleLinear()
    .domain([0, pdf(mu0, mu0, std / Math.sqrt(100))])
    .range([0, $('.maingraph').innerHeight() * 1.16])(y)
}
