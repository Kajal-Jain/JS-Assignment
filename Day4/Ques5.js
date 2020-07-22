function saleReward(sales){
    if(sales<=5000){
    reward = sales * 0.02;
    console.log(reward);
    }
    else if(sales>=5001 && sales<=10000){
    reward = sales * 0.05;
    console.log(reward);
    }
    else if(sales>=10001 && sales<=20000){
    reward = sales * 0.07;
    console.log(reward);
    }
    else if(sales>5000){
    reward = sales * 0.10;
    console.log(reward);
    }
}  
  sales=prompt();
    saleReward(sales);