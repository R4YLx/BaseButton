import { NextPage } from 'next'
import BaseButton from '../components/BaseButton/BaseButton'
import styles from '../styles/Home.module.css'

const ButtonPage: NextPage = () => {
  return (
    <div className={styles.flexContainer}>
      <BaseButton href="/" text="Hello" />
    </div>
  )
}

export default ButtonPage
