const handleError = (e: Error) => {
  // any error handling/logging here
  // eslint-disable-next-line no-console
  console.error(e);
  alert(e); // killer feature %)
};

export default handleError;
