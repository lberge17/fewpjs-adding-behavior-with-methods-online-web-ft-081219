// Your code here
class Cat {
  constructor(name){
    this.name = name
  }
  
  speak(){
    return `${self.name} says meow!`
  }
}

class Dog {
  constructor(name){
    self.name = name
  }
  
  speak(){
    return `${self.name} says woof!`
  }
}

class Bird {
  constructor(name, sex){
    self.name = name
    self.sex = sex
  }
  
  speak(){
    if (self.sex === 'male') {
      return `It's me! ${self.name} the parrot!`
    } else {
      return `${self.name} says squawk!`
    }
  }
}