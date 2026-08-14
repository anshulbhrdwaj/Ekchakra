import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-IN").format(num);
}

export function formatCurrency(amount: number, currency: "INR" | "USD" | "EUR" | "AED" = "USD"): string {
  const symbols = {
    INR: "₹",
    USD: "$",
    EUR: "€",
    AED: "AED ",
  };
  return `${symbols[currency]}${new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(amount)}`;
}
