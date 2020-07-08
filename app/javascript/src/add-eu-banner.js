import CookiesEuBanner from 'cookies-eu-banner'
import 'cookies-eu-banner/css/cookies-eu-banner.default.css'

document.addEventListener('DOMContentLoaded', () => {
  new CookiesEuBanner(() => {
    console.log('Cookies EU Banner accepted')
  })
})
