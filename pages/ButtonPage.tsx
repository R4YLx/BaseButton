import { NextPage } from 'next'
import BaseButton from '../components/BaseButton'
import styles from '../styles/Home.module.css'

const ButtonPage: NextPage = () => {
  return (
    <div className={styles.flexContainer}>
      <BaseButton
        href="/"
        target="_blank"
        text="I'm an anchor"
        aria-label="link"
        rel="asdasd"
        type="reset"
      />

      <BaseButton
        text="I'm a button"
        onClick={() => alert('hej')}
        rel="asdasd"
        autoFocus
        type="submit"
      />

      <BaseButton size="s" text="I'm a small button" />

      <BaseButton size="m" text="I'm a medium button" />

      <BaseButton size="s" isFluid text="I'm fluid (s)" aria-label="button" />
      <BaseButton
        size="m"
        isFluid
        text="I'm fluid (m)"
        disabled
        onClick={() => alert("This shouldn't work")}
      />
    </div>
  )
}

export default ButtonPage
