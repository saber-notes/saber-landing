import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Image
          className={styles.headerDoodle}
          src="images/doodles/square.svg"
          alt=""
          aria-hidden="true"
          width={100}
          height={100}
        />
        <Image
          src="https://raw.githubusercontent.com/adil192/saber/main/assets/icon/resized/icon-512x512.png"
          alt="Logo"
          width={100}
          height={100}
        />
        <h1 className={styles.title}>Saber</h1>
        <p className={styles.summary}>
          A cross-platform libre handwritten notes app
        </p>
      </div>

      <div id="github">
        <h2>Open source</h2>
        <p>No sneaky stuff! Saber is free and open source software.</p>
        <p>
          Find the code on
          <a href="https://github.com/adil192/saber">
            <Image
              className={styles.githubLogo}
              src="images/badges/GitHub_Logo.png"
              alt="GitHub"
              width={100}
              height={41}
            />
          </a>
          .
        </p>
      </div>
    </main>
  )
}
