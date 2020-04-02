import * as React from 'react';
import Title from '../components/styled/title/Title';

interface Props {

}

const HomePage: React.FC<Props> = () => (
  <>
    <Title mainTitle="Welcome" subTitle="Users List" isCta ctaText="users" path="/users" />
  </>
);
export default HomePage;
