/**
 * Task.js -- File to hold the Task model class.
 * Author: Eric Hooks
 * Date: 03/29/2025
 */

class Task {
	/**
	 * Main constructor for the Task class.
	 */
	constructor(id, taskName, dueDate) {
		let self = this;

		self.id = id;
		self.taskName = taskName;
		self.dueDate = dueDate;
		self.completed = false;
	}
}