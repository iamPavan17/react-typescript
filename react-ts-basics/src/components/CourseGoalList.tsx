import { type ReactNode } from "react";

import CourseGoal from "./CourseGoal.tsx";
import { CourseGoal as CGoal } from "../App.tsx";
import InfoBox from "./InfoBox.tsx";

type CourseGoalListProps = {
  goals: CGoal[];
  // return is void, because we don't expect this function to return anything.
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList(props: CourseGoalListProps) {
  const { goals, onDeleteGoal } = props;
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {/* TypeScript understands that the goal which we get
          as a parameter in the map function, will be of
          type CourseGoal
      */}
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
