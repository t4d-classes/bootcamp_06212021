import { useColorList } from '../hooks/useColorList';

import { ToolHeader } from '../components/ToolHeader';
import { ColorList } from '../components/ColorList';

export const ColorListContainer = () => {

  const { colors, deleteColor } = useColorList();

  return (
    <>
      <ToolHeader headerText="Color List" />
      <ColorList colors={colors} onDeleteColor={deleteColor} />
    </>
  );
};
