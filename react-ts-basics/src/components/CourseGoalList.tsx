import CourseGoal from "./CourseGoal.tsx";
import { CourseGoal as CGoal } from "../App.tsx";

type CourseGoalListProps = {
  goals: CGoal[];
};

export default function CourseGoalList(props: CourseGoalListProps) {
  const { goals } = props;
  return (
    <ul>
      {/* TypeScript understands that the goal which we get
      as a parameter in the map function, will be of
      type CourseGoal
  */}
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
