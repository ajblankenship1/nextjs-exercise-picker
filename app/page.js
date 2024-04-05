'use client'
import { useState } from 'react';
import styles from '@/app/page.module.css';
import ExerciseBox from './components/exerciseBox/ExerciseBox';
import exercises from './data/exercises';

export default function Home() {
   
    const [selectedExercise, setSelectedExercise] = useState(-1);

    function handleSelectChange(event){
        const exercisesIndex = Number(event.target.value);
        setSelectedExercise(exercisesIndex);
    }
    return (
        <main >
            <select className={styles.exerciseSelector} onChange={handleSelectChange} value={selectedExercise}>
                <option value={-1}>Select Exercise</option>
                {
                    exercises.map((item, index) => {
                        return <option value={index} key={index} >{item.name}</option>
                    })
                }
            </select>
           {selectedExercise >= 0 ? <ExerciseBox data={exercises[selectedExercise]}/> : ""}
        </main>
    );
}
