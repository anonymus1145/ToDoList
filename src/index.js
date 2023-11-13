//import functions and modules
import './style.css';
import projectList from './projectsList';
import createProject from './projectObject';

document.addEventListener('DOMContentLoaded', function () {
    projectList();
    function addClick() {
        //Add functionality to buttons
        const projectsButton = document.getElementById('listProjects');
        projectsButton.addEventListener('click', onClick);

        const settingsButton = document.getElementById('settings');
        settingsButton.addEventListener('click', onClick);

        const todayButton = document.getElementById('today');
        todayButton.addEventListener('click', onClick);

        const thisWeekButton = document.getElementById('thisWeek');
        thisWeekButton.addEventListener('click', onClick);

        const addTaskButton = document.getElementById('addTask');
        addTaskButton.addEventListener('click', onClick);

        const newProjectButton = document.getElementById('newProject');
        newProjectButton.addEventListener('click', onClick);

        const calendarButton = document.getElementById('calendar');
        calendarButton.addEventListener('click', onClick);

        const btnList = [projectsButton, settingsButton, todayButton, thisWeekButton, addTaskButton, newProjectButton, calendarButton];

        //On click invoke specific function
        function onClick() {
            if (this === addTaskButton) {
                console.log('Add Task');
            }
            else if (this === newProjectButton) {
                createProject();
            }
            else if (this === todayButton) {
                console.log('Today');
            }
            else if (this === thisWeekButton) {
                console.log('This Week');
            }
            else if (this === settingsButton) {
                console.log('Settings');
            }
            else if (this === calendarButton) {
                console.log('Calendar');
            }
            else if (this === projectsButton) {
                projectList();
            }
            btnList.forEach(btn => {
                btn.removeEventListener('click', onClick);
            });
           addClick();
        }
    }
    addClick();
});
