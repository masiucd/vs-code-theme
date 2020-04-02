/* eslint-disable react/prop-types */
import * as React from 'react';

import { StyledTitle, StyledH1, StyledH3 } from './Title.styled';
import { StyledLink } from '../Buttons';

interface Props {
  mainTitle: string;
  subTitle?: string;
  isCta? : boolean;
  ctaText? : string;
  path? : string;
}

const Title: React.FC<Props> = ({
  mainTitle, subTitle, isCta, ctaText, path,
}) => (
  <StyledTitle>
    <StyledH1>
      {mainTitle}
    </StyledH1>
    <StyledH3>
      {subTitle}
    </StyledH3>
    {isCta && (
      <StyledLink to={path || '/'}>
        {ctaText}
      </StyledLink>
    ) }
  </StyledTitle>
);
export default Title;
