import styles from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positiveParcentage }) => (
     <>        
        <span className={styles.statistics_item}>Good: {good}</span>
        <span className={styles.statistics_item}>Neutral: {neutral}</span>
        <span className={styles.statistics_item}>Bad: {bad}</span>
        <span className={styles.statistics_item}>Total: {total}</span>
        <span className={styles.statistics_item}>Positive feedback: {positiveParcentage} %</span>
     </>
    );
  


