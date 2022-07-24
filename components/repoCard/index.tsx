import Link from 'next/link';
import React from 'react';
import styles from './RepoCard.module.scss';

const RepoCard = ({ repo }: any) => {
  const { name, description, language, html_url } = repo;

  console.log(repo);
  return (
    <a
      href={html_url}
      target="_blank"
      rel="noreferrer"
      className={styles.repoCard}
    >
      <h4>{name}</h4>
      <p>{description}</p>
      <span>{language}</span>
    </a>
  );
};

export default RepoCard;
