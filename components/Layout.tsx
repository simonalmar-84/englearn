import Nav from './Nav';
import styles from '../styles/Layout.module.css';
import Header from '../components/Header';
import Meta from './Meta';

export default function Layout({ children }: any) {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
}