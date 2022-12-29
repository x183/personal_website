import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
   return (
      <div className={styles.headerBox}>
         <Link href="/">Home</Link>
         <Link href="/errors">Side projects</Link>
         <Link href="/notes">Notes</Link>
      </div>
   );
};

export default Header;
