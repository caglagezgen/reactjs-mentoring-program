import { IMovie } from '@shared/interfaces/movies.model';
import { IModalContext } from '@shared/interfaces/coreModal.context';

export enum ModalType {
  Add = 'add',
  Delete = 'delete',
  Edit = 'edit',
  Success = 'success',
}

export interface IModal {
  onConfirmClick?: (movie?: IMovie) => void;
  onCancelClick?: () => void;
  modalDetails?: IModalContext;
}
