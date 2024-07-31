import { type ReactNode } from "react";

type CourseGoalProps = {
  title: string;
  children: ReactNode;
};

export default function CourseGoal(props: CourseGoalProps) {
  const { title, children } = props;
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}

// FC stands for functional Component, also it's a Generic Type.
// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;
