# udemy-react-native-course

Para executar os projetos é necessário:

1 - Instalar o Android Studio

2 - Instalar o Nodejs (versão utilizada nos projetos: nodejs = 10.16.0; npm = 6.9.0)
    - Windows:
        https://nodejs.org/en/download/
    - Linux mint:
        apt-get update
        // install c++ compiler. It may already exists, but just in case.
        apt-get install build-essential libssl-dev

        curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
        sudo apt-get install -y nodejs
        sudo apt install npm

        // reload bash
        source ~/.bashrc

        //checando se instalou tudo certinho
        nodejs -v
        npm -version

3 - Criar as variaveis de ambiente:
    windows:
        - %ANDROID_HOME%\emulator
        - %ANDROID_HOME%\tools
        - %ANDROID_HOME%\tools\bin
        - %ANDROID_HOME%\platform-tools
    linux (mint):
        - sudo nano /etc/bash.bashrc
        //no final do arquivo, adicione os comandos:
            export ANDROID_HOME=$HOME/Android/Sdk
            export PATH=$PATH:$ANDROID_HOME/emulator
            export PATH=$PATH:$ANDROID_HOME/tools
            export PATH=$PATH:$ANDROID_HOME/tools/bin
            export PATH=$PATH:$ANDROID_HOME/platform-tools
        //salve o arquivo e reabra o console.
        //teste se foi salvo com sucesso:
        echo $ANDROID_HOME

4 - Crie um emulador no android studio no AVD Manager e compile um projeto para testar

/** 
    Sometimes there is permission issue running device telling to 
    grant permisson on `/dev/kvm`.
**/
sudo apt install qemu-kvm
sudo adduser <your username> kvm
sudo chown <your username> -R /dev/kvm
chattr -i /mnt //para salvar as alterações (usuário root)

5 - Busque pelos emuladores no console e abra: 
    - emulator -list-avds
    - emulator -avd nomeEmulador

6 - Instalar o React-Native usando o npm
    - npm install -g react-native-cli
    // Para criar um novo projeto, basta: 
        - react-native init nomeDoProjeto

7 - Para executar o projeto, aba a pasta do projeto e:
    - npm start
    em outro terminal:
    - react-native run-android
/**
    Pode dar erro de gradlew EACCES
    Para corrigir:
    * chmod 755 android/gradlew *
**/

referências:
    - https://medium.com/dooboolab/running-react-native-app-in-ubuntu-18-04-7d1db4ac7518
    - https://www.udemy.com/curso-react-native/


        

