import { useState } from "react";

import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]); // or useState<Array<CourseGoal>>([])

  function handleAddGoal() {
    setGoals((prevGoals) => {
      // As of now, we are inserting the same goal, we will insert dynamically later.
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn it in depth!",
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal />
      {/* Sending onDeleteGoal function here,
          It's a common convention in React to name
          props that receive functions as values by using
          this patterm and naming it like an even handler
      */}
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
