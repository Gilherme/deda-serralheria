import Header from '../../components/Header'
import styles from './pageNotFound.module.css'

function PageNotFound () {
    return(
        <>
          <Header />
          <section className={styles.PageNotFound}>
            <h1>Pagina não encontrada :( </h1>
          </section>
        </>
    );
}

export default PageNotFound;
