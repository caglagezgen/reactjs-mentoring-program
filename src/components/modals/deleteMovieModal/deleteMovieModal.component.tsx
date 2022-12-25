import React, { FC } from 'react';
import Button from '@app/components/button/button.component';
import { IModal } from '@shared/interfaces/coreModal.interface';
import { ButtonType } from '@app/components/button/button.interface';
import useStyle from '@app/components/modals/deleteMovieModal/deleteMovieModal.component.style';

const DeleteModal: FC<IModal> = ({ onCancelClick, onConfirmClick }) => {
  const s = useStyle();

  return (
    <div className={s.modalTile}>
      <h2>delete movie</h2>
      <p>Are you sure you want to delete this movie?</p>
      <div className={s.buttonContainer}>
        <Button
          type={ButtonType.confirm}
          onButtonClick={onConfirmClick}
        />
      </div>
      <button
        type="button"
        className={s.closeButton}
        onClick={onCancelClick}
      />
    </div>
  );
};

export default DeleteModal;
