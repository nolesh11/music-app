import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  /* margin-bottom: -4px; */
`

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.red};
  margin-top: -20px;
  margin-bottom: 16px;
`

interface IStyledInputProps {
  $isError: boolean
}

export const StyledInput = styled.input<IStyledInputProps>`
  ${(props) => props.$isError && css`
    border-color: ${(props) => props.theme.colors.red};
  `}
  
`