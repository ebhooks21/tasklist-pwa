/**
 * MainViewController.js -- File to hold the main view controller class.
 * Author: Eric Hooks
 * Date: 03/29/2025
 */

class MainViewController {
	/**
	 * Main constructor for the MainViewController class.
	 */
	constructor() {
		let self = this;
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
	 * Function for the add new task button onclick.
	 */
	addNewTaskButtonOnClick() {
		alert("HERE");
	}
}