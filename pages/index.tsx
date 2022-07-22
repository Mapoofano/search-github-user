import { ReactElement, useEffect, useState } from 'react';
import Layout from '../components/layout';
import type { NextPageWithLayout } from './_app';
import styles from '../styles/Home.module.scss';
import Card from '../components/card';

const Home: NextPageWithLayout = () => {
  const [data, setData] = useState<any>([]);
  const [input, setInput] = useState<string>();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!input) return;
    const timeout = setTimeout(() => {
      setLoading(true);
      handleSearchUsername(input);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  const handleSearchUsername = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    console.log(data);
    if (!data) return;
    setData(data);
    setLoading(false);
  };

  const genUsersCards = (_user: any) => {
    if (isLoading) return <p>Loading...</p>;
    if (!_user) return <p>No user found</p>;

    if (_user.length !== 0) return <Card user={_user} />;
  };

  return (
    <section className={styles.homeContainer}>
      <div className={styles.homeSearch}>
        <label htmlFor="search-username">Enter Username</label>
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter username"
          id="search-username"
          type="text"
        />
      </div>
      <div>{genUsersCards(data)}</div>
    </section>
  );
};

// export async function getServerSideProps(context: string) {
//   const params = new URLSearchParams({
//     q: context,
//   });

//   const res = await fetch(`https://api.github.com/search/users?${params}`);
//   const data = await res.json();

//   return { props: { data } };
// }

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
