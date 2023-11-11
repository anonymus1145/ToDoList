//Create project
function createProject() {
    return {
        name: '',
        todos: [],
        dueDate: ''
    }
}



//List projects

export default function projectList() {
    const main = document.getElementById('content');
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
    table.appendChild(tbody);

    //Add project in the table
    const tr2 = document.createElement('tr');
    tr2.classList.add("border-b", "dark:border-neutral-500");
    tbody.appendChild(tr2);

    const td1 = document.createElement('td');
    td1.classList.add("whitespace-nowrap", "px-6", "py-4", "font-medium");
    td1.textContent = "1";
    tr2.appendChild(td1);

    const td2 = document.createElement('td');
    td2.classList.add("whitespace-nowrap", "px-6", "py-4");
    td2.textContent = "Hallo";
    tr2.appendChild(td2);

    const td3 = document.createElement('td');
    td3.classList.add("whitespace-nowrap", "px-6", "py-4");
    td3.textContent = "24";
    tr2.appendChild(td3);

    const td4 = document.createElement('td');
    td4.classList.add("whitespace-nowrap", "px-6", "py-4");
    td4.textContent = "12/12/2023";
    tr2.appendChild(td4);

    const td5 = document.createElement('td');
    td5.classList.add("px-0", "py-2");
    td5.innerHTML = `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View</button>`;
    tr2.appendChild(td5);

    const td6 = document.createElement('td');
    td6.classList.add("px-0", "py-2");
    td6.innerHTML = `<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>`;
    tr2.appendChild(td6);
}