function generatePath(func) {
  let d = ""
  for (let x = -200; x <= 200; x+=2) {
    const y = func(x)
    d += (x === - 200 ? "M" : "L") + x + " " + y + " "
  }
  return d
} 

const graphAttrs = [
  {d: `path("${generatePath((x)=>0.005*x*x)}")`},
  {d: `path("${generatePath((x)=>-0.005*x*x)}")`}
]

const graphTiming = {
  duration: 1000,
  iterations: 1,
  fill: 'both',
}

function changeGraph() {
  document.getElementById('myPath').animate(graphAttrs, graphTiming)
}



