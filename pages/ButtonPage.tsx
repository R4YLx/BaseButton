import { NextPage } from 'next'
import BaseButton from '../components/BaseButton/BaseButton'
import styles from '../styles/Home.module.css'

const ButtonPage: NextPage = () => {
  return (
    <div className={styles.flexContainer}>
      <BaseButton href="/" text="Anchor" size="m" />
      <BaseButton text="Button" size="m" />
    </div>
  )
}

export default ButtonPage
