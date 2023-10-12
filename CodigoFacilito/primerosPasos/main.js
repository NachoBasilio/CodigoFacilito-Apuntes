import "./main.css";
const app = document.getElementById('app');



app.innerHTML = `
  <div class="container hover:bg-red-900 lg:bg-red-400  sm:bg-green-400">
    <h1 class="text-6xl md:text-4xl" > Hello World </h1>
    <h2 class="bg-indigo-400 mt-4 ml-3 mr-2 mb-3" > Hola a todos</h2>
    <h2 class="bg-indigo-400 xl:my-2" > Hola a todos</h2>
    <button class="bg-indigo-400 px-4 py-2 hover:bg-indigo-500 hover:text-indigo-50" >Hover me</button>
    <input type="text" class="focus:bg-blue-400 focus:text-blue-50 pl-2">
  </div>
`;