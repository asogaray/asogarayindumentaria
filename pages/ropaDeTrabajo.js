const ropaDeportiva = [
    {
    nombre: "Chomba",
    descripcion: "Chombas de jersey de algodon bordadas",
    categoria: "Chombas",
    img:"../multimedias/img/chombatrabajo1.png"
    },
    {
    nombre: "Remera",
    descripcion: "Remeras de jersey de algodon estampadas",
    categoria: "Remeras",
    img:"../multimedias/img/remeratrabajo1.png"
    },
    {
    nombre: "Remera",
    descripcion: "Remeras de jersey de algodon estampadas",
    categoria: "Remeras",
    img:"../multimedias/img/remeratrabajo2.png"
    },
    {
    nombre: "Remera",
    descripcion: "Remeras de jersey de algodon estampadas",
    categoria: "Remeras",
    img:"../multimedias/img/remeratrabajo3.png"
    },
    {
    nombre: "Camisa",
    descripcion: "Camisas de grafa de 6 Oz homologada, bordadas y con reflectivo ",
    categoria: "Camisas",
    img: "../multimedias/img/camisastrabajo1.png"
    },
    {
    nombre: "Camisa",
    descripcion: "Camisas de grafa de 6 Oz homologada, bordadas y con reflectivo",
    categoria: "Camisas",
    img: "../multimedias/img/camisastrabajo2.png"
    },
    {
    nombre: "Camisa",
    descripcion: "Camisas mujer de batista con vista de cordón ratón",
    categoria: "Camisas",
    img: "../multimedias/img/camisastrabajo3.png"
    },
    {
    nombre: "Camisa",
    descripcion: "Camisas hombre de oxford",
    categoria: "Camisas",
    img: "../multimedias/img/camisastrabajo4.png"
    },
    {
    nombre: "Chaleco",
    descripcion: "Chalecos de grafa 6 Oz estampados",
    categoria: "Remeras",
    img: "../multimedias/img/chalecotrabajo1.png"
    },
    {
    nombre: "Chaleco",
    descripcion: "Chalecos de grafa 6 Oz estampados",
    categoria: "Chalecos",
    img: "../multimedias/img/chalecotrabajo2.png"
    },
    {
    nombre: "Chaleco",
    descripcion: "Chalecos de grafa 6 Oz estampados",
    categoria: "Chalecos",
    img:"../multimedias/img/chalecotrabajo3.png"
    },
]

const ropaDeportivaContenido = document.getElementById("contenidoRopaDeportiva")

ropaDeportiva.forEach((deportiva)=>{
    let contenido = document.createElement("div");
    contenido.className = 'card';
    contenido.innerHTML = `
    <img src="${deportiva.img}">
    <h3 class= "titulo">${deportiva.nombre}</h3>
    <p class= "text">${deportiva.descripcion}</p>
    `;

    ropaDeportivaContenido.append(contenido)
});