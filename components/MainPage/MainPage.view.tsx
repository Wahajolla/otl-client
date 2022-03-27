import { Carousel } from 'antd';
import Image from 'next/image';
import { FC } from 'react';
import styles from './MainPage.module.scss';

export const MainPage: FC = () => {
  return (
    <div>
      <Carousel
        autoplay
        className={styles.container}
        dots={{ className: styles.dots }}
      >
        <div>
          <div className={styles.carouselItem}>
            <div className={styles.imagecontainer}>
              <Image
                className={styles.fitImage}
                src={'/../public/images/parapet.png'}
                layout={'fill'}
                objectFit={'contain'}
              />
            </div>

            <div className={styles.description}>
              <div className={styles.backimg}></div>
              <h1 className={styles.caption}>Гибка металла</h1>
              <ul>
                <li>Отливы</li>
                <li>Коньки</li>
                <li>Ендовы</li>
                <li>Ветровые планки</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div>
          <div className={styles.carouselItem}>
            <div className={styles.imagecontainer}>
              <Image
                className={styles.fitImage}
                src={'/../public/images/metallo2.png'}
                layout={'fill'}
                //objectFit={'contain'}
              />
            </div>

            <div className={styles.description}>
              <div className={styles.backimg}></div>
              <h1 className={styles.caption}>Кровля</h1>
              <ul>
                <li>Металлочерепица</li>
                <li>Мягкая черепица</li>
                <li>Еврошифер Ondura</li>
                <li>Профнастил</li>
              </ul>
            </div>
          </div>
        </div> */}
      </Carousel>
    </div>
  );
};
