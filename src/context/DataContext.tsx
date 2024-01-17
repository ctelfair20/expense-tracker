import { createContext } from 'react'

export type Budget = {
  id: number,
  name: string,
  total: number,
}

export type Expense = {
  id: number,
  category: string | "Other",
  name: string,
  cost: number,
  purchasedDate: Date
}

export type Category = {
  id: number,
  name: string | "Other",
  expenses: Expense[]
}

export type DataContent = {
  budgets: Budget[]
  setBudgets: (budget: Budget[]) => void
  categories: Category[]
  setCategories: (category: Category[]) => void
}

// This typing (Record<string, never>) represents an empty object
export const DataContext = createContext<DataContent | Record<string, never>>({});