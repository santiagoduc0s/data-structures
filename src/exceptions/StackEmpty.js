export class StackEmpty extends Error {
  constructor() {
    super("The stack is empty");
  }
}