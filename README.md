# Instruções para buildar os projetos:

## 1. Instalar o Android Studio

## 2. Instalar o Nodejs e npm
###### As versões utilizadas aqui foram: nodejs 10.16.0 e npm 6.9.0
**No Windows:**

https://nodejs.org/en/download/

**No Linux (testado no mint)**

2.1 Abra o console e execute:

`apt-get update`

2.2 Instale o c++ compiler. provavelmente já existe, mas é bom ter certeza.

`apt-get install build-essential libssl-dev`

2.3 Instalando o nodejs e npm
```
curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt install npm
```
2.4 Reload do console

`source ~/.bashrc` ou `source ~/.profile`

2.5 Checando se instalou tudo corretamente
```
nodejs -v
npm -version
```

## 3. Criar as variaveis de ambiente
**No Windows:**

3.1 Adicione as seguintes variáveis:
```
%ANDROID_HOME%\emulator
%ANDROID_HOME%\tools
%ANDROID_HOME%\tools\bin
%ANDROID_HOME%\platform-tools
```
**No linux (testado no mint):**

3.1 Execute o comando para abrir o arquivo bashrc

`sudo nano /etc/bash.bashrc`

3.2 No final do arquivo, adicione os comandos:
```
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
3.3 Salve o arquivo e reabra o console.

3.4 Teste se foi salvo com sucesso

`echo $ANDROID_HOME`

## 4. Instalar o React-Native usando o npm
`npm install -g react-native-cli`
##### Para criar um novo projeto, basta abrir a pasta do projeto e executar o comando: 
`react-native init nomeDoProjeto`

## 5. Criar um emulador
5.1 Abra o Android Studio

5.2 Crie ou abra um projeto

5.3 Clique em AVD Manager

5.4 Crie um emulador da maneira que preferir

5.5 Compile o projeto utilizando o emulador criado para baixar tudo automaticamente

> As vezes acontece um problema de permissão para rodar o emulador pedindo para dar permissão em `/dev/kvm`, se for o caso:
```
sudo apt install qemu-kvm
sudo adduser <your username> kvm
sudo chown <your username> -R /dev/kvm
```
Para salvar as alterações do kvm (utilizando o usuário root)

`chattr -i /mnt`

## 6. Executando o emulador
6.1 Busca o nome dos emuladores 

`emulator -list-avds`

6.2 Executa o emulador

`emulator -avd nomeEmulador`

## 7. Finalmente, para buildar
7.1 Acesse a pasta do projeto

`cd exemplo/caminhoProjeto/curso-react-native`

7.2 Inicie o npm

`npm start`

7.3 Abra outro terminal para executar o aplicativo

`react-native run-android`

> Caso ocorra o erro de gradlew EACCES, execute `chmod 755 android/gradlew`

## Referências:
[Running React Native App in Ubunto](https://medium.com/dooboolab/running-react-native-app-in-ubuntu-18-04-7d1db4ac7518)

[Curso da Udemy](https://www.udemy.com/curso-react-native/)


        

