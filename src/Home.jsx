import React, { useState } from 'react'
import {connect} from 'react-redux'
import { useDispatch } from "react-redux";


function Home(props) {
    // const newAcc = { id: 3,customerName:"Ahmad Allawneh", accountNumber: "987655", accountType: "Student accounts"};
    // const addAcc =()=>{
    //     props.addAccount(newAcc);
    // }

    const dispatch = useDispatch();

    const [formValue, setFormValue] = useState({
        id: "Mark",
        customerName: "Otto",
        accountNumber: "",
        accountType: "",
      });
    
      const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
      };
      const handleSubmit = {
        type: "ADD_USER",
        payload: formValue,
      };

  return (
    <div>
        <h1>Number Of Accounts:{props.accounts.length}</h1>
        <form>
            <input  name="id" onChange={onChange} placeholder="id" required/>
            <input name="customerName" onChange={onChange} placeholder="customerName" required/>
            <input name="accountType" onChange={onChange} placeholder="accountType" required/>
            <input name="accountNumber" onChange={onChange} placeholder="accountNumber" required/>
        </form>
        <button style={{margin:15}} type="submit" onClick={() => { dispatch(handleSubmit);
          }} >ADD</button>
        <table border={5}  >
            <thead>
                <th>customerName</th>
                <th>accountNumber</th>
                <th>accountType</th>
            </thead>
            <tbody>
      {props.accounts.map(acc=>{
        return(
           <tr>
            <td>{acc.customerName}</td>
            <td>{acc.accountNumber}</td>
            <td>{acc.accountType}</td>
           </tr>
        )    
          })}
          </tbody>
      </table>
    </div>
  );
}


const readStateFromStoreAndPassItToProps =(state)=>{
return{
    accounts: state.accounts,
    numberOfAccounts : state.numberOfAccounts
}
}

const addDispatchToProps = (dispatch)=>{
    return{
        addAccount:(acc)=>{
            dispatch({type:'ADD_ACCOUNT',payload:acc})
        }
    }
}

export default connect(readStateFromStoreAndPassItToProps,addDispatchToProps)(Home);
