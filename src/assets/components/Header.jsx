import styles from './Header.module.css';
import { MagnifyingGlass, ChatCircle, Bell } from "@phosphor-icons/react"


export function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.titulo}>Bem-vindo a Bakery.</h1>
          <p>Olá anjo, bem vindo de volta! ♡</p>
        </div>

        <div className={styles.headerBusca}>
          <input type="text" name="" id="" placeholder="Buscar" />
          <MagnifyingGlass />
        </div>

        <div className={styles.headertips} >
          <div className={styles.headerIcon}>
            <ChatCircle size={23} />
          </div>
          <div className={styles.headerIcon}>
            <Bell size={23} />
          </div>
          <div className={styles.ImgProfile} >
            <a href="#"><img src="src/assets/imgs/profile4.jpg" alt="foto profile" /></a>
          </div>
        </div>
      </div>

    </div>
  )
}