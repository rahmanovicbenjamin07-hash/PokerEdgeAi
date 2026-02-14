import * as React from "react"

import { cn } from "~/lib/utils"

function EmailInput({ className,  ...props }: React.ComponentProps<"input">) {
  return (
      
      <div className="lg:w-109.5 w-66.5"> 
        <input
          type="email"
          data-slot="input"
          name="email"
          placeholder="Enter Your Email" 
          className={cn(
            
            "file:text-foreground selection:bg-primary selection:text-primary-foreground/50 dark:bg-input/30 h-10.25 w-full min-w-0 rounded-full px-4 py-4 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-white",
            "focus:outline-none",           
            "bg-transparent border-primary border",            
            "placeholder:text-[#9A9CA0] placeholder:font-light placeholder:text-[13px] text-center leading-5 font-space",            
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            
            className
          )}
          {...props}
        />
      </div>
    );
}

export { EmailInput }
