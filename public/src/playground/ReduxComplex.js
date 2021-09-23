import { createStore, combineReducers } from "redux";
import { v4 as uuid } from "uuid";
//addexpenses
const addExpense = ({
  id = 10,
  desription = "",
  note = "",
  amount = 0,
  createdAt = "",
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id,
      desription,
      note,
      amount,
      createdAt,
    },
  };
};
//editExpenses
const editExpense = (id, updates) => ({
  type: "EDIT_UPDATES",
  id,
  updates,
});
//removeExpenses
const removeExpense = (id) => ({
  type: "REMOVE_EXPENSE",
  id,
});
//filterByAmount
const filterByAmount = (amount) => ({
  type: "FILTER_BY_AMOUNT",
  amount,
});
//filterByDate
const filterByDate = (date) => ({
  type: "FILTER_BY_DATE",
  date,
});
//setText
const setText = (date) => ({
  type: "FILTER_BY_DATE",
  date,
});
//setStartDate
const setStartDate = (startdate) => ({
  type: "SET_START_DATE",
  startdate,
});
//setEndDate
const setEndDate = (enddate) => ({
  type: "SET_END_DATE",
  enddate,
});

const defaultExpense = [];

const defFilters = {};

const expenseReducer = (state = defaultExpense, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];

      case "EDITeeeeeclipse_EXPENSE":
      console.log(action.id);
      return state.filter(({ id }) => {
        return id !== action.id;
      });

    case "REMOVE_EXPENSE":
      console.log(action.id);
      return state.filter(({ id }) => {
        return id !== action.id;
      });

    default:
      return state;
  }
};

const expenseStore = createStore(
  combineReducers({
    expense: expenseReducer,
  })
);

const addBroadbandExpense = expenseStore.dispatch(
  addExpense({
    id: uuid(),
    desription: "BroadBandBill",
    note: "BSNL broadband need to pay on 20th septemeber",
    amount: 907,
    createdAt: "11-09-2021",
  })
);
const addBroadbandExpenseAug = expenseStore.dispatch(
  addExpense({
    id: uuid(),
    desription: "BroadBandBill",
    note: "BSNL broadband need to pay on 20th septemeber",
    amount: 1024,
    createdAt: "20-08-2021",
  })
);

const removeBroadbandExpenseAug = expenseStore.dispatch(
  removeExpense(addBroadbandExpenseAug.expense.id)
);

console.log(expenseStore.getState());

const defStore = {
  expense: [
    {
      id: "ghdfh",
      description: "",
      note: "this was the final payament for home",
      amount: 10000,
      createdAt: "date",
    },
  ],
  filter: {
    sortedBy: "amount",
    text: "rent",
    startDate: undefined,
    endDate: undefined,
  },
};
