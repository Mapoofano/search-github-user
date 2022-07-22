import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Card.module.scss';

const Card = ({ user }: any) => {
  console.log(user);
  return (
    <Link href="/profile/[username]" as={`profile/${user.login}`}>
      <div className={styles.card}>
        {user.avatar_url && (
          <Image
            src={user.avatar_url}
            alt={user.login}
            width={100}
            height={100}
            className={styles.cardImage}
          />
        )}
        <h4>Username: {user.login}</h4>
        <h4>Name: {user.name}</h4>
        <span>Followers: {user.followers}</span>
        <span>Following: {user.following}</span>
      </div>
    </Link>
  );
};

export default Card;
