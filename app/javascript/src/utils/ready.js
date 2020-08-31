export default function(callback) {
  if (document.readyState !== "loading") {
    callback()
  } else {
    document.addEventListener('DOMContentLoaded', callback)
  }
}
