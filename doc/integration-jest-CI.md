# Integración de Jest con CI usando Travis CI

Accedemos a la web de [Travis](https://travis-ci.org) y nos registramos con github

Tendremos que crear un yml donde está la configuración con los pasos a seguir:

```yml
# .travis.yml

language: node_js
cache:
  directories:
    - ~/.npm
# version de node
node_js:
  - '12'
# valor de git, en este caso hasta la tercera capa
git:
  depth: 3
# Los scripts de nuestro proyecto que queremos que ejecute (da igual que nosotros tengamos npm)
script:
  - yarn test
  - yarn build
# Una vez que pasen estos scripts hará el deploy
deploy:
  # El provider para el deploy en este caso es githug pages
  provider: pages
  # Para limpiar caché y otras cosas
  edge: true
  skip-cleanup: true
  keep-history: true
  # El token que vamos a necesitar y que generaremos
  github-token: $GITHUB_TOKEN
  # Cual es el directorio que una vez generado debemos mandar a producción
  local-dir: dist/
  # Puede ser master o esta branch por ejemplo que estamos creando gh-pages
  target-branch: gh-pages
  commit_message: "Deploy release ${TRAVIS_TAG}"
  # Va a estar escuchando master
  on:
    branch: master
```

## Crear el token de github

1. Generamos token en github

Accedemos a github **=>** settings **=>** developer settings **=>** Personal access tokens **=>** Generate new token **=>** Ponemos el nombre que queramos (ej. Travis-ci-jest) y le damos acceso a (hacemos check en):

- repo

- read:repo:hook (en admin:repo_hook)

**↓**

Y hacemos click en _Generate token_ y **=>** lo copiamos

1. Asociamos el token con travis

Accedemos a la página de travis **=>** settings **=>** Click en sync account (para que se sincronice con nuestros repos de github) **=>** Buscamos nuestro repo y hacemos click en settings => 

Rellenamos:

- el campo _NAME_ con ```GITHUB_TOKEN```
- el campo _VALUE_ con el token copiado de github

**↓**

Y hacemos click en _Add_

Ahora podemos hacer push a una rama (que no es master) con nuestro archivo de configuración yml