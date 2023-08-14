/* eslint-disable react/no-unescaped-entities */
import styles from './Banner.module.css';
import video from '../imgs/video.mp4';
import cafe from '../imgs/027.png';
import { ArrowRight } from "@phosphor-icons/react";
export function Banner() {
  return (
    <section className={styles.bannerContainer}>
      <div className={styles.bannerVideo}>
        <h1>A Melhor Padaria para Você</h1>
        <p>"porque como as padarias, a vida também é doce!"</p>
        <div className={styles.btns}>
          <button className={styles.btnVideo}>Explore mais</button>
          <a className={styles.btnVideoT} href="/">Mais vendidos</a>
        </div>

        <div className={styles.videoDiv}>
          <video loop autoPlay muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className={styles.BannerStat}>
        <h2>Minha estatística</h2>
        <div className={styles.BannerStatRow}>
          <div>
            <p>Hoje</p>
            <p className={styles.BannerColorPink}>44 Pedidos</p>
          </div>
          <div>
            <p>Este mês</p>
            <p className={styles.BannerColorPink}>127 Pedidos</p>
          </div>
        </div>
        <div className={styles.BannerStatRow}>
          <p>Ir para o meu pedido</p>
          <ArrowRight size={13} />
        </div>
        <div className={styles.BannerImgStat}>
          <img src={cafe} alt="" />
        </div>
      </div>
    </section>
  )
}