import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "solid" | "outlined" | "text";

export type ButtonColor = "conversion" | "primary" | "secondary";

export type ButtonSize = "xl" | "lg" | "md" | "sm";

export type ButtonIconPosition = "left" | "right";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: ButtonIconPosition;
  fullWidth?: boolean;
  className?: string;
  children?: ReactNode;
  additionalText?: string;
  minContent?: boolean;
}

/**
 * Button component with multiple variants and sizes
 */
export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  color = "conversion",
  size = "md",
  icon,
  iconPosition = "left",
  fullWidth = false,
  className = "",
  children,
  additionalText,
  disabled = false,
  minContent = true,
  ...rest
}) => {
  const buttonClasses = [
    styles.button,
    styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`],
    styles[size],
    icon
      ? size === "sm" || size === "md"
        ? styles.withIconSm
        : styles.withIcon
      : "",
    icon && iconPosition === "left" ? styles.iconLeft : "",
    icon && iconPosition === "right" ? styles.iconRight : "",
    fullWidth ? styles.fullWidth : "",
    minContent ? styles.minContent : "",
    disabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClasses} disabled={disabled} {...rest}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children && <span className={styles.buttonText}>{children}</span>}
      {additionalText && (
        <span className={styles.additionalText}>{additionalText}</span>
      )}
    </button>
  );
};

export default Button;
