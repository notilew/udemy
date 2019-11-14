===================
=== INSTALAÇÕES ===
===================

* Atualizando pacotes
    - sudo apt update -y

* NodeJS
* Remove versão do NodeJS anterior (se existir)
    - sudo apt purge --auto-remove nodejs -y
    - sudo rm /etc/apt/sources.list.d/nodesource.list*

* Instalando o curl
    - sudo apt install curl -y

* Baixando NodeJS versão 12
    - curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
    - sudo apt install nodejs -y

* Instalando VSCode
    - sudo snap install code --classic

=======================
=== REPOSITÓRIO GIT ===
=======================

* https://github.com/luizomf/curso-js

===============================
=== EXTENSÕES VISUAL STUDIO ===
===============================

* Permite que o node execute códigos JavaScript dentro do VSCode.
    - code runner