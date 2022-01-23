import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useFirestore } from '../../hooks/useFirestore';

export default function TransactionForm({ uid }) {
  const [title, setTitle] = useState('');
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
      <div className="d-flex align-items-right justify-content-center">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center text-success">Add new transaction</h3>
          <Container className="mt-5 border border-success pb-4 rounded shadow-lg p-3 bg-success">
            <div className="d-flex align-items-center justify-content-center">
              <div className="d-grid gap-4">
                <label>
                  <div className="col-md-12 text-white">
                    <span>Title:</span>
                    <div>
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                      />
                    </div>
                  </div>
                </label>
                <label>
                  <div className="col-md-12 text-white">
                    <span>Amount (PLN):</span>
                    <div>
                      <input
                        className="form-control form-control-lg"
                        type="number"
                        required
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                      />
                    </div>
                  </div>
                </label>
                <div className="text-center">
                  <button className="btn btn-outline-light text-white">Add Transaction</button>
                </div>
              </div>
            </div>
          </Container>
        </form>
      </div>
    </>
  )
}