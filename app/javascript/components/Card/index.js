import styles from './styles'

export default function({ title }) {
  return `
    <div class=${styles.myCard}>
      <h3>${title}</h3>
      <div class=${styles.myCardImage}></div>
    </div>
  `
}
