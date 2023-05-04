import PostModelo from "Componentes/PostModelo";
import React from "react";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá eu sou Roberto</h3>
      <img
        src="https://github.com/robertoferreirajrr.png"
        alt="Sobre mim"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis dui nec
        massa accumsan fermentum ac eget lacus. Nunc nec velit bibendum,
        tristique tortor in, rhoncus ante. Etiam vel bibendum enim. Sed
        porttitor augue sit amet vulputate vehicula. Maecenas condimentum
        pulvinar mi sit amet efficitur. Mauris id lectus ac sem finibus volutpat
        eget a ante. Proin in suscipit orci. In posuere ex diam, ac euismod
        mauris dapibus semper. Phasellus tempor erat ligula, sit amet accumsan
        sem facilisis quis. Etiam posuere elit a turpis efficitur, nec pharetra
        libero sagittis. Nulla nec purus nibh. Suspendisse metus sem, facilisis
        id nulla vestibulum, condimentum volutpat lacus. Etiam porttitor
        vehicula ipsum, fringilla pretium justo imperdiet a.
      </p>

      <p className={styles.paragrafo}>
        Mauris scelerisque ut mi luctus vehicula. Cras vitae sapien malesuada,
        bibendum libero fermentum, pretium leo. Aenean magna enim, auctor eu
        nibh id, fermentum rhoncus ipsum. Sed porta elit nec felis rutrum, id
        luctus enim lobortis. Integer vitae augue sed quam sollicitudin lacinia
        sit amet quis tortor. Sed aliquet tellus est, a elementum sem elementum
        a. Nullam ultricies feugiat augue et hendrerit. Vestibulum dignissim,
        ligula ut tristique suscipit, erat lectus placerat odio, ut cursus
        lectus felis ac magna. Etiam lectus magna, vulputate eleifend purus a,
        sodales mollis augue. Curabitur ac bibendum erat.
      </p>

      <p className={styles.paragrafo}>
        Ut maximus iaculis urna eu tempus. Vestibulum molestie lacus quam, et
        dictum erat dapibus non. Ut leo nisl, elementum vel dolor et, tempus
        ullamcorper diam. Phasellus auctor ut enim et feugiat. Morbi orci nulla,
        efficitur a justo eget, semper aliquam lorem. Vivamus convallis porta
        nunc vel finibus. Curabitur hendrerit varius arcu, eu dictum nibh
        venenatis eget. Mauris egestas velit nec felis hendrerit aliquam sit
        amet ut metus.
      </p>

      <p className={styles.paragrafo}>
        In eu malesuada mi. Fusce in bibendum leo, eu aliquam nisl. Fusce sit
        amet nibh ullamcorper purus tincidunt molestie id ut turpis. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Aliquam aliquet vehicula aliquet. Nullam hendrerit ut justo sit
        amet mattis. Praesent ultrices purus a sapien ullamcorper, et rutrum
        risus blandit. Morbi tempus lorem a purus aliquam, imperdiet egestas leo
        euismod. Aenean id fringilla diam. Vestibulum ligula nunc, aliquet et
        dolor ac, tincidunt tempor metus. Sed tincidunt viverra tortor, non
        accumsan metus blandit id. Mauris ullamcorper luctus dapibus. Aenean
        lacinia massa a leo tempor gravida.
      </p>

      <p className={styles.paragrafo}>
        Pellentesque porttitor sapien sit amet tellus vulputate pellentesque.
        Praesent suscipit leo in ex pulvinar rutrum. Nunc id magna a lectus
        cursus sollicitudin in id felis. Proin ultrices nulla non sagittis
        suscipit. Quisque dolor massa, mattis rutrum velit vel, posuere
        convallis dui. Integer dapibus dui arcu. Curabitur eleifend nibh vitae
        lacus ultrices accumsan.
      </p>
    </PostModelo>
  );
}
