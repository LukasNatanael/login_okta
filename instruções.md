# Login Auth (electron + auth)

## Criar um aplicativo OpenID Connect

- Instale o [Okta CLI](https://cli.okta.com/)

- Se registrando
```sh 
okta register 
```
```
firstname: nathan
lastname: luke
email: user@gmail.com
country: Brazil
```

- Logando no Okta
```sh 
okta login
```

- Criando o app
```sh 
okta apps create
``` 

- Faça as configurações padrões do electron
- Instale as seguintes dependências:
```sh 
    npm i -D electron@16.0.3 @okta/okta-auth-js@5.8.0
``` 
