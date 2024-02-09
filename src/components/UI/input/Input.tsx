import React, { forwardRef } from "react";
import { ErrorMessage, InputContainer, StyledInput } from "./Input.style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  isError: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type, errorMessage, isError, ...props }, ref) => {
    return (
      <InputContainer>
        <StyledInput
          ref={ref}
          placeholder={placeholder}
          type={type}
          $isError={isError}
          {...props}
        />
        {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </InputContainer>
    );
  }
);
