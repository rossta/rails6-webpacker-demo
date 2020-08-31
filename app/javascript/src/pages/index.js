const gon = window.gon || {}
const pages = gon.pages || []

pages.forEach((page) => {
  import(
    /* webpackChunkName: "[request]" */
    `./${page}`
  ).then(() => console.log('Dynamic import loaded', 'page', page))
})
