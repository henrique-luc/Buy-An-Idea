import { InputContainer } from "./style";

export const InputBottom = ({ register, name, className, height, ...rest }) => {
  return <InputContainer {...register(name)} {...rest} className={className} />;
};
