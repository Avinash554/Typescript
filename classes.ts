interface UserInterface{
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}

class User implements UserInterface{
    public name: string;
    public email: string;
    public age: number;

    constructor (name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('user created: ' + this.name);

    }
    public register(){
        console.log(this.name + ' is now registered');
    }
    payInvoice(){
        console.log(this.name);
    }
}

let john = new User('Jhon', 'Doe@gmail.com', 35);
console.log(john.age);
john.register();
john.payInvoice();

class Member extends User{
    id: number;
        constructor( id: number, name: string, email: string, age: number){
          super(name, email, age);
          this.id = id;
        console.log('User id: ' + this.id);
      }  
      payInvoice(){
          super.payInvoice();
      } 
}

let mike: User = new Member(1, 'mike', 'Madhan@gmaila.com', 55);

mike.payInvoice();

