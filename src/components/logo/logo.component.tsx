import React, { FC } from 'react';
import useStyle from '@app/components/logo/logo.component.style';

const Logo: FC = () => {
  const { common, firstPart, lastPart } = useStyle();

  return (
    <div className={common}>
      <span className={firstPart}>netflix</span>
      <span className={lastPart}>roulette</span>
    </div>
  );
};

export default Logo;
