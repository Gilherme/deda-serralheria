import { Link } from 'react-router-dom';
import styles from './header.module.css'

function Header () {
    return(
        <header className={styles.header}>
            <Link to="/">  <h1>JN Serralheria</h1></Link>

            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/produtos">Produtos</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/localizacao">Localização</Link>
                <Link to="/galeria">Galeria</Link>
            </nav>
        </header>    
        );
}

export default Header;
