import { InputContainer } from "./style";

export const Input = ({ className, height = 30, ...rest }) => {
  return <InputContainer {...rest} className={className} height={height} />;
};
