import { TextareaContainer } from "./style";

export const Textarea = ({
  register,
  name,
  className,
  height = 53,
  ...rest
}) => {
  return (
    <TextareaContainer
      {...register(name)}
      {...rest}
      className={className}
      height={height}
    />
  );
};
