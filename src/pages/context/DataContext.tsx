import { createContext } from "react";

type Budget = {
  id: number,
  name: string,
  total: number,
}

type Expense = {
  id: number,
  category: string | "Other",
  name: string,
  cost: number,
  purchasedDate: Date
}

type Category = {
  id: number,
  name: string | "Other",
  expenses: Expense[]
}

type DashboardData = {
  categories: Category[],
  budgets: Budget[]
}

const DataProvider = () => {
  const dataContext = createContext<DashboardData | null>(null)





  return (
    <></>
  );
}

export default DataProvider;