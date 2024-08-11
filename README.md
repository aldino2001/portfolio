Bienvenue sur Docker
Ceci est un dépôt destiné aux nouveaux utilisateurs qui débutent avec Docker.

Vous pouvez l'essayer en utilisant la commande suivante :

```bash

docker run -d -p 8088:80 --name welcome-to-docker docker/welcome-to-docker
Ensuite, ouvrez http://localhost:8088 dans votre navigateur.

Construction
Les mainteneurs doivent consulter le fichier MAINTAINERS.md.

Pour construire et exécuter :

```bash
docker build -t welcome-to-docker .
docker run -d -p 8088:3000 --name welcome-to-docker welcome-to-docker
Ensuite, ouvrez http://localhost:8088 dans votre navigateur.

