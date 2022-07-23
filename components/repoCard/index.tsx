import React from 'react';
import styles from "./RepoCard.module.scss"


const RepoCard = ({ repo }: any) => {
  const { name, created_at, description, language, visibility, updated_at } =
    repo;
  return (
    <div className={styles.repoCard}>
      <h1>{name}</h1>
    </div>
  );
};

export default RepoCard;
