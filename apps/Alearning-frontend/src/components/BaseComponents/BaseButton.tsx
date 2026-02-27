import type { ReactNode } from "react";

interface HeaderProps {
  className?: string;
  children?: ReactNode;
}

export function BaseButton({children, className= ""}: HeaderProps){
    return <button type="button" className={`px-4 py-1.25 h-8 text-sm border border-main-contrast 
            rounded-sm cursor-pointer shrink-0 grow-0 ${className}`}>
                {children}
            </button>
}
