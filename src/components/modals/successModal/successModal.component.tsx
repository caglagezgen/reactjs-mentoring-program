import React, { FC } from 'react';
import useStyle from '@app/components/modals/successModal/successModal.component.style';

const SuccessModal: FC<{ onCancelClick: () => void }> = ({ onCancelClick }) => {
  const s = useStyle();

  return (
    <div className={s.background}>
      <span className={s.icon}>
        <span />
      </span>
      <h2 className={s.congratulations}>congratulations !</h2>
      <p className={s.message}>The movie has been added to the database successfully.</p>
      <button
        type="button"
        className={s.closeButton}
        onClick={onCancelClick}
      />
    </div>
  );
};

export default SuccessModal;
