/**
 * TaskListingController.js -- File to hold the TaskListingController.
 * Author: Eric Hooks
 * Date: 03/30/3035
 */

class TaskListingController {
	/**
	 * Main constructor for the TaskListingController.
	 */
	constructor(app) {
		let self = this;

		//Setup an app reference
		self.app = app;
	}

	/**
	 * Function to initialize the task listing view.
	 */
	initialize() {
		let self = this;

		//Clear the task listing area
		self.clearTaskListingArea();
	}

	/**
	 * Function to clear the task listing area.
	 */
	clearTaskListingArea() {
		let self = this;

		$('#tasksarea-listing').html("");
	}

	/**
	 * Function to list the tasks.
	 */
	renderTaskListing(taskList) {
		let self = this;

		let html = "";
		let date = "";

		if(taskList.length <= 1) {
			html += "<tr>";

			html += "<th scope='row'>There are currently no tasks in your list.</th>";
			html += "<td>&nbsp;</td>";
			html += "<td>&nbsp;</td>";
			html += "<td>&nbsp;</td>";

			html += "</tr>";
		}

		else {
			for(let t in taskList) {
				html += "<tr>";

				html += `<th scope='row'>${taskList[t].id}</th>`;
				html += `<td>${taskList[t].taskName}</td>`;

				if(taskList[t].dueDate != null) {
					date = ((taskList[t].dueDate).getMonth() + 1) + "/" + (taskList[t].dueDate).getDate() + "/" + (taskList[t].dueDate).getFullYear(); 
				}

				html += `<td>${date}</td>`;
				html += `<td>Actions</td>`;

				html += "</tr>";
			}
		}

		$('#tasksarea-listing').html(html);
	}
}