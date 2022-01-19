import { useState, useEffect } from 'react';
import { useFirestore } from '../../hooks/useFirestore';

export default function TransactionForm({ uid }) {
  const [title, setTitle] = useState('note');
  const [amount, setAmount] = useState('');
  const { addDocument, response } = useFirestore('transactions');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      uid, 
      title,
      amount,
    })
  }

  // reset the form fields
  useEffect(() => {
    if (response.success) {
      setTitle('');
      setAmount('');
    }
  }, [response.success])

  return (
    <>
      <h3 className="text-center">Add new note</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input 
            type="text"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            default={"note"}
          />
        </label>
        <label>
          <span>Amount (PLN):</span>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button>Add Transaction</button>
      </form>
    </>
  )
}