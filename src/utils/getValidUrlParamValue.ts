export const getValidUrlParamValue = (value: string | undefined | null) => {
  if (
    typeof value === 'string' &&
    (value === 'null' || value === 'undefined' || value === '0')
  ) {
    return null;
  }
  return value;
};
