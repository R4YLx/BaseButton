import { NextPage } from 'next'
import BaseButton from '../components/BaseButton/BaseButton'
import styles from '../styles/Home.module.css'

const ButtonPage: NextPage = () => {
  return (
    <div className={styles.flexContainer}>
      <BaseButton href="/" target="/" text="I'm an anchor" />
      <BaseButton text="I'm a button" />
    </div>
  )
}

export default ButtonPage
