import { useColorToolStoreContext } from '../contexts/colorToolStoreContext';

import { ToolHeader } from '../components/ToolHeader';
import { ColorForm } from "../components/ColorForm";

export const ColorFormContainer = () => {

  const { appendColor } = useColorToolStoreContext();

  return (
    <>
      <ToolHeader headerText="Color Form" />
      <ColorForm buttonText="Add Color" onSubmitForm={appendColor} />
    </>
  );
};
