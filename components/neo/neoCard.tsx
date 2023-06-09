import styles from './neo.module.css';
import utilStyles from '../../styles/utils.module.css';

type Props = {
  children: React.ReactNode,
}

export default function NeoCard({ children}: Props) {
  return (
    <div className={`${styles.neoCard} p-5`}>
        {children}
    </div>
  );
}