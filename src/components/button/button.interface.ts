export enum ButtonType {
  add = 'add',
  backToHome = 'backToHome',
  confirm = 'confirm',
  reset = 'reset',
  search = 'search',
  submit = 'submit',
}

export const BUTTON_TEXT = {
  add: '+ add movie',
  backToHome: 'go back to home',
  confirm: ButtonType.confirm,
  reset: ButtonType.reset,
  search: ButtonType.search,
  submit: ButtonType.submit,
};

export interface IButton {
  type: ButtonType,
  onButtonClick?: () => void,
  isDisabled?: boolean,
}
