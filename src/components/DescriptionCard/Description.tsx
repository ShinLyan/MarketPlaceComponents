import React from "react";
import styles from "../../styles/Description.module.scss";
import LikeButton from "./LikeButton.tsx";

const Description = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.description_wrapper}>
        <div className={styles.headings}>
          <div>Автор:</div>
          <div>Дата публикации:</div>
          <div>Размер файла:</div>
          <div>Версии движка:</div>
          <div>Платформы:</div>
        </div>
        <div className={styles.values}>
          <div>DEKOGON STUDIOS</div>
          <div>21.12.2022</div>
          <div>100 МБ</div>
          <div>Unreal Engine, Unity</div>
          <div>Windows, Linux</div>
        </div>
      </div>
      {/* <table className={styles.table}>
        <tbody>
          <tr>
            <td>Автор:</td>
            <td>DEKOGON STUDIOS</td>
          </tr>
          <tr>
            <td>Дата публикации:</td>
            <td>21.12.2022</td>
          </tr>
          <tr>
            <td>Размер файла:</td>
            <td>100 МБ</td>
          </tr>
          <tr>
            <td>Версии движка:</td>
            <td>Unreal Engine, Unity</td>
          </tr>
          <tr>
            <td>Платформы:</td>
            <td>Windows, Linux</td>
          </tr>
        </tbody>
      </table> */}
      <LikeButton />
    </div>
  );
};

export default Description;
