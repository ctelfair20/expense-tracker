// import { Budget, Expense } from "../context/DataContext";

const addExpense = () => {

};

const addCategory = () => {

}

const deleteBudget = () => {

}

const addBudget = () => {

}

const editCost = () => {

}

// helper functions
// const getTotal1 = (arr: Budget[]) => {
//   const initialValue = 0;
//   return arr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue.total,
//     initialValue,
//   );
// }

// const getTotal = (arr: Expense[] | Budget[]) => {
//   const initialValue = 0;

//   if('cost' in arr) {
//     return arr.reduce(
//       (accumulator, currentValue) => {
//         return accumulator + currentValue.cost
//       }
//     ),initialValue
//   }
// }

// const totalCB = (accumulator:number, currentValue: Expense[] | Budget[]) => {
//   if('cost' in currentValue) {
//     return accumulator + currentValue.cost
//   } else {
//     return accumulator + currentValue.total
//   }
// }

export { addExpense, addCategory, deleteBudget, addBudget, editCost }