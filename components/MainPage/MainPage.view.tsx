import { Carousel } from 'antd';
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
          <h3></h3>df
        </div>
        <div>
          <h3></h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          illum quas mollitia enim explicabo unde beatae quam non, dolor cum
          nesciunt eveniet, excepturi corporis, doloribus quisquam animi neque!
          Debitis, assumenda.
        </div>
      </Carousel>
    </div>
  );
};
