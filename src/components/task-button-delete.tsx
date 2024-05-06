import { Button } from "./ui/button";
import { removeTask } from "@/actions/tasks-actions";

export function TaskButtonDelete({ taskId }: { taskId: number }) {
  return (
    <form action={removeTask}>
      <input type="hidden" name="taskId" value={taskId} />
      <Button variant="destructive">Delete</Button>
    </form>
  );
}
