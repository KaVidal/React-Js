import brownies from "../assets/images/brownies.png";
import chipa from "../assets/images/chipa.png";
import alfajores from "../assets/images/alfajores.png";
import cupcakes from "../assets/images/cupcakes.png";
import dripcakeRosa from "../assets/images/DripcakeRosa.png";
import tortaCorazones from "../assets/images/TortaCorazones.png";
import tortaBrownie from "../assets/images/TortaBrownie.png";
import tortaFlores from "../assets/images/TortaFloresPintadas.png";
import carrotCake from "../assets/images/TortaCarrot.png";
import tortaCasamientoDosPisos from "../assets/images/TortaFloresCasamiento.png";

const products = [
    {
      id: 1,
      name: "Brownies",
      stock: "10 unidades",
      cost: "$80",
      image: brownies
    },
    {
      id: 2,
      name: "Chipa",
      stock: "30 unidades",
      cost: "$60",
      image: chipa
    },
    {
      id: 3,
      name: "Alfajores",
      stock: "50 unidades",
      cost: "$80",
      image: alfajores
    },
    {
      id: 4,
      name: "Cupcakes",
      stock: "100 unidades",
      cost: "$70",
      image: cupcakes
    },
    {
      id: 5,
      name: "Dripcake Rosa",
      stock: "20 unidades",
      cost: "$1000",
      image:dripcakeRosa
    },
    {
      id: 6,
      name: "Torta Corazones",
      stock: "15 unidades",
      cost: "$650",
      image: tortaCorazones
    },
    {
      id: 7,
      name: "Torta Brownie",
      stock: "15 unidades",
      cost: "$750",
      image: tortaBrownie
    },
    {
      id: 8,
      name: "Torta Flores",
      stock: "10 unidades",
      cost: "$900",
      image: tortaFlores
    },
    {
      id: 9,
      name: "Carrot Cake",
      stock: "5 unidades",
      cost: "$700",
      image: carrotCake
    },
    {
      id: 10,
      name: "Torta Casamiento Dos Pisos",
      stock: "15 unidades",
      cost: "$2000",
      image: tortaCasamientoDosPisos
    }
  ];

  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(products);
      }, 2000)
    })
  }