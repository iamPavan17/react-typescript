import CourseGoal from "./CourseGoal.tsx";
import { CourseGoal as CGoal } from "../App.tsx";

type CourseGoalListProps = {
  goals: CGoal[];
  // return is void, because we don't expect this function to return anything.
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList(props: CourseGoalListProps) {
  const { goals, onDeleteGoal } = props;
  return (
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
  );
}
