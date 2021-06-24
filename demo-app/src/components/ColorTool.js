import { useList } from '../hooks/useList';

import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from "./ColorForm";

export const ColorTool = ({ colors: initialColors }) => {

  const [colors, appendColor] = useList([...initialColors]);

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} />
      <ColorForm buttonText="Add Color" onSubmitForm={appendColor} />
    </>
  );
};
