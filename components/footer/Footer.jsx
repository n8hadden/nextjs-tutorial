import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>©2023 West-MEC Coding Program. All rights reserved.</p>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="West-MEC Facebook Account" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="West-MEC" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="West-MEC" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="West-MEC" />
      </div>
    </div>
  );
};

export default Footer;
