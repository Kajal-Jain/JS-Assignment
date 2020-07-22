class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }

    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    addCoins(user,coins){
        user.luCoins+=coins;
        console.log(`${user.name} has ${user.luCoins} coins`);
        return user;
    }

    removeCoins(user,coins){
        user.luCoins-=coins;
        console.log(`${user.name} has ${user.luCoins} coins`);
        return user;
    }

}

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }

   deleteCourse(user){
        console.log(`removed course ${user.courses.pop()} from object ${user.name}`);
    }
}

let user1 = new User('kalyani',18,'kalyani@gmail.com');
let user2 = new User('malhar',30,'malhar@gmail.com');
let mod = new Moderator('sumedh',22,'sumi@gmail.com','Moderator');
let admin = new Admin('parth',24,'parth@gmail.com');
let users = [user1,user2,mod,admin];




user1.login().logout();

mod.login().addCoins(user1,5);
mod.removeCoins(user1,3);
mod.logout();

admin.login();
admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');
admin.addCourse(user1,'Machine Learning');
admin.deleteCourse(user1);

users.forEach(element => {
    console.log(element);
});
admin.logout();