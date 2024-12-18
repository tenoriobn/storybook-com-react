import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  border: 0;
  padding: 8px 14px;
  transition: 0.3s;
  
  ${({ theme, variant }) => `
    background-color: ${theme.colors[variant].main};
    color: ${theme.colors[variant].text};

    &:hover {
      background-color: ${theme.colors[variant].light};
    }

    &:focus {
      background-color: ${theme.colors[variant].dark};
    }
  `}
`;

interface ButtonProps {
  /** Essa prop é baseada nas opções de cores que temos no nosso tema, confira na página do tema para mais infos */
  variant?: 'primary' | 'accent';
  disabled?: boolean;
    /** Ess onClick tem integração mágica com eventos... */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}
export default function Button({ children, ...props }: ButtonProps) {
  return (
    <StyledButton
      {...props}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  disabled: false,
  variant: 'primary'
}
