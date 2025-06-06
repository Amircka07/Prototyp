export type InputProps = {
  type: "text" | "password" | "email" | "number";
  variant: "primary" | "secondary";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  name?: string;
  disabled?: boolean;
};