import React, { ReactElement } from 'react';
import Layout from '../../../components/layout';

const Profile = ({ data }: any) => {
  console.log(data);
  return <div>Profile</div>;
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
