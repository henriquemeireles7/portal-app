import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[800px] mx-auto px-4",
        className
      )}
      {...props}
    />
  )
} 