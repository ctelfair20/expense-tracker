export const budgets = [
  {
    id: 1,
    name: "Monthly Budget",
    total: 1500.0,
  },
  {
    id: 2,
    name: "Vacation Fund",
    total: 500.0,
  },
  // Add more budgets as needed
];

export const categories = [
  {
    id: 1,
    name: 'Food',
    expenses: [
      {
        id: 101,
        category: "Food",
        name: "Groceries",
        cost: 50.0,
        purchasedDate: new Date("2024-01-16"),
      },
    ]
  },

  {
    id: 2,
    name: 'Utilities',
    expenses: [
      {
        id: 102,
        category: "Utilities",
        name: "Electricity Bill",
        cost: 80.0,
        purchasedDate: new Date("2024-01-15"),
      },
      {
        id: 103,
        category: "Utilities",
        name: "Gas Bill",
        cost: 50.0,
        purchasedDate: new Date("2024-01-15"),
      },
    ]
  }
];