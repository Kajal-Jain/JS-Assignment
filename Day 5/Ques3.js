async function todos(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    console.log(data.filter(d => {if(d.completed == true) return d;}));
}

todos();