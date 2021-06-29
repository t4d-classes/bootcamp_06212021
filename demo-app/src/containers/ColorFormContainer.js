import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import { createAddColorAction } from '../actions/color-tool';

import { ToolHeader } from '../components/ToolHeader';
import { ColorForm } from "../components/ColorForm";

export const ColorFormContainer = () => {

  const action = bindActionCreators({
    onSubmitForm: createAddColorAction,
  }, useDispatch());

  return (
    <>
      <ToolHeader headerText="Color Form" />
      <ColorForm buttonText="Add Color" {...action} />
    </>
  );
};
