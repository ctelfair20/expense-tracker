import { PropsWithChildren, createContext, useState } from "react";

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

  const dataContext = createContext({});

  const value = { budgets, setBudgets, categories, setCategories }

  return (
    <dataContext.Provider value={value}>
      {children}
    </dataContext.Provider>
  );
}

export default DataProvider;