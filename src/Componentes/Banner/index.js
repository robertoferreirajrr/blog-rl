import React from "react";
import styles from "./Banner.module.css";
import circuloColorido from 'assets/circulo_colorido.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Blog-RL</h1>
        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis dui
          nec massa accumsan fermentum ac eget lacus. Nunc nec velit bibendum,
          tristique tortor in, rhoncus ante. Etiam vel bibendum enim. Sed
          porttitor augue sit amet vulputate vehicula. Maecenas condimentum
          pulvinar mi sit amet efficitur. Mauris id lectus ac sem finibus
          volutpat eget a ante. Proin in suscipit orci. In posuere ex diam, ac
          euismod mauris dapibus semper. Phasellus tempor erat ligula, sit amet
          accumsan sem facilisis quis. Etiam posuere elit a turpis efficitur,
          nec pharetra libero sagittis. Nulla nec purus nibh. Suspendisse metus
          sem, facilisis id nulla vestibulum, condimentum volutpat lacus. Etiam
          porttitor vehicula ipsum, fringilla pretium justo imperdiet a.
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt="Circulo colorido"
        />
        <img
          className={styles.minhaFoto}
          src="https://github.com/robertoferreirajrr.png"
          aria-hidden={true}
          alt="Minha foto"
        />
      </div>
    </div>
  );
}
