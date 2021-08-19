import styles from './index.module.css'
import Header from '../Header'
import Footer from '../Footer'

export default function Layout({ children }) {
	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.content}>{children}</div>
			<Footer />
		</div>
	)
}
