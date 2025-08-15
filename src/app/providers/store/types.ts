import { configureStore } from '@reduxjs/toolkit';

export type RootState = ReturnType<ReturnType<typeof configureStore>['getState']>;
export type AppDispatch = ReturnType<ReturnType<typeof configureStore>['dispatch']>;