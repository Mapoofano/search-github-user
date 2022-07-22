import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Card.module.scss';

const Card = ({ user }: any) => {
  return (
    <Link href="/profile/[username]" as={`profile/${user.login}`}>
      <div className={styles.card}>
        {user.avatar_url && (
          <Image
            src={user.avatar_url}
            alt={user.login}
            width={50}
            height={50}
            className={styles.cardImage}
          />
        )}
        <h4>{user.login.toUpperCase()}</h4>
      </div>
    </Link>
  );
};

export default Card;
