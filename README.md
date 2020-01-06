# PRIMERAS CONFIGURACIONES SERVIDOR LINUX UBUNTU
------------------------------------------------

### CONECTARTE POR SSH
- ssh-keygen -t rsa //DigitalOcean Creas tu propia clave1
- ssh root@ip //Entras Digital Ocean
- ssh -i "publicKey" ubuntu@ip //Asi entras por AWS

### CREAR USUARIO AWS
- sudo adduser renzo
- sudo usermod -aG sudo renzo
- sudo nano /etc/ssh/sshd_config  // Cambiar PasswordAuthentication yes
- sudo systemctl restart sshd // Y Listo puedes poner exit

### CREAR USUARIO DIGITALOCEAN
- sudo adduser renzo
- sudo usermod -aG sudo renzo
- su - renzo // Entras al usuario renzo
- mkdir .ssh
- chmod 700 .ssh // Despues creas una llave publica 
- nano .ssh/authorized_keys // copias la llave publica q esa en tu pc y la pegas ahí
- vi id_rsa.pub // con ese comando "vi" te permitira copiar la llave publica,sales con":q"
- chmod 600 .ssh/authorized_keys // pones permisos de nuevo y con eso ya puedes entrar al usuario renzo
- sudo nano /etc/ssh/sshd_config  //Cambiar PasswordAuthentication no, PermitRootLogin no
- sudo service ssh restart 


# INSTALAR NODEJS
------------------

- sudo apt-get update
- sudo apt-get install git
- sudo apt-get install nginx
- curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash  //Instalar nvm(gestor dependencias node)
- exit
- nvm install // asi instalara la ultima v de node y npm, con un espacio puedes poner la version que quieras (nvm list)
- nvm install node // Instala la ultima version mode

- PEGAR ESTE COMANDO PARA PODER USAR SUDO NPM
```
  n=$(which node); \
  n=${n%/bin/node}; \
  chmod -R 755 $n/bin/*; \
  sudo cp -r $n/{bin,lib,share} /usr/local
  ```
- git clone (repositorio)
- cd repositorio
- npm install //Instala las dependencias de nodejs
- npm install -g pm2
- pm2 start server/index.js --name=cm //Tienes que estar dentro del projecto
- pm2 restart cm
- pm2 startup   //Para que pm2 se inicie cuando se prenda la pc (copiar el comando que sale y iniciarl
- //pegar el comando que salio, si se apaga el servidor se reiniciara e servicio ya esta
- sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000   //Redirige el puerto 80 al 3000
sudo service nginx restart



# INSTALAR MONGODB
--------------------------

- https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/     // Fuente
- sudo apt-get update
- sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
- echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
- sudo apt-get update
- sudo apt-get install -y mongodb-org 

- sudo nano /etc/systemd/system/mongodb.service // O SINO .... ESTAMEJOR

- sudo nano /lib/systemd/system/mongodb.service


### PEGAR EN EL FICHERO ESTO
[Unit]
Description=High-performance, schema-free document-oriented database
After=network.target

[Service]
User=mongodb
ExecStart=/usr/bin/mongod --quiet --config /etc/mongod.conf

[Install]
WantedBy=multi-user.target

### Seguimos con comandos
- systemctl list-unit-files --type=service       // Y buscar mongod.service
- sudo systemctl unmask mongod      //Si mongod.service esta mask 
- sudo systemctl start mongod
- sudo systemctl status mongod
- sudo systemctl enable mongod   //Con esto se activara mongo al prender la pc

### Importar una base de datos en MongoDB
- mongoimport --jsonArray --db excel --collection excelcm --file C:/Users/zapadan/Documents/ProjectosAde/03-excelToJson/db/data.json

### Comandos MongoDB SHELL
- mongo       //Para entrar a los comandos
- show dbs	
- show collections
- db.usuarios.drop()    //Elimina la coleccion de usuarios
- db.usuarios.find()      //Lista todo
