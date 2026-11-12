// shadcn-style button: two variants, 44px tall, steps 1px on hover and presses back on click.
const variants = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary:
    "border border-border bg-background text-foreground hover:border-foreground/40 hover:bg-background-alt",
};

export default function Button({ as: Tag = "a", variant = "primary", className = "", ...props }) {
  return (
    <Tag
      className={`inline-flex h-11 items-center justify-center gap-2 rounded px-5 text-[15px] font-medium transition-[background-color,border-color,transform] duration-150 hover:-translate-y-px active:translate-y-px ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
