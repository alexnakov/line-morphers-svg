var curveIsChanged = false

function generatePath(func) {
  let d = ""
  for (let x = -200; x <= 200; x+=2) {
    const y = func(x)
    d += (x === - 200 ? "M" : "L") + x + " " + y + " "
  }
  return d
} 

const graphAttrs1 = [
  {d: `path("${generatePath((x)=>0.005*x*x)}")`},
  {d: `path("${generatePath((x)=>-0.005*x*x)}")`}
]

const graphAttrs2 = [
  {d: `path("${generatePath((x)=>-0.005*x*x)}")`},
  {d: `path("${generatePath((x)=>0.005*x*x)}")`}
]

const graphTiming = {
  duration: 500,
  iterations: 1,
  fill: 'both',
}

function changeGraph() {
  console.log(`path("${generatePath((x)=>-0.005*x*x)}")`.length)
  if (!curveIsChanged) {
    document.getElementById('myPath').animate(graphAttrs1, graphTiming)
  } else {
    document.getElementById('myPath').animate(graphAttrs2, graphTiming)
  }
  curveIsChanged = !curveIsChanged
}



