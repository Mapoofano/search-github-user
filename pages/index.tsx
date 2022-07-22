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
    const params = new URLSearchParams({
      q: userName,
    });
    const res = await fetch(`https://api.github.com/search/users?${params}`);
    const data = await res.json();
    if (!data) return;
    setData(data);
    setLoading(false);
  };

  const genUsersCards = (_list: any) => {
    if (isLoading) return <p>Loading...</p>;
    if (_list.total_count === 0) return <p>No user found</p>;
    if (_list.items && _list.items !== 0)
      return _list.items.map((user: any) => <Card key={user.id} user={user} />);
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
      <div className={styles.userList}>{genUsersCards(data)}</div>
    </section>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
