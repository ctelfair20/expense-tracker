import { PropsWithChildren, useState } from 'react'
import { DataContext, Budget, Category } from './DataContext'

//This is how to properly type the children prop
const DataProvider = ({ children }: PropsWithChildren) => {

  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [categories, setCategories] = useState<Category[]>([{
    id: 0,
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