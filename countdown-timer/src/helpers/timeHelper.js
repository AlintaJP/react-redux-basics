export const formatToTwoDigits = (digits) => {
  const twoDigit = digits >= 10 ? digits : `0${digits}`;
  return twoDigit;
};

export const getTotalSeconds = (settings) => {
  const { hours, minutes, seconds } = settings;
  return hours * 3600 + minutes * 60 + seconds;
};

export const getHours = (secs) => formatToTwoDigits(Math.floor((secs / (60 * 60)) % 60));

export const getMinutes = (secs) => formatToTwoDigits(Math.floor((secs / 60) % 60));

export const getSeconds = (secs) => formatToTwoDigits(Math.floor(secs % 60));
