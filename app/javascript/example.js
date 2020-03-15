import * as d3 from "d3"

window.addEventListener('DOMContentLoaded', () => {
  d3.selectAll("div")
    .append("p")
    .text("Hello, World!")
})


// Only necessary if you wish to export d3 to global scope
window.d3 = d3
