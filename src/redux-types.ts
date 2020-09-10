declare module 'tabris-decorators' {

  export interface DefaultRootState {
    myString: string;
  }

  export interface DefaultActions {
    toggleString: {
      type: 'TOGGLE_STRING',
      checked: boolean
    };
  }

}
