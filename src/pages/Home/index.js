import Banner from '../../components/Banner';
import Header from '../../components/Header';
import Product from '../../components/product';
import Products from '../../components/Products';
import styles from './Home.module.css'

function Home () {
    return(
        <div className={styles.Home}>
            <Header />
            <Banner />
            <Products>
                <Product img={'portao-01.jpg'}  description={'portão branco comum'} />
            </Products>
        </div>    
        );
}

export default Home;
