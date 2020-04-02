import * as React from 'react';
import Title from '../components/styled/title/Title';

interface Props {

}

const NotFound: React.FC<Props> = () => (
  <>
    <Title mainTitle="oooops 💩🧘🏽‍♀️🙈" subTitle="Page not found" isCta ctaText="Back Home" path="/" />
  </>
);
export default NotFound;
