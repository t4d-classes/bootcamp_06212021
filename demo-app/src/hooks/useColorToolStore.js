import { useList } from './useList';

export const useColorToolStore = (initialColors) => {

  const [colors, appendColor] = useList([...initialColors]);

  return {
    colors,
    appendColor,
  };

};