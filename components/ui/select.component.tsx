import * as React from "react";

import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        className={cn(
          "flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-[1rem] ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    );
  }
);
Select.displayName = "Select";

export interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {}

const Option = ({ className, children, ...props }: OptionProps) => {
  return (
    <option
      className={cn(
        "text-[1rem] font-medium",
        className
      )}
      {...props}
    >
      {children}
    </option>
  );
};

Option.displayName = "Option";

export { Select, Option };