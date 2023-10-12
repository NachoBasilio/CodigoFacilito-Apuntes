import "./main.css";
const app = document.getElementById('app');



app.innerHTML = `
  <div class="container bg-gradient-to-r lg:from-red-400 lg:to-blue-300 xl:from-yellow-50 >
    <h1 class="text-6xl md:text-4xl" > Hello World </h1>
    <h2 class="bg-indigo-400 mt-4 ml-3 mr-2 mb-3" > Hola a todos</h2>
    <h2 class="bg-indigo-400 xl:my-2" > Hola a todos</h2>
    <button class="bg-indigo-400 ring-4  ring-offset-4 hover:rounded px-4 py-2 hover:bg-indigo-500 hover:text-indigo-50" >Hover me</button>
    <input type="text" class="focus:bg-blue-400 focus:text-blue-50 pl-2">
    <p class="text-left text-red-300">Buenas</p>
    <p class="text-center font-bold">Buenas</p>
    <p class="text-right overline">Buenas</p>
    <p class="text-justify">Buenas</p>
    <p class="text-start">Buenas</p>
    <p class="text-end">Buenas</p>
    <div class=" h-screen bg-no-repeat bg-center" style="background-image: url('https://picsum.photos/seed/picsum/200/300')">  </div>

    <div class="grid grid-cols-4 grid-rows-4 gap-4">
      <div>
        Buenas
      </div>
      <div class="bg-green-600 gap-14 col-span-4">
        Buenas
      </div>
      <div class="row-span-4 bg-slate-500">
        Buenas
      </div>
      <div class=" bg-slate-500">
        Buenas
      </div>
    </div>
  
  </div>
`;