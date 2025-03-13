import React from 'react';
import { ButtonTypes } from '@monorepo-real-estate/shared-types';

export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  className = '',
  disabled,
  ...props
}: {
  children?: React.ReactNode;
  variant?: ButtonTypes;
  size?: string;
  isLoading?: boolean;
  className?: string;
  disabled?: boolean;
}) {
  const baseStyles = `relative font-semibold rounded-lg transition-all duration-300
                      flex items-center justify-center gap-2 overflow-hidden`;

  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-5 py-2 text-base',
    large: 'px-7 py-3 text-lg',
  };

  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    success: 'bg-green-500 text-white hover:bg-green-600',
    outline: 'border border-gray-500 text-gray-700 hover:bg-gray-100',
    info: 'bg-amber-400 text-white hover:bg-amber-500',
  };

  // ✅ FIX: Explicitly cast `variant` as a key
  const selectedStyle = variantStyles[variant as keyof typeof variantStyles];
  const selectedSize = sizeStyles[size as keyof typeof sizeStyles];

  return (
    <button
      type="button"
      className={`${baseStyles} ${selectedSize} ${selectedStyle} ${className}`}
      disabled={disabled || isLoading}
      aria-disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
      ) : (
        children
      )}
    </button>
  );
}
