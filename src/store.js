import { createStore } from "redux";



const initState = {
    accounts : [
            {
              id: 1,
              customerName:"Israa Othman",
              accountNumber: "123456",
              accountType: "Savings"
            },
            {
              id: 2,
              customerName:"Ahmad Zahran",
              accountNumber: "987654",
              accountType: "Student accounts"
            }
    ],

    numberOfAccounts :2
 
}



const reduser = (state=initState,action)=>{
    switch (action.type) {
        case "ADD_USER":
            return {
              ...state,
              accounts: [...state.accounts, action.payload],
            };
        }
        return state;
};

export const propsToState = (props) => {
    return {
      accounts: props.accounts,
      counter: props.counter,
    };
  };

const store =createStore(reduser);

export default store;