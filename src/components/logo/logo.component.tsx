import ROUTES from '@app/routes';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import useStyle from '@app/components/logo/logo.component.style';

const Logo: FC = () => {
  const { common, firstPart, lastPart } = useStyle();

  return (
    <Link to={ROUTES.HOME}>
      <div className={common}>
        <span className={firstPart}>netflix</span>
        <span className={lastPart}>roulette</span>
      </div>
    </Link>
  );
};

export default Logo;
