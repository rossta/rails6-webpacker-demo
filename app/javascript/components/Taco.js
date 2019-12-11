import TacoImage from '../images/tacos.jpg'

export default function({ title }) {
  return `
  <div>
    <p>${title}</p>
    <p><img src=${TacoImage} alt="Tacos" /></p>
  </div>
  `
}
