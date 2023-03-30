import styles from "./Footer.module.scss";
import bhs from "../../images/Footer/bhs.svg";
import vk from "../../images/Footer/vk.svg";
import youtube from "../../images/Footer/youtube.svg";
import bear from "../../images/Footer/bear.svg";
import line from "../../images/Footer/line.svg";
import lineHorisontal from "../../images/Footer/lineHorisontal.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.links}>
          <a href="mailto:bear-assets@mail.ru" className={styles.mail}>
            bear-assets@mail.ru
          </a>

          <ul className={styles.social}>
            <li className={styles.social__item}>
              <a
                href="https://bearheadstudio.ru/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={bhs} alt="BHS" />
              </a>
            </li>
            <li className={styles.social__item}>
              <a
                href="https://vk.com/bear_head_studio"
                target="_blank"
                rel="noreferrer"
              >
                <img src={vk} alt="VK" />
              </a>
            </li>
            <li className={styles.social__item}>
              <a
                href="https://www.youtube.com/@BearHeadStudio"
                target="_blank"
                rel="noreferrer"
              >
                <img src={youtube} alt="YouTube" />
              </a>
            </li>
          </ul>
        </div>

        <img src={line} alt="line" className={styles.line} />
        <img
          src={lineHorisontal}
          alt="line"
          className={styles.lineHorisontal1}
        />

        <div className={styles.subscription}>
          <p>Подписаться на новости</p>

          <div className={styles.input__wrapper}>
            <input type="email" placeholder="Email" className={styles.input} />
            <button className={styles.subscribe_button}>Подписаться</button>
          </div>
        </div>

        <img src={line} alt="line" className={styles.line} />
        <img
          src={lineHorisontal}
          alt="line"
          className={styles.lineHorisontal2}
        />

        <div className={styles.copyright}>
          <div className={styles.logo}>
            <img src={bear} alt="bear" />
            <div>
              <p>Маркетплейс</p>
              <p>Ассетов</p>
            </div>
          </div>
          <div className={styles.copyright_text}>
            <p>Все права защищены</p>
            <a href="#!">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
