import { CustomInput, CustomLabel } from "./style";

const Input = ({
  register,
  errors,
  label,
  name,
  icon: Icon,
  onClick,
  className,
  ...rest
}) => {
  return (
    <>
      <CustomLabel>
        <p>{label}</p>
        {errors && <span>{errors}</span>}
        <CustomInput errors={!!errors} {...register(name)} {...rest} />
        <section className={className}>
          {Icon && <Icon onClick={onClick} />}
        </section>
      </CustomLabel>
    </>
  );
};

export default Input;
