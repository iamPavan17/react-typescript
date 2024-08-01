import { type FormEvent } from "react";

export default function NewGoal() {
  // By default, event will be any type
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input type="text" id="goal" />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input type="text" id="summary" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
