let arr = prompt("enter your numbers ").split(",")
console.log(arr)
no_arr=arr;	

		let odd = no_arr.filter( n => n%2!==0);
        console.log(`the odd number from the given list ${odd}`)
		let cubes = no_arr.filter(n=>n%2!== 0).map(n=>n**3)

        console.log(`Cubes of odd numbers in the range is:${cubes}`);

console.log(odd);
console.log(cubes);