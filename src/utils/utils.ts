export const getCardId = (path: string): string => {
  const id: string | undefined = path.split('/').at(-1);
  return id ? id : '';
};
