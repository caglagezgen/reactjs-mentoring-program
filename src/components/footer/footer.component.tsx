import React, { FC } from 'react';
import useStyle from '@app/components/footer/footer.component.style';
import Logo from '@app/components/logo/logo.component';

const Footer: FC = () => {
  const { footer } = useStyle();

  return (
    <footer className={footer}>
      <Logo />
    </footer>
  );
};

export default Footer;
