import Header from '../../components/Header';
import styles from './gallery.module.css'

function Gallery () {
    return (
        <>
            <Header />
            <section className={styles.gallery}>
            <h1>Galeria</h1>
                <nav>
                    <span>Todos trabalhos</span>
                    <span>Portões</span>
                    <span>Bancos</span>
                    <span>Guarda corpos</span>
                    <span>Mão francesa</span>
                    <span>Para casa</span>
                </nav>
             </section>
        </>
    );
}

export default Gallery