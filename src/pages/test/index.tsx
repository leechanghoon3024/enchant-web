import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@styles/Home.module.css';
import { NextPageWithLayout } from '../_app';
import MainPage from '@layout/views/main/main.page';
import { getMainLayout } from '@layout/main.layout';
import { Main3Section } from '@layout/views/main/main.3.section';

const TestPage: NextPageWithLayout = () => {
    return <Main3Section />;
};

export default TestPage;

TestPage.getLayout = getMainLayout;
