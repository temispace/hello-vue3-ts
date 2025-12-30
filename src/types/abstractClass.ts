// 普通类 抽象类 接口 泛型
// 常规类
import { Gender } from "@/types/enumclass.ts"
class Person {
    
    name:string
    age:number
    gender:Gender
    height:number

    constructor(name:string,age:number,gender:Gender,height:number){
    this.name = name
    this.age = age
    this.gender = gender
    this.height = height
}
}

class Teacher extends Person {
    constructor(name:string,age:number,gender:Gender,height:number){
        super(name,age,gender,height)
    }
}
const p1 = new Person("张三",18,Gender.Male,180)
const p2 = new Person("李四",18,Gender.Female,170)
const t1 = new Teacher("王五",18,Gender.Male,175)
export {Person}

// 抽象类
abstract class Animal{

    name:string
     somatotype:string

     constructor(name:string,somatotype:string){
         this.name = name
         this.somatotype = somatotype
     }

      makeSound(): string{
        return "Animal Can Roam"
     }
     abstract move(): void
}

 class Cat extends Animal{
    constructor(name:string,somatotype:string){
      super(name,somatotype)
    }

    move(): void{
        console.log("Cat moves quickly")
    }

    
}

class Dog extends Animal{
    constructor(name:string,somatotype:string){
      super(name,somatotype)
    }

    move(): void{
        console.log("Dog moves slowly")
    }

    makeSound(): string {
        return "Dog barks"
    }
}

const c1 = new Cat("小猫","猫科")
c1.makeSound()
c1.move()

const d1 = new Dog("小狗","犬科")
d1.makeSound()
d1.move()

// 接口
interface Shape{
    name:string
    getPerimeter(): number
    getArea(): number
}
interface Shape{
   dimension:number
}

class Rectangle implements Shape{
    name:string
    dimension: number
    length:number
    width:number

    constructor(name:string,length:number,width:number,dimension:number){
        this.name = name
        this.length = length
        this.width = width
        this.dimension = dimension

    }

    getPerimeter(): number {
        return 2*(this.length + this.width)
    }

    getArea(): number {
        return this.length * this.width
    }
}

class Circle implements Shape{
    name:string
    radius:number
    dimension: number

    constructor(name:string,radius:number,dimension:number){
        this.name = name
        this.radius = radius
        this.dimension = dimension
    }

    getPerimeter(): number {
        return 2*3.14*this.radius
    }

    getArea(): number {
        return 3.14*this.radius*this.radius
    }
}

 export type Persons = Array<Person>

 // reactive直接传泛型

