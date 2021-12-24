export const insertDot = (value) => {
  const sValue = String(value);

  if (sValue.length <= 3) return sValue;

  return (
    insertDot(sValue.slice(0, sValue.length - 3)) +
    "," +
    sValue.slice(sValue.length - 3)
  );
};
