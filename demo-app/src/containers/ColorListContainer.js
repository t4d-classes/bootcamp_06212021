import { useColorToolStoreContext } from '../contexts/colorToolStoreContext';

import { ToolHeader } from '../components/ToolHeader';
import { ColorList } from '../components/ColorList';

export const ColorListContainer = () => {

  const { colors, removeColor } = useColorToolStoreContext();

  return (
    <>
      <ToolHeader headerText="Color List" />
      <ColorList colors={colors} onDeleteColor={removeColor} />
    </>
  );
};
