// Crie um objeto que receba ao menos três propriedades sobre você.
let person = {
    name: "Hellen",
    age: 23,
    city: "Rio de Janeiro"
}

console.log(person)

// Adicione uma nova propriedade sem alterar seu objeto inicial.
person.street = "Rua da Glória"

// Remova uma propriedade desse objeto.
delete person.age

//Mostre no console todas as propriedades desse objeto.
console.log(person)

// Crie um array chamado "cadastro" contendo ao menos 5 objetos.
//Cada objeto deve receber as seguintes propriedades: nome, idade, telefone, amigos.
let register = [ 
    {
        name: "Victor",
        age: 24,
        phoneNumber: 22999999991,
        friends: ["Gabi", "Pedro"]
    }, 
    {
        name: "Hellen",
        age: 23,
        phoneNumber: 22999999992,
        friends: ["Julia", "Igor"]
    }, 
    {
        name: "Vanessa",
        age: 34,
        phoneNumber: 22999999993,
        friends: ["Igor", "Miguel"]
    }, 
    {
        name: "Leticia",
        age: 22,
        phoneNumber: 22999999994,
        friends: ["Matheus", "João"]
    }, 
    {
        name: "Fernando",
        age: 23,
        phoneNumber: 22999999995,
        friends: ["Gabi", "Pedro"]
    }
]

//Na propriedade amigos, adicione ao menos 4 itens.
register[0].friends = ["Lara", "Vinicius", "Lucas", "Maria"]
register[1].friends = ["Lara", "Vinicius", "Lucas", "Maria"]
register[2].friends = ["Lara", "Vinicius", "Lucas", "Maria"]
register[3].friends = ["Lara", "Vinicius", "Lucas", "Maria"]
register[4].friends = ["Lara", "Vinicius", "Lucas", "Maria"]

console.log(register)

// Mostre no console o nome de um amigo de cada lista.
console.log(register[0].friends[1])
console.log(register[1].friends[3])
console.log(register[2].friends[2])
console.log(register[3].friends[1])
console.log(register[4].friends[0])
