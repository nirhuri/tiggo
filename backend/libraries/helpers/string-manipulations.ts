export const capitalaizeFirstLetterFromString = (str: string): string => {
  const capitalaizedString = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalaizedString;
};
