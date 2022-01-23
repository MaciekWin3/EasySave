import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useLogin } from '../../hooks/useLogin'

// styles
import styles from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isPending } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <div className="d-flex align-items-center justify-content-center">
      <form onSubmit={handleSubmit} className={styles['login-form']}>
        <Container className="mt-5 border border-success pb-4 rounded shadow-lg p-3 ">
          <div className="d-grid gap-4">
            <h2>Login</h2>
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
            <div className="col-12">
              {!isPending && <button className="btn btn-outline-success ">Login</button>}
              {isPending && <button className="btn btn-outline-success " disabled>Loading</button>}
              {error && <p>{error}</p>}
            </div>
          </div>
        </Container>
      </form>
    </div>
  )
}
