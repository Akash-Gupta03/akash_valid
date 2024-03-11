import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const ExpenseTracker = () => {
  const [income, setIncome] = useState(5000);
  const [expense, setExpense] = useState(0);
  const [input, setInput] = useState('');
  const [total, setTotal] = useState('');
  const [ expenseHistory,setExpenseHistory]=useState();
  const [note,setNote] = useState("");



  const handleNote=(e)=>{
    setNote(e.target.value)
  }

  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    const amount = parseFloat(input);  
    if (!isNaN(amount)) {
      if (amount >= 0) {
        setIncome((prevIncome) => prevIncome + amount);
      } else {
        // const newExpense = {
        //   place: input,  
        //   amount: amount, 
        // };
        // setExpenseHistory((prevHistory) => [...prevHistory, newExpense]);
        setExpense((prevExpense) => prevExpense + Math.abs(amount));
      
      }
      if (amount >= 0){
      setIncome(income  + amount)}
      else {
        setTotal(income  + amount)
      }
      setInput('');
    }
  };




  return (
    <div>
      <h1 className='text-center'>Expense Tracker</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4 '>
            <Card variant='outlined' className='background-images'>
              <CardContent>Income:  {income !== 0 ? income : '0'}</CardContent>
            </Card>
          </div>
          <div className='col-sm-4 '>
            <Card variant='outlined' className='background-images'>
              <CardContent>Expense: {expense}</CardContent>
            </Card>
          </div>
     
        <div className='col-sm-4 '>
            <Card variant='outlined' className='background-images'>
              <CardContent>Total: {total}</CardContent>
            </Card>
          </div>
        </div>
      </div>

     
{/* 
<div className='container'>
  <h2 className='text-center'>Expense History</h2>
  <div className='col-sm-6'>
    {expenseHistory.map((item, index) => (
      <Card key={index} variant='outlined' className='background-images'>
        <CardContent>
          <div>
            <strong>Place:</strong> {item.place}
          </div>
          <div>
            <strong>Amount:</strong> {item.amount}
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
  
</div> */}




      <div className='container mt-5 text-center'>
        <div>
          {/* <input
            className=''
            type='text'
            value={input}
            onChange={handleInputChange}
            placeholder='where ?'
            name='place'
          /> */}
        </div>
        <div>
          <input
            className='mt-5'
            type='number'
            value={input}
            onChange={handleInputChange}
            placeholder='enter the amount & expense'
            name='expense'
          />
        </div>


        <div>
          <input
            className='mt-5'
            type='text'
            value={note}
            onChange={handleNote}
            placeholder='text'
            name='note'
          />
        </div>
      </div>


<div className='container'>
  <div className='col-sm-6 card' > {note}</div>
  <div className='col-sm-6 card'>{expense}</div>
</div>


      <div className='container text-center mt-4'>
        <button type='button' onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ExpenseTracker;
