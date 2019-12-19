import {Reducer} from 'redux';
import createReducer from 'util/CreateReducer';

export enum RepositoryTypes {
  AddFavorite = '@repository/AddFavorite',
  RemoveFavorite = '@repository/RemoveFavorite',
}

export type Actions = {
  AddFavorite: {type: RepositoryTypes.AddFavorite; payload: any};
  RemoveFavorite: {type: RepositoryTypes.RemoveFavorite; payload: any};
};

export interface RepositoryState {
  data: any;
  error: any;
}

export const InitialState: RepositoryState = {
  data: {
    favorites: [],
  },
  error: undefined,
};

export const repositoryReducer: Reducer<RepositoryState> = createReducer(
  InitialState,
  {
    [RepositoryTypes.AddFavorite](
      state: RepositoryState,
      action: Actions['AddFavorite'],
    ) {
      state.data.favorites = [...state.data.favorites, action.payload];
      return state;
    },
    [RepositoryTypes.RemoveFavorite](
      state: RepositoryState,
      action: Actions['RemoveFavorite'],
    ) {
      state.data.favorites = state.data.favorites.filter((item: any) => {
        return action.payload.databaseId !== item.databaseId;
      });
      return state;
    },
  },
);

export function addFavorite(item: any) {
  return (dispatch: any) => {
    dispatch({
      type: RepositoryTypes.AddFavorite,
      payload: item,
    } as Actions['AddFavorite']);
  };
}

export function removeFavorite(item: any) {
  return (dispatch: any) => {
    dispatch({
      type: RepositoryTypes.RemoveFavorite,
      payload: item,
    } as Actions['RemoveFavorite']);
  };
}
