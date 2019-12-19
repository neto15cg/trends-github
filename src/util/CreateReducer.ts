import produce from 'immer';

export default function createReducer(initialState: any, handlers: any): any {
  return (state: any = initialState, action: { type: string; payload?: any }): any => {
    const handler = handlers[action.type];
    if (!handler) {
      return state;
    }
    return produce(state, (draft: any) => handler(draft, action));
  };
}
