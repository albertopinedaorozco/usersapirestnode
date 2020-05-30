# NodeJS + Express

## Users APIRest (base)
### Methods
- GET
- POST
- PUT 
- DELETE


| Entity  |End point  | GET  | POST  | PUT | DELETE  |
| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
|  Users | /users  |  List users |  New user <br>{'username':'', password:''} | * Update user |  - |
|   | /users/:id  |  * Get user |  - | -  |  * Delete user |
|   |  /login |  - |  Login user <br>{'username':'', password:''}  | -  |  - |

*Required authentication
```
headers: {
	'x-access-token': 'value',
	'Content-Type': 'application/json'
}
```

Create a .env file:
```
SERVER_HOST=0.0.0.0
SERVER_PORT=8080
SECRET=my-secret-key
```

## To run
```
npm start
```

## To test
```
npm run test[:watch]
```