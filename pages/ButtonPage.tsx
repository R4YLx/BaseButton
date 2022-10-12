import { NextPage } from 'next'
import { BaseButton } from '../components/BaseButton/BaseButton'
import styles from '../styles/Home.module.css'

const ButtonPage: NextPage = () => {
  return (
    <div className={styles.flexContainer}>
      <BaseButton
        as="button"
        text="I am a regular button"
        onClick={() => alert('You clicked me, hihi!')}
      />

      <BaseButton as="a" text="I am an anchor" href="/" target="_blank" />

      <BaseButton
        as="button"
        text="I am a small button"
        size="s"
        onClick={() => alert('Hello World!')}
      />

      <BaseButton
        as="a"
        text="I am a medium button"
        size="m"
        href="https://kruso.se/"
        target="_blank"
      />

      <BaseButton as="button" text="I am a fluid button" size="m" isFluid />

      {/* Unhappy button since 'target' isn't a btn attr */}
      {/* <BaseButton as="button" text="I am a fluid button" target="_blank" size="m" isFluid /> */}
    </div>
  )
}

export default ButtonPage
