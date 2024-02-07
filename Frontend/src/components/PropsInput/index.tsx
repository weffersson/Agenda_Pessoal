import { StyledInput } from './style';
import { UseFormRegisterReturn } from 'react-hook-form';

interface iInputProps {
  id?: string;
  type: string;
  placeholder: string;
  disabled?: boolean;
  label?: string;
  register?: UseFormRegisterReturn;
  inputVariation?: string;
  value?: string;
  defaultValue?: string;
  required: boolean;
}

const Input = ({
  id,
  type,
  placeholder,
  disabled,
  label,
  register,
  inputVariation,
  value,
  required,
  defaultValue,
}: iInputProps) => {
  return (
    <StyledInput inputVariation={inputVariation}>
      <div>
        <label htmlFor={id}>{label}</label>
      </div>
      <input
        value={value}
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        required={required}
        {...register}
      />
    </StyledInput>
  );
};

export default Input;
