import { getMainLayout } from '@layout/main.layout';
import { NextPageWithLayout } from './_app';
import { Main } from "@layout/views/main";


const Home: NextPageWithLayout = () => {
    return <Main />;
};

export default Home;
Home.getLayout = getMainLayout;
