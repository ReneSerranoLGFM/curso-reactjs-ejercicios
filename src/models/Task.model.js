import { LEVELS } from "./Levels.enum";

export class Task {
  name = "";
  description = "";
  priority = LEVELS.NORMAL;
  completed = false;

  constructor(name, priority, description, completed) {
    this.name = name;
    this.priority = priority;
    this.description = description;
    this.completed = completed;
  }
}
