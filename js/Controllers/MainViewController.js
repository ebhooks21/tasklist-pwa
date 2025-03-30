/**
 * MainViewController.js -- File to hold the main view controller class.
 * Author: Eric Hooks
 * Date: 03/29/2025
 */

class MainViewController {
	/**
	 * Main constructor for the MainViewController class.
	 */
	constructor(app) {
		let self = this;

		//Setup an app reference
		self.app = app;
	}

	/**
	 * Function to initialize the main view.
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

		//Setup the onclick function for the add new task button
		$('#addnewtask-btn').on('click', () => {
			self.addNewTaskButtonOnClick();
		});
	}

	/**
	 * Function to remove all onclick functions.
	 */
	removeOnclickFunctions() {
		let self = this;

		//Remove all of the onclick functions at once.
		$('.mainview-clickable').off('click');
	}

	/**
	 * Function to hide all viewable areas.
	 */
	hideAllViewableAreas() {
		//Hide all viewable areas
		$('.viewablearea').hide();
	}

	/**
	 * Function for the add new task button onclick.
	 */
	addNewTaskButtonOnClick() {
		let self = this;

		//Hide all viewable areas
		self.hideAllViewableAreas();

		//Show the new task area
		self.showAddNewTaskArea();
	}

	/**
	 * Funciton to show the task list area.
	 */
	showTaskListArea() {
		let self = this;

		//Show the task list area
		$('#tasksarea').show();
	}

	/**
	 * Funtion to show the add new task area.
	 */
	showAddNewTaskArea() {
		let self = this;

		//Show the new task area
		$('.addnewtaskarea').show();
	}
}