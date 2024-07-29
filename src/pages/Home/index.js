import Banner from '../../components/Banner';
import Header from '../../components/Header';
import styles from './Home.module.css'

function Home () {
    return(
        <div className={styles.Home}>
            <Header />
            <Banner />
        </div>    
        );
}

export default Home;
