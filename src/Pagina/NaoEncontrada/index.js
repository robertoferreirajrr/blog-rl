import React from "react";
import styles from "./NaoEncontrada.module.css";
import erro_404 from 'assets/erro_404.png'
import Botao from "Componentes/Botao";
import { useNavigate } from "react-router-dom";
export default function NaoEncontrada() {
    const navegacao = useNavigate();

  return (
    <>
    <div className={styles.conteudoContainer}>
      <span className={styles.texto404}>404</span>
      <h1 className={styles.titulo}>Ops! Página não encontrada</h1>
      <div className={styles.botaoContainer} onClick={() => {navegacao(-1)}}>
      <Botao>Voltar</Botao>
      </div>
     
      <p className={styles.paragrafo}>
        Tem certeza que era isso que você estava procurando!?
      </p>
      <p className={styles.paragrafo}>
        Recarregue a página ou volte para a página inicial.
      </p>
      <img className={styles.imagemCachorro} src={erro_404} alt="Cachorro de óculos"/>
    </div>
    <div className={styles.espacoEmBranco}></div>
    </>
  );
}
