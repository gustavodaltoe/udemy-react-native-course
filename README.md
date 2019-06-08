# udemy-react-native-course

### Instruções para buildar os projetos:

## 1. Instalar o Android Studio

## 2. Instalar o Nodejs e npm
###### As versões utilizadas aqui foram: nodejs 10.16.0 e npm 6.9.0
        **No Windows:**
        2.1 https://nodejs.org/en/download/
        **No Linux (testado no mint)**
        2.1 Abra o console

        2.2 apt-get update
        // instale o c++ compiler. provavelmente já existe, mas é bom ter certeza.
        2.3 apt-get install build-essential libssl-dev

        2.4 curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
        2.5 sudo apt-get install -y nodejs
        2.6 sudo apt install npm

        // reload bash
        2.7 source ~/.bashrc

        //checando se instalou tudo certinho
        2.8 nodejs -v
        2.9 npm -version

## 3. Criar as variaveis de ambiente
    **No Windows:**
        3.1 Adicione as seguintes variáveis:
        %ANDROID_HOME%\emulator
        %ANDROID_HOME%\tools
        %ANDROID_HOME%\tools\bin
        %ANDROID_HOME%\platform-tools
    **No linux (testado no mint):**
        // abrir arquivo como root
        3.1 sudo nano /etc/bash.bashrc
        3.2 no final do arquivo, adicione os comandos:
            export ANDROID_HOME=$HOME/Android/Sdk
            export PATH=$PATH:$ANDROID_HOME/emulator
            export PATH=$PATH:$ANDROID_HOME/tools
            export PATH=$PATH:$ANDROID_HOME/tools/bin
            export PATH=$PATH:$ANDROID_HOME/platform-tools
        3.3 salve o arquivo e reabra o console.
        3.4 teste se foi salvo com sucesso:
            echo $ANDROID_HOME

## 4. Instalar o React-Native usando o npm
        4.1 npm install -g react-native-cli
        // Para criar um novo projeto, basta abrir a pasta do projeto e executar o comando: 
        react-native init nomeDoProjeto

## 5. Crie um emulador no android studio em AVD Manager e compile um projeto
    >As vezes acontece um problema de permissão para rodar o emulador pedindo para dar permissão em `/dev/kvm`, se for o caso:
        sudo apt install qemu-kvm
        sudo adduser <your username> kvm
        sudo chown <your username> -R /dev/kvm
        // para salvar as alterações (usuário root)
        chattr -i /mnt

## 6. Executando o emulador
        // busca o nome dos emuladores 
        6.1 emulator -list-avds
        // executa o emulador
        6.2 emulator -avd nomeEmulador

## 7. Para executar o projeto, entre na pasta pelo terminal
        // navega entre os arquivos do sistema
        7.1 cd exemplo/caminhoProjeto/curso-react-native
        7.2 npm start
        7.3 Abra outro terminal
        7.4 react-native run-android
    >Caso ocorra o erro de gradlew EACCES, execute `chmod 755 android/gradlew`

### Referências:
    https://medium.com/dooboolab/running-react-native-app-in-ubuntu-18-04-7d1db4ac7518
    https://www.udemy.com/curso-react-native/


        

