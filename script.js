 function add(){
   let task1 = document.createElement('span');
   task1.classList.add('a1');
   
   let task2 = document.createElement('span');
   task2.classList.add('a2');
   
   let task3 = document.createElement('button');
   task3.classList.add('a3');
   
   let task4 = document.createElement('div');
   task4.classList.add('a4');
   
   task1.innerText = document.querySelector('#in').value;
   task2.innerText = document.querySelector('#date').value;
   task3.innerText = "Delete";
   
   task3.addEventListener('click', () => {
    task4.remove();
   });
   
   task4.appendChild(task1);
   task4.appendChild(task2);
   task4.appendChild(task3);
   
   document.querySelector('.di').appendChild(task4);
   
   document.querySelector('#in').innerText = " ";
   document.querySelector('#date').innerText = " ";
 }
