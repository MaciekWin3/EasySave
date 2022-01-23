import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSignup } from '../../hooks/useSignup'

// styles
import styles from './Signup.module.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { signup, isPending, error } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName)
  }

  return (
    <div className="d-flex align-items-center justify-content-center">
      <form onSubmit={handleSubmit} className={styles['signup-form']}>
        <Container className="mt-5 border border-success pb-4 rounded shadow-lg p-3 ">
          <div className="d-grid gap-4">
            <h2>Sign up</h2>
            <div className="col-md-12">
              <label>
                <span>Email:</span>
                <div>
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </label>
            </div>
            <div className="col-md-12">
              <label>
                <span>Password:</span>
                <div>
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
              </label>
            </div>
            <div className="col-md-12">
              <label>
                <span>Display name:</span>
                <div >
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    onChange={(e) => setDisplayName(e.target.value)}
                    value={displayName}
                  />
                </div>
              </label>
            </div>
            <div className="col-12">
              {!isPending && <button className="btn btn-outline-success ">Sign up</button>}
              {isPending && <button className="btn btn-outline-success " disabled>Loading</button>}
              {error && <p>{error}</p>}
            </div>
          </div>
        </Container>
      </form>
    </div>
  )
}
