# Some differences between interfaces and types in TypeScript

There are some particular differences between interfaces and types which are discussed below with example . 

1. Purpose - interface defines only objects shapes But type defines object shapes, unions, intersections, and even primitives. 

example : 

interface User { 
  name: string;
  age: number;
}

//
type User = {
  name: string;
  age: number;
};

type ID = string | number;

2. Inheritance / Extension - Interfaces support extension to add new types But Types support intersection types to combine multiple types.

example - 

interface Human {
  name: string;
}

interface Employee extends Human {
  role: string;
}

//
type Human = { name: string };
type Employee = Human & { role: string };

3.  Declaration & Merge - Interfaces can be re-declared and merged but Types cannot be redeclared and merged. 

interface Person {
  name: string;
}

interface Person {
  age: number;
}

// Person is now: { name: string; age: number }

But while considering type 

type Person = { name: string };
// type Person = { age: number }; Error: Duplicate identifier

4. Use Cases - Both are best use for below mentioned cases 

| Use Case                             | Preference |
| ------------------------------------ | -----------|
| Object/class structure               | interface  |
| Union/Intersection logic             | type       |
| Working with primitives              | type       |
| Complex mappings / conditional types | type       |
| Needing declaration merging          | interface  |


# Use of the keyof keyword in the typescript

the keyof keyword in typescript is basically used to know the keys of a type or interface. This returns the union of the keys of a type.  
Its very useful to create types that are based on the property name of another type. 

Example : 

    type Builder {
        name:string ;
        age: number;
        emailAddress: string;
        isEmployed: boolean;
    }

    let BuilderKey : keyof Builder; 
    BuilderKey ="name" | "age" | "emailAddress" | "isEmployed"



This is also very helpful to know the keys of an object with the combination of typeof

Example 

    const dutchTranslation = {
        "hello": "hoi",
        "good morning": " goedemorgen",
        "difficult": "moeilijk",
        "grandma": "oma",
    }

    Object.keys(dutchTranslation) // javascript

let 
    let key: keyof typeof dutchTranslation;
    key='hello' | 'good morning' | 'difficult' | 'grandma'

    here type of defines the types of the object. 
    keyof defines the keys of the types of the dutchTranslation object. 



Here typeof person : 
