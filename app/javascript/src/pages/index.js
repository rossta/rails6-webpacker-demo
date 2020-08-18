const requestedPages = gon.pages || []

requestedPages.forEach((page) => {
  import(/* webpackChunkName: "[request]" */ `../pages/${page}`)
    .then(() => console.log('Loaded page', page))
    .catch((e) => console.error('Error while loading page', e))
})
