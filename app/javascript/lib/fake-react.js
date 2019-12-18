export default function(el, component, props = {}) {
  el.innerHTML = component(props)
}
