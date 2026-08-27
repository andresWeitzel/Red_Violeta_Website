
# Proyecto Web con Angular y Bootstrap

**Diseño y Desarrollo de una aplicación web para denuncias, ayuda e información sobre violencia de género, discriminación, etc. Aplicando Angular y Bootstrap**

</br>

### Aplicación Web: https://web-app-denuncias.netlify.app/

</br>

</br>

## Vista de Inicio de la App Web 1/4

![Index app](https://github.com/andresWeitzel/Graphics/blob/main/Proyectos/DenunciasOnlineAngular_app/Captura%20de%20pantalla%20(320).png)

## Vista de Inicio de la App Web 2/4

![Index app](https://github.com/andresWeitzel/Graphics/blob/main/Proyectos/DenunciasOnlineAngular_app/Captura%20de%20pantalla%20(322).png)


## Vista de Inicio de la App Web 3/4

![Index app](https://github.com/andresWeitzel/Graphics/blob/main/Proyectos/DenunciasOnlineAngular_app/Captura%20de%20pantalla%20(321).png)

## Vista de Inicio de la App Web 4/4

![Index app](https://github.com/andresWeitzel/Graphics/blob/main/Proyectos/DenunciasOnlineAngular_app/Captura%20de%20pantalla%20(323).png)

</br>

<hr>

</br>

| Tecnologías | Versión |
| ------------- | ------------- |
| Angular |   22.1.x |
| Bootstrap | 4.5.x  |
| Netlify | - |
| Visual Studio Code | 1.51.1  |
| Git | 2.29.1.windows.1  |
| Angular CLI | 22.1.x |

</br>

## Repositorios Oficiales(documentación)

#### Bootstrap:   https://getbootstrap.com/
#### Angular:     https://angular.io/tutorial/toh-pt0
#### IDE:         https://code.visualstudio.com/download
#### Git:         https://git-scm.com/docs
#### Angular CLI: https://github.com/angular/angular-cli
#### Netlify CLI: https://www.npmjs.com/package/netlify-cli

</br>

## Más Información


</br>

## Subir el proyecto al repositorio con git desde el bash de visual studio Code 

#### 1)Creamos un nuevo repositorio en GitHub

#### 2)Inicializamos nuestro repositorio local .git
* git init

#### 3)Agregamos lo desarrollado a nuestro repo local
* git add *

#### 4)Agregamos lo que tenemos en nuestro repo local al área de Trabajo.
* git commit -m "agrega un comentario entre comillas"

### 5)Le indicamos a git donde se va a almacenar nuestro proyecto(fijate en tu repositorio de github cual es el enlace de tu proyecto(esta en code)).
* git remote add origin https://github.com/andresWeitzel/WebAppAngularBootstrap.git

### 6)Subimos nuestro proyecto.
* git push -u origin master

</br>

## Actualización del repositorio del proyecto con git desde el bash de visual studio code

### 1)Visualizamos las modificaciones realizadas en local
* git status

### 2)Agregamos lo modificado al area de trabajo
* git add *

### 3)Confirmamos las modificaciones realizadas
* git commit -m "Tu commit entre comillas"

### 4)Sincronizamos y traemos todos los cambios del repositorio remoto a la rama en la que estemos trabajando actualmente.
##### Desconozco porqué tengo que ejecutar este comando, supongo que será porque no estoy trabajando con branchs en mi proyecto, el main por defecto de gitHub ahora es mi master(Yo realicé esa modificación para mejor visualización)).
* git pull https://github.com/andresWeitzel/WebAppAngularBootstrap.git

### 5)Enviamos todos los cambios al repo en github
* git push https://github.com/andresWeitzel/WebAppAngularBootstrap.git

</br>

## Deploy de la app desde el bash de visual studio code

### 1) Instalar el cli global
 * npm i netlify-cli
 * netlify login
 * netlify status
 * netlify --version

### 2) Build 
 * ng build --prod 

### 3) Deploy
* netlify deploy --prod
#### IMPORTANTE: Luego de ingresar este comando, asegurarse de colocar correctamente el `Publish directory` , sino no se va a deployar correctamente, en general es  `dist/'nombre de tu proyecto sin comillas' ` 

