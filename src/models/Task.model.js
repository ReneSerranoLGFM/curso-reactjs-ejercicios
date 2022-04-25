import { LEVELS } from "./Levels.enum";

export class Task {
  id = 0;
  name = "";
  description = "";
  priority = LEVELS.NORMAL;
  completed = false;

  constructor(id, name, priority, description, completed) {
    this.id = id;
    this.name = name;
    this.priority = priority;
    this.description = description;
    this.completed = completed;
  }
}
