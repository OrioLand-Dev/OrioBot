> **⚠ AVISO ⚠**  
> Este bot es un fork de Node por lo que la base del codigo ha sido creada por [LyricalString](https://github.com/LyricalString) 😄

<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="🤖 Node" src="https://i.ibb.co/wNhBGyv/logo-3.png">  

# OrioBot

[![](https://img.shields.io/github/languages/top/andiricum2/OrioBot)](https://bot.orioland.com)

> Este bot es usado por más de 500 usuarios de Discord.
OrioBot es un bot multifunción, multilenguaje, programado en [Discord.js](https://discord.js.org) y [Mongoose](https://mongoosejs.com/docs/api.html) por [LyricalString](https://github.com/LyricalString) y por [el equipo de OrioLand](https://new.orioland.com).  
¡Añade una ⭐ al repositorio para promocionar el proyecto!

## Requisitos

1. Token de Discord Developers **[Guía](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. Java (para ejecutar Lavalink del módulo de música), se necesita java 16 o superior para ejecutar esto.
3. Node.js v16.0.0 o una más reciente. (Para esto se necesita tener instalado VS 2017 o superior con el modulo C++)


## 🚀 Guía de Instalación

```sh
git clone https://github.com/andiricum2/OrioBot
cd (ruta de los archivos)
npm install
```

⚠️ Luego de la instalación, antes de ejecutar `node index.js` y `java -jar Lavalink2.jar`, deberás de crear un archivo `.env` y añadir las credenciales tal como se muestra más abajo. 

## ⚙️ Configuración

Siguiendo el formato más abajo, deberás de crear un archivo llamado `.env` para añadir las credenciales.

⚠️ **Nota: Nunca publiques o muestres tu token o las claves de API's públicamente** 

```json
mode = "[development/production]"
token = "token del bot"
lang = "[es_ES/en_US]"
prefix = "prefijo predefinido"
botID = "id del usuario bot"
MONGO_URL =  "url de Mongo para que se conecte el bot"
EMBED_COLOR = "color predefinido para los embeds"
errorWebhookID = "id del webhook donde se enviarán los errores"
errorWebhookToken = "token del webhook donde se enviarán los errores"
errorChannel = "id del canal de errores"
topggToken = "token de topGG"  //PARA EL COMANDO DE VOTO
clientIDSpotify = "id del cliente de Spotify"         //NO ES NECESARIO YA QUE EL MODULO DE SPOTIFY NO FUNCIONA
clientSecretSpotify = "token del cliente de Spotify"  //NO ES NECESARIO YA QUE EL MODULO DE SPOTIFY NO FUNCIONA
guildAddWebhookID = "id del webhook donde se enviarán las notificaciones para nuevos servidores"
guildAddWebhookToken = "token del webhook donde se enviarán las notificaciones para nuevos servidores"
OsuSecret = "clave API para OSU" //COMANDO SIN TERMINAR
trnAPIKey = "clave API para TRN (comando de fnprofile)" //COMANDO SIN TERMINAR
```
🚨 **Como mínimo deberás de rellenar hasta el MONGO_URL para poder iniciarlo, el resto te darán error los comandos que lo usen.** 🚨



## 🛠️ Características

### Bot completo

Lista de funciones:
*   ✉️ Prefijo global o prefijo por servidor, además de la propia mención al bot.
*   🇪🇸 Multilenguaje (Español e Inglés)
*   ⚙️ Configuración en Mongo por servidor (prefijo, canales de escucha, etc...)
*   😀 Comandos únicos en embeds



### Categorías de comandos

Node tiene más de 100 comandos repartidos en  **7 categorías**:

*   👩‍💼 **Administración**
*   🛡 **Moderación**
*   🎵 **Música**
*   😂 **Diversión**
*   🚩 **Información y Utilidades**
*   🫂 **Interacción**
*   💻 **Desarrollo** (Comandos que estaban en desarrollo, sin acabar)

## 📎 Links

*   [Discord](https://discord.orioland.com)
*   [Github](https://github.com/andiricum2)

## 🤝 Contribuciones

Antes de **reportar un error**, por favor asegúrate de que no ha sido reportado/sugerido anteriormente.   
Si tienes cualquier duda, pregúntanosla en el [servidor de Discord](https://discord.orioland.com) en vez de crear un reporte.
Si quieres contribuir, siéntete libre de bifurcar el repositorio y solicitar una pull request.

## 📝 Créditos

* [@lyricalstring](https://github.com/LyricalString) Por crear el bot y dejarlo a disposición de todos.

## 📜 Licencia

OrioBot esta licenciado bajo la licencia GPL 3.0. Revisa el archivo `LICENSE` para más información. Si planeas usar cualquier parte de este código base en tu propio bot, estaríamos agradecido si incluyeras a LyricalString y al Equipo de OrioLand en los créditos.
