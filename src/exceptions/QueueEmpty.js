export class QueueEmpty extends Error {
  constructor() {
    super("The queue is empty");
  }
}