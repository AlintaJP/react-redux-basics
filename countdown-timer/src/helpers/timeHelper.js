export const twoDigits = (digits) => {
  const twoDigit = digits >= 10 ? digits : `0${digits}`;
  return twoDigit;
};

export const getMs = (settings) => {
  const { hours, minutes, seconds } = settings;
  return hours * 3600000 + minutes * 60000 + seconds * 1000;
};

export const getHours = (ms) => twoDigits(Math.floor((ms / (1000 * 60 * 60)) % 60));

export const getMinutes = (ms) => twoDigits(Math.floor((ms / (1000 * 60)) % 60));

export const getSeconds = (ms) => twoDigits(Math.floor((ms / 1000) % 60));
