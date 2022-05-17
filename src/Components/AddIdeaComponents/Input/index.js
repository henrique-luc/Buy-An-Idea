import { InputContainer } from "./style";

export const Input = ({ register, name, className, height = 30, ...rest }) => {
  return (
    <InputContainer
      {...register(name)}
      {...rest}
      className={className}
      height={height}
    />
  );
};
