import { InputContainer } from "./style";

export const Input = ({ register, name, height = 30, ...rest }) => {
  return <InputContainer {...register(name)} {...rest} height={height} />;
};
