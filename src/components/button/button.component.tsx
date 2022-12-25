import React, { FC } from 'react';
import cN from 'classnames';
import useStyle from '@app/components/button/button.component.style';
import { IButton, ButtonType, BUTTON_TEXT } from '@app/components/button/button.interface';

const Button: FC<IButton> = ({ type, isDisabled, onButtonClick }) => {
  const { button, ...classes } = useStyle();
  const buttonClassName = ButtonType[type];

  return (
    <input
      type="button"
      className={cN(button, classes[buttonClassName], { disabled: isDisabled })}
      value={BUTTON_TEXT[type]}
      onClick={onButtonClick}
      disabled={isDisabled}
    />
  );
};

export default Button;
