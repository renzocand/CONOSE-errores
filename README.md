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
sudo adduser renzo
sudo usermod -aG sudo renzo
sudo nano /etc/ssh/sshd_config  //Cambiar PasswordAuthentication no, PermitRootLogin no
sudo service ssh restart 


# INSTALAR NODEJS
------------------

sudo apt-get update
sudo apt-get install git
sudo apt-get install nginx
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash  //Instalar nvm(gestor dependencias node)
exit
nvm install // asi instalara la ultima v de node y npm, con un espacio puedes poner la version que quieras (nvm list)
git clone (repositorio)
cd repositorio
npm install //Instala las dependencias de nodejs
npm install -g pm2
pm2 start server/index.js --name=cm //Tienes que estar dentro del projecto
pm2 restart cm
pm2 startup   //Para que pm2 se inicie cuando se prenda la pc (copiar el comando que sale y iniciarl
//pegar el comando que salio, si se apaga el servidor se reiniciara e servicio ya esta
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000   //Redirige el puerto 80 al 3000
sudo service nginx restart





### COMANDO PARA IMPORTAR MONGO
mongoimport --jsonArray --db excel --collection excelcm --file C:/Users/zapadan/Documents/ProjectosAde/03-excelToJson/db/data.json
