import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

// styles
import styles from './Home.module.css'

// components
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'

export default function Home() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection(
    'transactions', ["uid", "==", user.uid], ['createdAt', 'desc']
  )

  return (
    <div className="container">
      <div className={styles.container}>
        <div className="row">
          <div className="col-8">
            <div className={styles.content}>
              {error && <p>{error}</p>}
              {documents && <TransactionList transactions={documents} />}
            </div>
          </div>
          <div className="col-md-4">
            <div className={styles.sidebar}>
              <TransactionForm uid={user.uid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
