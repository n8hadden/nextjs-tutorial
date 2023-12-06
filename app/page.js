import Image from 'next/image'
import styles from './page.module.css'
import pfp from "public/pfp.jpg";

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.intro}>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>
            Nathan Hadden
          </h1>
          <p className={styles.desc}>
            Trying is the first step to failure.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image src={pfp} alt="" className={styles.img} style={{width: "300px", height: "200px"}} />
        </div>
      </div>
    </div>

  )
}
