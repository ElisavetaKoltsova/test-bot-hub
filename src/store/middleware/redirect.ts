import {Middleware} from 'redux';
import { Action } from '../action';
import { rootReducer } from '../root-reducer';
import browserHistory from '../../browser-history';
import { PayloadAction } from '@reduxjs/toolkit';

type Reducer = ReturnType<typeof rootReducer>;

// export const redirect: Middleware<unknown, Reducer> =
//   () =>
//     (next) =>
//       (action: PayloadAction<string>) => {
//         if (action.type === Action.REDIRECT_TO_ROUTE) {
//           browserHistory.push(action.payload);
//         }

//         return next(action);
//       };