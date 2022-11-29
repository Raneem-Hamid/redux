import React from 'react'
import {connect} from 'react-redux'

function Home(props) {
  return (
    <div>
        <table border={5}>
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
    accounts: state.accounts
}
}

export default connect(readStateFromStoreAndPassItToProps)(Home);
