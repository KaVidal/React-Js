import brownies from "../assets/images/brownies.png";
import chipa from "../assets/images/chipa.png";
import alfajores from "../assets/images/alfajores.png";
import cupcakes from "../assets/images/cupcakes.png";
import dripcakeRosa from "../assets/images/DripcakeRosa.png";
import tortaCorazones from "../assets/images/TortaCorazones.png";
import tortaBrownie from "../assets/images/TortaBrownie.png";
import tortaFlores from "../assets/images/TortaFloresPintadas.png";
import carrotCake from "../assets/images/TortaCarrot.png";
import tortaCasamientoDosPisos from "../assets/images/TortaGrandeCasamiento.png";

const products = [
    {
      id: 1,
      categoryId: "Dulce",
      category: {
        name: "Dulce",
        id: 2
      },
      name: "Brownies",
      stock: 10,
      cost: "80",
      image: brownies
    },
    {
      id: 2,
      categoryId: "Salado",
      category: {
        name: "Salado",
        id: 4
      },
      name: "Chipa",
      stock: 30,
      cost: "60",
      image: chipa
    },
    {
      id: 3,
      categoryId: "Dulce",
      category: {
        name: "Dulce",
        id: 2
      },
      name: "Alfajores",
      stock: 50,
      cost: "80",
      image: alfajores
    },
    {
      id: 4,
      categoryId: "Dulce",
      category: {
        name: "Dulce",
        id: 2
      },
      name: "Cupcakes",
      stock: 100,
      cost: "70",
      image: cupcakes
    },
    {
      id: 5,
      categoryId: "Dulce",
      category: {
        name: "Dulce",
        id: 2
      },
      name: "Dripcake Rosa",
      stock: 20,
      cost: "1000",
      image: dripcakeRosa
    },
    {
      id: 6,
      categoryId: "Dulce",
      category: {
        name: "Dulce",
        id: 2
      },
      name: "Torta Corazones",
      stock: 15,
      cost: "650",
      image: tortaCorazones
    },
    {
      id: 7,
      categoryId: "Dulce",
      category: {
        name: "Dulce",
        id: 2
      },
      name: "Torta Brownie",
      stock: 15,
      cost: "750",
      image: tortaBrownie
    },
    {
      id: 8,
      categoryId: "Dulce",
      category: {
        name: "Dulce",
        id: 2
      },
      name: "Torta Flores",
      stock: 10,
      cost: "200",
      image: tortaFlores
    },
    {
      id: 9,
      categoryId: "Dulce",
      category: {
        name: "Dulce",
        id: 2
      },
      name: "Carrot Cake",
      stock: 5,
      cost: "700",
      image: carrotCake
    },
    {
      id: 10,
      categoryId: "Dulce",
      category: {
        name: "Dulce",
        id: 2
      },
      name: "Torta Casamiento Dos Pisos",
      stock: 15,
      cost: "2000",
      image: tortaCasamientoDosPisos
    }
  ];

  export default products;
  