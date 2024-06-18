import * as React from "react";
import { cn } from "@/lib/utils";

export interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="date"
        className={cn(
          "flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-[1rem] ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
DatePicker.displayName = "DatePicker";

export { DatePicker };
