import { useColorToolStore } from '../hooks/useColorToolStore';

import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from "./ColorForm";

export const ColorTool = ({ colors: initialColors }) => {

  const { colors, appendColor, removeColor } = useColorToolStore(initialColors);

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} onDeleteColor={removeColor} />
      <ColorForm buttonText="Add Color" onSubmitForm={appendColor} />
    </>
  );
};
