
import styles from './App.module.css'
import './global.css'

import { Banner } from '../src/assets/components/Banner';
import { Content } from './assets/components/Content';
import { SideBar } from './assets/components/Sidebar.jsx';
import { Header } from './assets/components/Header.jsx';


export function App() {
  return (
    <div>
      <div className={styles.container}>
        <SideBar />
        <Header />
        <Banner />
        <Content />
      </div>
    </div>
  )
}
