import React, { useEffect, useState } from 'react';
import RepoCard from '../repoCard';
import styles from './Repos.module.scss';
import axios from 'axios';
import Router, { withRouter } from 'next/router';
import useSWR from 'swr';

const Repos = ({ login, public_repos }: any) => {
  const [pageIndex, setPageIndex] = useState(1);

  const maxPage = Math.ceil(public_repos / 6);
  console.log(maxPage);
  const fetcher = (...args: any) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR(
    `https://api.github.com/users/${login}/repos?sort="created"&page=${pageIndex}&per_page=6`,
    fetcher
  );

  console.log({ data, error });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <section className={styles.repos}>
      {data.map((repo: any) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}

      <button
        disabled={pageIndex <= 1 ? true : false}
        onClick={() => setPageIndex(pageIndex - 1)}
      >
        Previous
      </button>
      <button
        disabled={pageIndex >= maxPage ? true : false}
        onClick={() => setPageIndex(pageIndex + 1)}
      >
        Next
      </button>
    </section>
  );
};

export default Repos;
