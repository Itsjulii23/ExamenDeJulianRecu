Julian Campillos Martínez

Abrimos el gitbash en la carpeta
git init

--Vemos el status de git 

git status

--Cargar todos los archivos de nuestra carpeta

git add .

--Hacemos el commit para la subida de los archivos

git commit -m "Primera Version"

--Configuramos nuestro email y nuestro usuario

git config --global user.email j.campillosmartinez@gmail.com

git config --global user.name itsjulii23

--Hacemos el commit
git commit -m "Primera Version"

--Cambio de ramas

git branch -M main

--Subimos todo a nuestro repositorio

git remote add origin https://github.com/Itsjulii23/ExamenDeJulian.git
git push -u origin main
