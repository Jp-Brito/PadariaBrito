/* eslint-disable react/jsx-key */
import { Component } from 'react';
import styles from './Content.module.css';
import { ArrowRight, Heart } from "@phosphor-icons/react";
import { data, datalog } from '../utils/data.js'

export function Content() {

  class DynamicImage extends Component {
    render() {
      return <img src={this.props.name.img} alt={this.props.name.img} />;
    }
  }

  class DynamicImageP extends Component {
    render() {
      return <img src={'profile' +this.props.name.img + '.jpg'} alt={this.props.name.img + '.jpg'} />;
    }
  }

  return (
    <div className={styles.Content}>

      <div className={styles.store}>
        <div className={styles.header}>
          <h3 className={styles}>Minha listagem</h3>
          <div className={styles.headerarrow}>
            <p className={styles.primary}>Ver Tudo</p>
            <ArrowRight size={12} />
          </div>
        </div>

        <div className={styles.listitem}>
          {data.length &&
            data.map((value) => (
              
              <div key={value.nome} className={styles.item}>
                <Heart size={20} className={styles.icon} />
                <DynamicImage name={value}/>
                <h3>{value.nome}</h3>
              </div>
            ))}
        </div>
      </div>

      <div className={styles.log}>
        <div className={styles.header}>
          <h3>Atividade recente</h3>
          <div className={styles.headerarrow}>
            <p className={styles.primary}>Ver Tudo</p>
            <ArrowRight size={12} />
          </div>
        </div>
        <div className={styles.logContent} >

          {datalog.length &&
            datalog.map((value) => (
              <div key={value.nome} className={styles.logActivity}>
                <DynamicImageP name={value}/>
                <div>
                  <span>{value.nome}</span>
                  <small>{value.status}</small>
                </div>
                <p>{value.duratuin} Min Ago</p>
              </div>
            ))}

        </div>
      </div>
    </div>
  )
}
