"use client";

import { createContext, useContext, useMemo, useState } from "react";

export type QuoteCartItem = {
  id: string;
  name: string;
  category: string;
  fabric: string;
  moq: number;
  leadTimeWeeks: number;
};

type QuoteCartValue = {
  items: QuoteCartItem[];
  add: (item: QuoteCartItem) => void;
  remove: (id: string) => void;
  clear: () => void;
  has: (id: string) => boolean;
};

const QuoteCartContext = createContext<QuoteCartValue | null>(null);

export function QuoteCartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<QuoteCartItem[]>([]);

  const value = useMemo<QuoteCartValue>(
    () => ({
      items,
      add: (item) =>
        setItems((prev) =>
          prev.some((existing) => existing.id === item.id) ? prev : [...prev, item],
        ),
      remove: (id) => setItems((prev) => prev.filter((item) => item.id !== id)),
      clear: () => setItems([]),
      has: (id) => items.some((item) => item.id === id),
    }),
    [items],
  );

  return <QuoteCartContext.Provider value={value}>{children}</QuoteCartContext.Provider>;
}

export function useQuoteCart() {
  const ctx = useContext(QuoteCartContext);
  if (!ctx) throw new Error("useQuoteCart must be used within QuoteCartProvider");
  return ctx;
}
