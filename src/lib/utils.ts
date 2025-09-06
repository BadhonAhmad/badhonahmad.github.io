import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getColorClasses(color: string) {
  const colorMap = {
    purple: {
      bg: "bg-purple-600",
      text: "text-purple-400",
      border: "border-purple-400"
    },
    blue: {
      bg: "bg-blue-600",
      text: "text-blue-400",
      border: "border-blue-400"
    },
    green: {
      bg: "bg-green-600",
      text: "text-green-400",
      border: "border-green-400"
    },
    orange: {
      bg: "bg-orange-600",
      text: "text-orange-400",
      border: "border-orange-400"
    }
  };
  
  return colorMap[color as keyof typeof colorMap] || colorMap.purple;
}
