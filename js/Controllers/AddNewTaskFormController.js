/**
 * AddNewTaskFormController.js -- File to hold the AddNewTaskController class.
 * Author: Eric Hooks
 * Date: 03/29/2025
 */

class AddNewTaskFormController {
	/**
	 * Main constructor for the AddNewTaskController.
	 */
	constructor(app) {
		let self = this;

		//Setup an app reference
		self.app = app;
	}

	/**
	 * Function to initialize the add new task form view.
	 */
	initialize() {
		let self = this;

		//Setup the onclick functions
		self.setupOnClickFunctions();
	}

	/**
	 * Function to setup the onclick functions.
	 */
	setupOnClickFunctions() {
		let self = this;

		//Setup the onclick function for the add new task add button
		$('#addnewtask-addbtn').on('click', () => {
			self.addNewTaskFormAddButtonOnClick();
		});

		//Setup the onclick function for the add new task cancel button
		$('#addnewtask-cancelbtn').on('click', () => {
			self.addNewTaskFormCancelButtonOnClick();
		});
	}

	/**
	 * Function to remove all onclick functions.
	 */
	removeOnclickFunctions() {
		let self = this;

		//Remove all of the onclick functions at once.
		$('.addnewtaskform-clickable').off('click');
	}

	/**
	 * Function for the onclick of the add new task form cancel button.
	 */
	addNewTaskFormCancelButtonOnClick() {
		let self = this;

		//Reset the add new task form
		self.resetAddNewTaskForm();

		//Hide all of the views and return us to the task list
		((self.app).mvc).hideAllViewableAreas();

		//Show the taskview area
		((self.app).mvc).showTaskListArea();

		return false;
	}

	/**
	 * Function for the onclick of the add new task form add button.
	 */
	addNewTaskFormAddButtonOnClick() {
		let self = this;

		//Get the contents of the form
		let taskName = $('#addnewtask-name').val();
		let taskDueDate = $('#addnewtask-date').val();

		if(taskName.length < 1) {
			alert("A Task must have a name.");
			$('#addnewtask-name').focus();
		}

		else {
			try {
				taskDueDate = new Date(taskDueDate);

				let newTask = new Task(taskName, taskDueDate);

				//Add the new task to the list
				(self.app).addNewTask(newTask);

				alert("Success");

				//Close the form, using the cancel button
				$('#addnewtask-cancelbtn').trigger('click');
			}

			catch(err) {
				alert("There was an error with the entered date.  Please try again.");
				$('#addnewtask-date').focus();
			}
		}

		return false;
	}

	/**
	 * Function to reset the add new task form.
	 */
	resetAddNewTaskForm() {
		let self = this;

		//Reset the form
		$('#addnewtask-name').val("");
		$('#addnewtask-date').val("");
	}
}