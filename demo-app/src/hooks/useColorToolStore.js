import { useList } from './useList';

export const useColorToolStore = (initialColors) => {

  const [ colors, appendColor, , removeColor ] = useList([...initialColors]);

  return {
    colors,
    appendColor,
    removeColor,
  };

};