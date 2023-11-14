//List projects

export default function projectList() {
    const main = document.getElementById('content');
    main.innerHTML = '';

    const div1 = document.createElement('div');
    div1.classList.add('flex', 'flex-col');
    main.appendChild(div1);

    const div2 = document.createElement('div');
    div2.classList.add("overflow-x-auto", "sm:-mx-6", "lg:-mx-8");
    div1.appendChild(div2);

    const div3 = document.createElement('div');
    div3.classList.add("inline-block", "min-w-full", "py-2", "sm:px-6", "lg:px-8");
    div2.appendChild(div3);

    const div4 = document.createElement('div');
    div4.classList.add("overflow-hidden");
    div3.appendChild(div4);

    const table = document.createElement('table');
    table.classList.add("min-w-full", "text-left", "text-sm", "font-light");
    div4.appendChild(table);

    const thead = document.createElement('thead');
    thead.classList.add("border-b", "font-medium", "dark:border-neutral-500");
    table.appendChild(thead);

    const tr = document.createElement('tr');
    thead.appendChild(tr);

    const th1 = document.createElement('th');
    th1.scope = "col";
    th1.classList.add("px-6", "py-4");
    th1.textContent = "Project List";
    tr.appendChild(th1);

    const th2 = document.createElement('th');
    th2.scope = "col";
    th2.classList.add("px-6", "py-4");
    th2.textContent = "Name";
    tr.appendChild(th2);

    const th3 = document.createElement('th');
    th3.scope = "col";
    th3.classList.add("px-6", "py-4");
    th3.textContent = "Todo's";
    tr.appendChild(th3);

    const th4 = document.createElement('th');
    th4.scope = "col";
    th4.classList.add("px-6", "py-4");
    th4.textContent = "Due date";
    tr.appendChild(th4);


    const tbody = document.createElement('tbody');
    tbody.setAttribute('id', 'tbody');
    table.appendChild(tbody);

    storegeList();
}

//List projects from storege

function storegeList() {
    const projects = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = JSON.parse(localStorage.getItem(key));
        projects.push(value);
    }

    const tbody = document.getElementById('tbody');

    if (projects.length === 0) {
        const h2 = document.createElement('h2');
        h2.classList.add("font-semibold", "text-xl", "text-gray-600", "my-5");
        h2.textContent = "No projects created";
        tbody.appendChild(h2);
    } else {
        tbody.innerHTML = '';
        projects.forEach(project => {

            const tr2 = document.createElement('tr');
            tr2.classList.add("border-b", "dark:border-neutral-500");
            tbody.appendChild(tr2);

            const td1 = document.createElement('td');
            td1.classList.add("whitespace-nowrap", "px-6", "py-4", "font-medium");
            td1.textContent = project.id;
            tr2.appendChild(td1);

            const td2 = document.createElement('td');
            td2.classList.add("whitespace-nowrap", "px-6", "py-4");
            td2.textContent = project.name;
            tr2.appendChild(td2);

            const td3 = document.createElement('td');
            td3.classList.add("whitespace-nowrap", "px-6", "py-4");
            let todos = function () {
                let count = 0;
                project.todos.forEach(todo => {
                    count++;
                })
                return count
            };
            td3.textContent = todos();
            tr2.appendChild(td3);

            const td4 = document.createElement('td');
            td4.classList.add("whitespace-nowrap", "px-6", "py-4");
            td4.textContent = project.dueDate;
            tr2.appendChild(td4);

            const td5 = document.createElement('td');
            td5.classList.add("px-0", "py-2");
            td5.innerHTML = `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View</button>`;
            td5.setAttribute('id', 'viewbtn');
            td5.addEventListener('click', viewProject);
            tr2.appendChild(td5);

            const td6 = document.createElement('td');
            td6.classList.add("px-0", "py-2");
            td6.setAttribute('id', 'deletebtn');
            td6.innerHTML = `<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>`;
            td6.addEventListener('click', deleteButton);
            tr2.appendChild(td6);
        });
    }
}

function deleteButton() {
    const parent = this.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = JSON.parse(localStorage.getItem(key));
        if (value.name === parent) {
            localStorage.removeItem(key);
        }
    }
    window.location.reload();
}

let todos = [];
let name = '';

function viewProject() {
    const parent = this.previousSibling.previousSibling.previousSibling.innerHTML;

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = JSON.parse(localStorage.getItem(key));

        if (value.name === parent) {
            name = value.name;
            todos = value.todos;
            const dueDate = value.dueDate;
            const id = value.id;

            const main = document.getElementById('content');
            main.innerHTML = '';

            let div1 = document.createElement('div');
            div1.classList.add("container", "max-w-screen-lg", "mx-auto");
            main.appendChild(div1);

            let h2 = document.createElement('h2');
            h2.innerText = "Project" + " " + name;
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

            let p = document.createElement('p');
            p.setAttribute('name', 'full_name');
            p.setAttribute('id', 'full_name');
            p.innerText = name;
            p.classList.add("h-10", "border", "mt-1", "rounded", "px-4", "w-full", "bg-gray-50");
            div7.appendChild(p);

            let div8 = document.createElement('div');
            div8.classList.add("md:col-span-5");
            div6.appendChild(div8);

            let label2 = document.createElement('label');
            label2.setAttribute('for', 'due_date');
            label2.innerText = "Due Date";
            div8.appendChild(label2);

            let p2 = document.createElement('p');
            p2.setAttribute('name', 'due_date');
            p2.setAttribute('id', 'due_date');
            p2.innerText = dueDate;
            p2.classList.add("h-10", "border", "mt-1", "rounded", "px-4", "w-full", "bg-gray-50");
            div8.appendChild(p2);

            let div9 = document.createElement('div');
            div9.classList.add("md:col-span-5");
            div6.appendChild(div9);

            let label3 = document.createElement('label');
            label3.setAttribute('for', 'description');
            label3.innerText = "Todo's";
            div9.appendChild(label3);

            todos.forEach(todo => {
                let p3 = document.createElement('p');
                p3.setAttribute('name', 'description');
                p3.setAttribute('id', 'description');
                p3.innerText = todo;
                p3.classList.add("h-10", "border", "mt-1", "rounded", "px-4", "w-full", "bg-gray-50");
                div9.appendChild(p3);
            })

            let button = document.createElement('button');
            button.setAttribute('id', 'addTodo');
            button.addEventListener('click', addTodo);
            button.classList.add("bg-blue-500", "hover:bg-blue-700", "text-white", "font-bold", "py-2", "px-4", "rounded", "my-5");
            button.innerText = "Add Todo";
            div9.appendChild(button);
        }
    }
}

function addTodo() {
    const newTodo = prompt("Add a new task for your project");
    todos.push(newTodo);

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = JSON.parse(localStorage.getItem(key));

        if (value.name === name) {
            value.todos = todos;
            localStorage.setItem(key, JSON.stringify(value));

            console.log(value);
        }
    }
}