while(true){
    let no=prompt("Enter the number above 100");
    if (no > 100){
      console.log(`Entered number is ${no}`);
      break;
    }
    else if(no == ""){
        console.log("You Cancelled entered blank");
        break;
    }
    else
      console.log("Entered number is not valid");
      continue;
  }