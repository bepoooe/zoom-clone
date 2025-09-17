import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-xl border-2 border-brand-black-700 bg-brand-black-900 px-4 py-3 text-sm text-white ring-offset-brand-black-950 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-brand-black-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange-500 focus-visible:ring-offset-2 focus-visible:border-brand-orange-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-brand-black-600",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
