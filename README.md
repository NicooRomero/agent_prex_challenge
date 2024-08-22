# agent_prex_challenge
Technical Challenge - Relevamiento de Servidores

Agente que permita la recolección de la siguiente información del
sistema operativo de donde se ejecuta, y posteriormente la envíe a un API de recolección.

    ● Información sobre el procesador.
  
    ● Listado de procesos corriendo.
  
    ● Usuarios con una sesión abierta en el sistema.
  
    ● Nombre del sistema operativo.
  
    ● Versión del sistema operativo. 

Tecnologias: 

    ● NodeJs
  
    ● Express Js
  
Modulos Node: 

    ● os -> https://nodejs.org/api/os.html
  
    ● exec -> child_process -> https://nodejs.org/api/child_process.html
  

Explicación:

Ejecuta tres funciones para recopilar la informacion correspondiente y la devuelve en formato JSON.

    ● Funcion getInfoSys: Utiliza el módulo os para obtener información básica del sistema operativo y el procesador.

    ● Funciones getProcessList y getUserLogged: Ejecutan comandos del sistema operativo para obtener la lista de procesos y los usuarios con sesión activa.

    ● En Windows, tasklist y qwinsta son los comandos utilizados.
  
    ● En Linux, se utilizan ps aux y who.
  

Para utilizar en un servidor de manera LOCAL, descargar el repositorio y en una terminal ejecutar

    ● npm install -> para descargar las dependencias
  
    ● node local.js -> para correr el agente
  

Para utilizar en un servidor de manera REMOTA, descargar el repositorio y en una terminal ejecutar

    ● npm install -> para descargar las dependencias
  
    ● node index.js -> para correr el agente
  
    ● Configurar/cambiar el puerto en caso de ser necesario
  
    ● Realizar las consultas con Postman o similar EJ: http://localhost:puerto/api/v1/getInfo
  
