import styles from '@/app/components/exerciseBox/styles.module.css'
export default function ExerciseBox(props){
    const data = props.data;
    
    return(
    <div className={styles.exerciseBox}>
        <h2>{data.name}</h2>
        <h3>Equipment</h3>
        <p>{data.equipemt}</p>
        <h3>Body Part</h3>
        <p>{data.bodyPart}</p>
    </div>
    )
}