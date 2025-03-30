/**
 * App.js -- File for the main App class.
 * Author: Eric Hooks 
 * Date: 03/29/2025
 */

class App {
	/**
	 * Main constructor for the App class.
	 */
	constructor() {
		let self = this;

		//Define an array for the tasks
		self.taskList = [];
	}

	/**
	 * Function to add a task to the task list.
	 */
	addNewTask(newTask) {
		let self = this;

		(self.taskList).push(newTask);
	}

	/**
	 * Function to get a task from the tasklist by id.
	 */
	getTaskById(id) {
		let self = this;
		let tempTask = null;

		for(let t in self.taskList) {
			if(taskList[t].id == id) {
				tempTask = taskList[t];
			}
		}

		return tempTask;
	}

	/**
	 * Function to remove a task from the task list by id.
	 */
	removeTaskById(id) {
		let self = this;

		for(let t in self.taskList) {
			if(taskList[t].id == id) {
				delete taskList[t];
			}
		}
	}
}