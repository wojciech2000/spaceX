export const convertUnixToLacalDate = (date: string): string => {
  const milliseconds = +date * 1000;
  const dateObject = new Date(milliseconds);

  const localeDateFormat = dateObject.toLocaleString();

  return localeDateFormat;
};
