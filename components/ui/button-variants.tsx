import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#F7E264] text-black hover:bg-[#F7E264]/90",
        secondary: "bg-[#90B873] text-white hover:bg-[#90B873]/90 border-2 border-[#F7E264]",
      },
      size: {
        default: "h-10 px-6 py-2",
        lg: "h-12 px-8 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

