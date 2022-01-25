import { useFirestore } from "../../hooks/useFirestore";
import styles from "./Home.module.css";

export default function TransactionList({ transactions }) {
  const { deleteDocument } = useFirestore('transactions')

  return (
    <ul className={styles.transactions}>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className={styles.title}>{transaction.title}</p>
          <p className={styles.amount}>{transaction.amount} zł</p>
          <button onClick={() => deleteDocument(transaction.id)}>x</button>
        </li>
      ))}
    </ul>
  )
}