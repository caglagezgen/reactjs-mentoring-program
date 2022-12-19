import { useStoreon } from 'storeon/react';
import React, { FC, useContext } from 'react';
import { ActionType } from '@app/store/store.interface';
import { ModalType } from '@shared/interfaces/coreModal.interface';
import { ModalContext } from '@shared/interfaces/coreModal.context';
import { useStyle } from '@app/components/modals/coreModal/coreModal.component.style';
import SuccessModal from '@app/components/modals/successModal/successModal.component';
import DeleteModal from '@app/components/modals/deleteMovieModal/deleteMovieModal.component';
import MovieDetailsModal from '@app/components/modals/movieDetailsModal/movieDetailsModal.component';

const CoreModal: FC = () => {
  const s = useStyle();
  const { dispatch } = useStoreon();
  const { chosenModal, setChosenModal } = useContext(ModalContext);
  let modal: JSX.Element;

  switch (chosenModal.type) {
    case ModalType.Delete:
      modal = (
        <DeleteModal
          onConfirmClick={() => {
            dispatch(ActionType.deleteMovie, chosenModal.movie.id);
            setChosenModal({ type: null });
          }}
          onCancelClick={() => setChosenModal({ type: null })}
        />
      );
      break;
    case ModalType.Success:
      modal = (
        <SuccessModal
          onCancelClick={() => setChosenModal({ type: null })}
        />
      );
      break;
    default:
      modal = (
        <MovieDetailsModal
          onConfirmClick={(movie) => {
            if (chosenModal.type === ModalType.Add) {
              dispatch(ActionType.addMovie, movie);
            }

            if (chosenModal.type === ModalType.Edit) {
              dispatch(ActionType.editMovie, movie);
            }

            setChosenModal({
              movie,
              type: chosenModal.type === ModalType.Add ? ModalType.Success : null,
              actionType: chosenModal.type,
            });
          }}
          onCancelClick={() => setChosenModal({ type: null })}
          modalDetails={chosenModal}
        />
      );
      break;
  }

  return (
    <section className={s.modalBackground}>{modal}</section>
  );
};

export default CoreModal;
