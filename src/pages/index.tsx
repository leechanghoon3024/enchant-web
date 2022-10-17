import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@styles/Home.module.css';
import { getMainLayout } from '@layout/main.layout';
import { NextPageWithLayout } from './_app';
import MainPage from '@layout/views/main/main.page';

const Home: NextPageWithLayout = () => {
    return <MainPage />;
};

export default Home;
Home.getLayout = getMainLayout;
