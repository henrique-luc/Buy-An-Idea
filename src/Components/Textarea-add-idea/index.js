import { TextareaContainer } from "./style";

export const Textarea = ({ className, height = 53, ...rest }) => {
  return <TextareaContainer {...rest} className={className} height={height} />;
};
