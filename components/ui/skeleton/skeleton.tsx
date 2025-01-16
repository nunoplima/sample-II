import { cn } from "@/lib/utils";

export const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "h-12 animate-pulse bg-foreground/10 bg-foreground",
        className
      )}
      {...props}
    />
  );
};
