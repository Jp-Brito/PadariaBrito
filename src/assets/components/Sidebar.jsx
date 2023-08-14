import { Timer, Bicycle, Compass, Trophy, ChartPie, TrendUp, UserSquare, CreditCard } from "@phosphor-icons/react";

import styles from './Sidebar.module.css';

export function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoDiv}><a href="/">
        <img src="src/assets/imgs/logo.png" alt="" /></a>
        <h1>Bakery.</h1>
      </div>

      <div className={styles.QuickMenu}>
        <h3>MENU RÁPIDO</h3>
        <div className={styles.QuickMenuLi}>
          <p className={styles.outline}><Timer size={15} /> Painel</p>
          <p className={styles.outline}><Bicycle size={15} /> Minhas Ordens</p>
          <p className={styles.outline}><Compass size={15} /> Explorar</p>
          <p className={styles.outline}><Trophy size={15} /> Produtos</p>
        </div>

        <h3>CONFIGURAÇÕES</h3>
        <div className={styles.QuickMenuLi}>
          <p className={styles.outline}><ChartPie size={15} /> Charts</p>
          <p className={styles.outline}><TrendUp size={15} /> Tendências</p>
          <p className={styles.outline}><UserSquare size={15} /> Contato</p>
          <p className={styles.outline}><CreditCard size={15} /> Cobrança</p>
        </div>
      </div>

      <div className={styles.help}>
        <h4>Centro de ajuda</h4>
        <p>Tendo um problema? Basta ligar com
          Nossa equipe de especialistas!</p>
        <button>
          Ir para a Ajuda</button>
      </div>
    </div>
  )
}