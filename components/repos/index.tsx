import React, { useEffect, useState } from 'react';
import RepoCard from '../repoCard';
import styles from './Repos.module.scss';
import axios from 'axios';
import Router, { withRouter } from 'next/router';
import useSWR from 'swr';

const Repos = ({ login, public_repos }: any) => {
  const [pageIndex, setPageIndex] = useState(1);

  const maxPage = Math.ceil(public_repos / 6);
  const fetcher = (...args: any) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR(
    `https://api.github.com/users/${login}/repos?sort="created"&page=${pageIndex}&per_page=6`,
    fetcher
  );

  const handleGenerateRepos = (_data: any, _error: any) => {
    if (_error) return <div>failed to load</div>;
    if (!_data) return <div>loading...</div>;

    return _data.map((repo: any) => <RepoCard key={repo.id} repo={repo} />);
  };

  return (
    <>
      <section className={styles.repos}>
        <div className={styles.reposContainer}>
          {handleGenerateRepos(data, error)}
        </div>
        <div className={styles.reposPagination}>
          <button
            className={pageIndex <= 1 ? 'disable' : ''}
            onClick={() => setPageIndex(pageIndex - 1)}
          >
            {'<< Prev'}
          </button>
          <button
            className={pageIndex >= maxPage ? 'disable' : ''}
            onClick={() => setPageIndex(pageIndex + 1)}
          >
            {'Next >>'}
          </button>
        </div>
      </section>
    </>
  );
};

export default Repos;
