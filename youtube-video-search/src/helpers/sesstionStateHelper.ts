export const HOME_STATE = 'homeState';

export const getSessionState = (stateName: string) => {
  const sessionState = sessionStorage.getItem(stateName);
  return sessionState && JSON.parse(sessionState);
};

export const setSesstionState = (key: string, item: object | null) => {
  if (typeof item === null) {
    return;
  }
  sessionStorage.setItem(key, JSON.stringify(item));
};
