import { useColorToolStoreContext } from '../contexts/colorToolStoreContext';

import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from "./ColorForm";

export const ColorTool = () => {

  const { colors, appendColor, removeColor } = useColorToolStoreContext();

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} onDeleteColor={removeColor} />
      <ColorForm buttonText="Add Color" onSubmitForm={appendColor} />
    </>
  );
};
