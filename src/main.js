import "./style.css";

document.addEventListener("DOMContentLoaded", function(){
    mostrarGrupos();
});


const grupos = [
    { nombre : "The Beatles", año : 1960 , activo_sn : true ,genero : "🎵 Pop Rock"},
    { nombre : "Queen", año : 1970 , activo_sn : false ,genero : "🎸 Rock"},
    { nombre : "AC DC", año : 1973 , activo_sn : true ,genero : "🤘 Hard Rock"},
    { nombre : "Ludwig van Beethoven", año : 1770 , activo_sn : false ,genero : "🎼 Clásica"},
    { nombre : "The Rolling Stones", año : 1962 , activo_sn : true ,genero : "🎸 Rock"}     
    
];

function mostrarGrupos() {

    const estiloNombre = "font-weight: bold; color:green; font-size:18px";

    grupos.forEach(function(item){
        console.log("%c" + item.nombre, estiloNombre);
        delete item.nombre;
        console.log(`Año: ${item.año}, Activo: ${item.activo_sn}, Género: ${item.genero}`);
    })
}



