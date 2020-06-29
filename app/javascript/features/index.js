const allFeatures = {
  comments: () => import(/* webpackChunkName: "comments" */ './comments'),
  posts: () => import(/* webpackChunkName: "posts" */ './posts'),
  largeComponents: () => import(/* webpackChunkName: "large-components" */ './largeComponents')
}

const currentFeatures = window.gon.features || []
const missingFeature = (feature) => {
  return () => console.warn('No feature registered with the name', feature)
}

currentFeatures.forEach((feature) => {
  const callback = allFeatures[feature] || missingFeature(feature)
  callback()
})
