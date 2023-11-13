//Create project
function projectObject() {
    return {
        name: '',
        todos: [],
        dueDate: '',
        id: 0
    }
}

export default function createProject() {
    const newProject = projectObject();
    createProjectElements();

    //Add functionality to button
    const createButton = document.getElementById('submitProject');
    createButton.addEventListener('click', function () {
        if (document.getElementById('full_name').value === '' || document.getElementById('due_date').value === '' || document.getElementById('description').value === '') {
            alert('Please fill in all fields');
            return;
        } else {
            newProject.name = document.getElementById('full_name').value;
            newProject.dueDate = document.getElementById('due_date').value;
            let task = document.getElementById('description').value;
            newProject.todos.push(task);
            newProject.id = Math.floor(Math.random() * 1000);
            
            localStorage.setItem(newProject.name , JSON.stringify(newProject));
        }
        alert('Project created');

        //Reset the values of the object
        newProject.name = '';
        newProject.todos = [];
        newProject.dueDate = '';
    });
}

function createProjectElements() {
    const main = document.getElementById('content');
    main.innerHTML = '';

    let div1 = document.createElement('div');
    div1.classList.add("container", "max-w-screen-lg", "mx-auto");
    main.appendChild(div1);

    let h2 = document.createElement('h2');
    h2.innerText = "Create a new project";
    h2.classList.add("font-semibold", "text-xl", "text-gray-600", "my-5");
    div1.appendChild(h2);

    let div2 = document.createElement('div');
    div2.classList.add("bg-white", "rounded", "shadow-lg", "p-4", "md:p-8", "px-4", "mb-6");
    div1.appendChild(div2);

    let div3 = document.createElement('div');
    div3.classList.add("grid", "gap-4", "gap-y-2", "text-sm", "grid-cols-1", "lg:grid-cols-3");
    div2.appendChild(div3);

    let div4 = document.createElement('div');
    div4.classList.add("text-gray-600");
    div3.appendChild(div4);

    let div5 = document.createElement('div');
    div5.classList.add("lg:col-span-2");
    div2.appendChild(div5);

    let div6 = document.createElement('div');
    div6.classList.add("grid", "gap-4", "gap-y-2", "text-sm", "grid-cols-1", "md:grid-cols-5");
    div5.appendChild(div6);

    let div7 = document.createElement('div');
    div7.classList.add("md:col-span-5");
    div6.appendChild(div7);

    let label = document.createElement('label');
    label.setAttribute('for', 'full_name');
    label.innerText = "Project Name";
    div7.appendChild(label);

    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'full_name');
    input.setAttribute('id', 'full_name');
    input.required = true;
    input.classList.add("h-10", "border", "mt-1", "rounded", "px-4", "w-full", "bg-gray-50");
    div7.appendChild(input);

    let div8 = document.createElement('div');
    div8.classList.add("md:col-span-5");
    div6.appendChild(div8);

    let label2 = document.createElement('label');
    label2.setAttribute('for', 'due_date');
    label2.innerText = "Due Date";
    div8.appendChild(label2);

    let input2 = document.createElement('input');
    input2.setAttribute('type', 'date');
    input2.setAttribute('name', 'due_date');
    input2.setAttribute('id', 'due_date');
    input2.required = true;
    input2.classList.add("h-10", "border", "mt-1", "rounded", "px-4", "w-full", "bg-gray-50");
    div8.appendChild(input2);

    let div9 = document.createElement('div');
    div9.classList.add("md:col-span-5");
    div6.appendChild(div9);

    let label3 = document.createElement('label');
    label3.setAttribute('for', 'description');
    label3.innerText = "Add Todo";
    div9.appendChild(label3);

    let input3 = document.createElement('input');
    input3.setAttribute('type', 'text');
    input3.setAttribute('name', 'description');
    input3.setAttribute('id', 'description');
    input3.required = true;
    input3.classList.add("h-10", "border", "mt-1", "rounded", "px-4", "w-full", "bg-gray-50");
    div9.appendChild(input3);

    let div10 = document.createElement('div');
    div10.classList.add("md:col-span-5", "text-right");
    div6.appendChild(div10);

    let div11 = document.createElement('div');
    div11.classList.add("inline-flex", "items-end");
    div10.appendChild(div11);

    let button = document.createElement('button');
    button.setAttribute('id', 'submitProject');
    button.classList.add("bg-blue-500", "hover:bg-blue-700", "text-white", "font-bold", "py-2", "px-4", "rounded");
    button.innerText = "Submit";
    div11.appendChild(button);

}