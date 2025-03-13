import { ChangeDetectionStrategy, Component } from '@angular/core';

class Todo {
  constructor(task: string, done: boolean, assignee: string) {}
}

@Component({
  selector: 'app-todo-list',
  changeDetection: ChangeDetectionStrategy.OnPush,

  template: ``,
})
export class TodoList {
  todos: Todo[] = [];

  addTodoMutating() {
    this.todos.push(new Todo('TODO 4', false, 'John'));
  }

  addTodoImmutable() {
    const newTodo = new Todo('TODO 4', false, 'John');
    this.todos = [...this.todos, newTodo];
  }
}
