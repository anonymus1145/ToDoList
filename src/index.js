//import functions and modules
import './style.css';
import _ from './projects';
import projectList from './projects';

const projects = [];

document.addEventListener('DOMContentLoaded', function() {
    projectList();

    function addClick() {
        //Display Projects
        const projects = document.getElementById('listProjects');
        projects.addEventListener('click', onClick);

        //Display Settings
        const settings = document.getElementById('settings');
        settings.addEventListener('click', onClick);

        //Display Today
        const today = document.getElementById('today');
        today.addEventListener('click', onClick);

        //Display this week
        const thisWeek = document.getElementById('thisWeek');
        thisWeek.addEventListener('click', onClick);

        //Display Add Task
        const addTask = document.getElementById('addTask');
        addTask.addEventListener('click', onClick);

        //Display New Project
        const newProject = document.getElementById('newProject');
        newProject.addEventListener('click',  onClick);

        //Display calendar
        const calendar = document.getElementById('calendar');
        calendar.addEventListener('click',  onClick);

        const btnList = [addTask, newProject, today, thisWeek, settings, calendar];

        function onClick() {
            if (this === addTask) {
                console.log('Add Task');
            }
            else if (this === newProject) {
                console.log('New Project');
            }
            else if (this === today) {
                console.log('Today');
            }
            else if (this === thisWeek) {
                console.log('This Week');
            }
            else if (this === settings) {
                console.log('Settings');
            }
            else if (this === calendar) {
                console.log('Calendar');
            }
            else if (this === projects) {
                console.log('Projects');
            }

            btnList.forEach(btn => {
                btn.removeEventListener('click', onClick);
            });
        }
        addClick();
    }
    addClick();
})

