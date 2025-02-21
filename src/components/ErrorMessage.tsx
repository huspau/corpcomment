type ErrorMessageProp = {
  message: string;
};

export default function ErrorMessage({ message }: ErrorMessageProp) {
  return <div>{message}</div>;
}
