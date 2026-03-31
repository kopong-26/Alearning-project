import type { ReactNode } from "react";

interface HeaderProps {
  className?: string;
  children?: ReactNode;
  disabled?: boolean
}

export function BaseButton({children, className= "", disabled}: HeaderProps){
    return <button type="button" className={`px-4 py-1.25 h-8 text-sm border border-main-contrast 
            rounded-sm cursor-pointer disabled:cursor-default shrink-0 grow-0 ${className}`}
            disabled={disabled}>
                {children}
            </button>
}
