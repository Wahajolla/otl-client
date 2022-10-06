
import Head from 'next/head';
import Image from 'next/image';
import { ReactElement } from 'react';
import MainPage from '../components/MainPage';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <MainPage></MainPage>
    </div>
  );
}

Home.getLayout = (page: ReactElement) => {};
