import { PropsWithChildren, createContext, useState } from "react";

export const DataContext = createContext({});

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

//This is how to properly type the children prop
const DataProvider = ({ children }: PropsWithChildren) => {

  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [categories, setCategories] = useState<Category[]>([{
    id: 1,
    name: "Other",
    expenses: []
  }]);

  const value = { budgets, setBudgets, categories, setCategories }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider