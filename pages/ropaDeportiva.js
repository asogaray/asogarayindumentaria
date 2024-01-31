const ropaDeportiva = [
    {
    nombre: "Conjunto",
    descripcion: "Conjunto de jersey set sublimado",
    categoria: "Conjunto",
    img: "../multimedias/img/conjuntodeportivo1.png"
    },
    {
    nombre: "Short",
    descripcion: "Short de jersey set sublimada",
    categoria: "Remeras",
    img:"../multimedias/img/shortdeportivo1.png"
    },
    {
    nombre: "Remera",
    descripcion: "Remera de jersey set sublimada",
    categoria: "Remeras",
    img: "../multimedias/img/remeradeportiva5.png"
    },
    {
    nombre: "Remera",
    descripcion: "Remera de jersey set sublimada",
    categoria: "Remeras",
    img: "../multimedias/img/remeradeportiva6.png"
    },
    {
    nombre: "Remera",
    descripcion: "Remera de jersey set sublimada",
    categoria: "Remeras",
    img: "../multimedias/img/remeradeportiva1.png"
    },
    {
    nombre: "Remera",
    descripcion: "Remera de jersey set sublimada",
    categoria: "Remeras",
    img: "../multimedias/img/remeradeportiva2.png"
    },
    {
    nombre: "Remera",
    descripcion: "Remera de jersey set sublimada",
    categoria: "Remeras",
    img: "../multimedias/img/remeradeportiva3.png"
    },
    {
    nombre: "Remera",
    descripcion: "Remera de jersey set sublimada",
    categoria: "Remeras",
    img: "../multimedias/img/remeradeportiva4.png"
    },
    {
    nombre: "Remera",
    descripcion: "Remera de jersey set sublimada",
    categoria: "Remeras",
    img: "../multimedias/img/remeradeportiva7.png"
    },
    {
    nombre: "Remera",
    descripcion: "Remera de jersey set sublimada",
    categoria: "Remeras",
    img:"../multimedias/img/remeradeportiva9.png"
    },
    {
    nombre: "Remera",
    descripcion: "Remera de jersey set sublimada",
    categoria: "Remeras",
    img:"../multimedias/img/remeradeportiva17.png"
    },
    {
    nombre: "Remera",
    descripcion: "Remera de jersey set sublimada",
    categoria: "Remeras",
    img:"../multimedias/img/remeradeportiva8.png"
    },
    {
    nombre: "Remera",
    descripcion: "Remera de jersey set calado sublimada",
    categoria: "Remeras",
    img:"../multimedias/img/remeradeportiva16.png"
    },
    {
    nombre: "Remera",
    descripcion: "Remera de jersey set calado sublimada",
    categoria: "Remeras",
    img:"../multimedias/img/remeradeportiva11.png"
    },
    {
    nombre: "Remera",
    descripcion: "Remera de jersey set calado sublimada",
    categoria: "Remeras",
    img:"../multimedias/img/remeradeportiva12.png"
    },
    {
    nombre: "Remera",
    descripcion: "Remera de jersey set sublimada",
    categoria: "Remeras",
    img:"../multimedias/img/remeradeportiva13.png"
    },
    {
    nombre: "Remera",
    descripcion: "Remera de jersey set sublimada",
    categoria: "Remeras",
    img:"../multimedias/img/remeradeportiva14.png"
    },
    {
    nombre: "Remera",
    descripcion: "Remera de jersey set sublimada",
    categoria: "Remeras",
    img:"../multimedias/img/remeradeportiva10.png"
    },
    {
    nombre: "Remera",
    descripcion: "Remera de jersey set sublimada",
    categoria: "Remeras",
    img:"../multimedias/img/remeradeportiva15.png"
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