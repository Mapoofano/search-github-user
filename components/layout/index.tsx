import { ReactElement } from 'react';
import Footer from '../footer';
import styles from './Layout.module.scss';
// import Navbar from './navbar'``

type LayoutChildren = {
  children: ReactElement;
};

export default function Layout({ children }: LayoutChildren) {
  return (
    <div className={styles.container}>
      {/* <Navbar /> */}
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
