## API Routes

| Routes                            | Parameters | Body                      | Description         |
| ----------                        | ---------- | ----------                | ----------          |
| `GET` /api/v1/user/               | ---------- | ----------                | Get user details    |
| `POST` /api/v1/user/createuser    | ---------- | full, firstname, lastname, username, email, password |
| `POST` /api/v1/user/login         | ---------- | username, password |
| `DELETE` /api/v1/user/deleteuser  | ---------- | password |
| `PUT` /api/v1/user/changepassword | ---------- | oldpassword, newpassword |
| `POST` /api/v1/user/logout        | ---------- | ---------- | 
| `POST` /api/v1/address/create     | ---------- | houseNo, street, city, state, country, pincode |
| `PUT` /api/v1/address/modify      | ---------- | houseNo, street, city, state, country, pincode |
| `DELETE` /api/v1/address/delete   | ---------- | ---------- |
| `GET` /api/v1/address/get         | ---------- | ---------- |
| `GET` /api/v1/products/get        | ---------- | ---------- |
| `POST` /api/v1/cart/add           | ---------- | item_id, quantity |
| `PUT` /api/v1/cart/modify         | ---------- | item_id, quantity |
| `DELETE` /api/v1/cart/delete      | ---------- | ---------- |
| `GET` /api/v1/cart/get            | ---------- | ---------- |
| `POST` /api/v1/wish/add           | ---------- | item_id |
| `DELETE` /api/v1/wish/delete      | ---------- | ---------- |
| `GET` /api/v1/wish/get            | ---------- | ---------- |
| `POST` /api/v1/order/new          | ---------- | 
| `PUT` /api/v1/order/modify        | ---------- |
| `GET` /api/v1/order/get           | ---------- | ---------- |
| `POST` /api/v1/orderitem/add      | ---------- |
| `PUT` /api/v1/orderitem/modify    | ---------- |
| `DELETE` /api/v1/orderitem/delete | ---------- | ---------- |
| `GET` /api/v1/orderitem/get       | ---------- | ---------- |
| `POST` /api/v1/payment/new        | ---------- |
| `GET` /api/v1/payment/get         | ---------- | ---------- |