import Image from 'next/image';
import React, { ReactElement } from 'react';
import Layout from '../../../components/layout';
import styles from './Profile.module.scss';

const Profile = ({ data }: any) => {
  const { login, name, bio, followers, following, avatar_url } = data;
   
  return (
    <article className={styles.profile}>
      <section className={styles.profileInfo}>
        {avatar_url && (
          <Image
            src={avatar_url}
            alt={login}
            width={400}
            height={400}
            className={styles.profileAvatar}
          />
        )}
        {login && <h1>{login}</h1>}
        {name && <h4>{name}</h4>}
        {bio && <p>{bio}</p>}

        <div>
          <span>followers: {followers}</span>
          <span> . </span>
          <span>following: {following}</span>
        </div>
      </section>
      <section className={styles.repos}></section>
    </article>
  );
};

export default Profile;

export async function getServerSideProps(context: any) {
  const res = await fetch(
    `https://api.github.com/users/${context.params.username}`
  );
  const data = await res.json();
  return { props: { data } };
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
