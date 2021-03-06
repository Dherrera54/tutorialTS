import{Aprendiz, NivelEducativo} from './aprendiz.js';
import { Curso } from "./curso.js";

let cursos = [new Curso('Prácticas escenciales para el agilismo',20,90,true, 2021),
              new Curso('Ingenieria de software ara la web',10,80,true, 2021),
              new Curso('Principios de arquitectura y diseño de software',25,95,true, 2021),
              new Curso('Pruebas automatizadas de software',25,50,false, 2021)];   

export const ap = new Aprendiz( "Juan Pablo", "Reyes", "avatar.png", 30, NivelEducativo.POSGRADO, cursos)
console.log(ap.cursos);
let aprendizTable: HTMLElement= document.getElementById("aprendiz")!;
let estadisticasTable: HTMLElement= document.getElementById("estadisticas")!;
let cursosTable: HTMLElement= document.getElementById("cursos")!;
let btnFiltro: HTMLElement = document.getElementById("boton-filtro")!;
let textoBusqueda: HTMLInputElement = <HTMLInputElement>document.getElementById("texto-busqueda")!;

btnFiltro.onclick = () => {
        let text:string = textoBusqueda.value;
        text = (text==null)?"":text;
        cursosTable.getElementsByTagName("tbody")[0].remove();
        let cursosFiltrados: Curso[]= ap.cursos.filter(c => c.nombre.match(text))
        mostrarCursosAprendiz(cursosFiltrados);  
};

mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);

function mostrarDatosAprendiz(aprendiz : Aprendiz):void{
    let tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = `<tr><td colspan=2> <img src="./${aprendiz.avatar}" height="100"></td></tr>
    <tr><td>Nombres: </td><td>${aprendiz.nombres}</td></tr>
    <tr><td>Apellidos: </td><td>${aprendiz.apellidos}</td></tr>
    <tr><td>Nivel Educativo: </td><td>${aprendiz.nivelEducativo}</td></tr>
    <tr><td>Edad: </td><td>${aprendiz.edad}</td></tr>`;
    aprendizTable.appendChild(tbodyAprendiz);
}

function mostrarEstadisticas(aprendiz : Aprendiz):void{
    let numeroCertificados: number = aprendiz.darCursosCertificados();
    let trElement:HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td><b> Cursos certificados</b></td> <td>${numeroCertificados}</td>`;
    estadisticasTable.appendChild(trElement);

}

function mostrarCursosAprendiz(cursos: Curso[]):void{
    let cursosTbody: HTMLElement=document.createElement("tbody");
    for(let curso of cursos)
    {
        let trElement:HTMLElement = document .createElement("tr");
        trElement.innerHTML=`<td>${curso.nombre}</td>
                             <td>${curso.horas}</td>
                             <td>${curso.calificacion}</td>
                             <td>${curso.certificado}</td>
                             <td>${curso.anio}</td>`;
        cursosTbody.appendChild(trElement  );
    }
    cursosTable.appendChild(cursosTbody );
}
