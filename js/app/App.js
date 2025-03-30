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

		//Create a new MainViewController
		self.mvc = new MainViewController(self);

		//Create the add new task view controller
		self.adtvc = new AddNewTaskFormController(self);
	}

	/**
	 * Function to start the application.
	 */
	start() {
		let self = this;

		(self.mvc).initialize();
		(self.adtvc).initialize();
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

	/**
	 * Function to modify a task.
	 */
	modifyTask(task) {
		let self = this;

		for(let t in self.taskList) {
			if(taskList[t].id == task.id) {
				taskList[t] = task;
			}
		}
	}

	/**
	 * Function to get the next task id.
	 */
	getNextTaskId() {
		let self = this;

		let currId = 0;

		for(let t in self.taskList) {
			if((self.taskList[t]).id > currId) {
				currId = (self.taskList[t]).id;
			}
		}

		return ++currId;
	}
}