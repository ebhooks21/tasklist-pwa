/**
 * Task.js -- File to hold the Task model class.
 * Author: Eric Hooks
 * Date: 03/29/2025
 */

class Task {
	/**
	 * Main constructor for the Task class.
	 */
	constructor(taskName, dueDate) {
		let self = this;

		self.taskName = taskName;
		self.dueDate = dueDate;
		self.completed = false;
	}

	/**
	 * Empty constructor for the Task class.
	 */
	constructor() {
		let self = this;

		self.taskName = "";
		self.dueDate = null;
		self.completed = false;
	}
}