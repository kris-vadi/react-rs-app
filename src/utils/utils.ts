export const getCardId = (path: string): string | undefined => {
  return path.split('/').at(-1);
};
