import { Aprendiz, NivelEducativo } from './aprendiz.js';
import { Curso } from "./curso.js";
var cursos = [new Curso('Prácticas escenciales para el agilismo', 20, 90, true, 2021),
    new Curso('Ingenieria de software ara la web', 10, 80, true, 2021),
    new Curso('Principios de arquitectura y diseño de software', 25, 95, true, 2021),
    new Curso('Pruebas automatizadas de software', 25, 50, false, 2021)];
export var ap = new Aprendiz("Juan Pablo", "Reyes", "avatar.png", 30, NivelEducativo.POSGRADO, cursos);
console.log(ap.cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
var cursosTable = document.getElementById("cursos");
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2> <img src=\"./" + aprendiz.avatar + "\" height=\"100\"></td></tr>\n    <tr><td>Nombres: </td><td>" + aprendiz.nombres + "</td></tr>\n    <tr><td>Apellidos: </td><td>" + aprendiz.apellidos + "</td></tr>\n    <tr><td>Nivel Educativo: </td><td>" + aprendiz.nivelEducativo + "</td></tr>\n    <tr><td>Edad: </td><td>" + aprendiz.edad + "</td></tr>";
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b> Cursos certificados</b></td> <td>" + numeroCertificados + "</td>";
    estadisticasTable.appendChild(trElement);
}
function mostrarCursosAprendiz(aprendiz) {
    var cursosTbody = document.createElement("tbody");
    for (var _i = 0, _a = aprendiz.cursos; _i < _a.length; _i++) {
        var curso = _a[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + curso.nombre + "</td>\n                             <td>" + curso.horas + "</td>\n                             <td>" + curso.calificacion + "</td>\n                             <td>" + curso.certificado + "</td>\n                             <td>" + curso.anio + "</td>";
        cursosTbody.appendChild(trElement);
    }
    cursosTable.appendChild(cursosTbody);
}
