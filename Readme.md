# Primer dia con Git y Github

lista de comandos de git

* para poder ver la version de git
ejecutamos en nuestra terminal:

```bash
git --version
git --v
```

* para configurar el correo y nombre(solo la primera vez en 
mi maquina)

```bash
git config --global user.email "mkitito2484@gmail.com"
git config --global user.name "MIGUELANGEL3924"
```

* crear el registro de los cambios realizados:
```bash
git commit -m "comentario corto y conciso"

```
* para ver una linea de tiempo de los commits
que hemos realizado:
``bash
git log

```

* para ver la configuracion de git

```bash
git config --list
```
* para inicializar nuestro repositorio en git:
```bash
git init
```
* para ver el estado de nuestro cambio:
```bash
git status
```

* para preparar nuestros archivos para la zona de
 stage(prepararlos para commit)
  
  
```bash
git add
git add nombredelarchivo.extension
```
