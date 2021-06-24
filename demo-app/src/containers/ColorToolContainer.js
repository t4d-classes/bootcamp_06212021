import { useColorToolStoreContext } from '../contexts/colorToolStoreContext';

import { ToolHeader } from '../components/ToolHeader';
import { ColorList } from '../components/ColorList';
import { ColorForm } from "../components/ColorForm";

export const ColorToolContainer = () => {

  const { colors, appendColor, removeColor } = useColorToolStoreContext();

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} onDeleteColor={removeColor} />
      <ColorForm buttonText="Add Color" onSubmitForm={appendColor} />
    </>
  );
};
