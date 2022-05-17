import { InputContainer } from "./style";

export const Input = ({ height = 30, ...rest }) => {
  return <InputContainer {...rest} height={height} />;
};
