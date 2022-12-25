import { createStoreon } from 'storeon';
import modules from '@app/store/modules';
import { IState, IEvents } from '@app/store/store.interface';

const store = createStoreon<IState, IEvents>(modules);

export default store;
