# Currency Exchange

<img width="250" alt="Screenshot 2023-02-27 at 16 03 45" src="https://user-images.githubusercontent.com/24418879/221607426-6ee885da-97b4-48d0-adab-930453c2fc41.png">
<img width="250" alt="Screenshot 2023-02-27 at 16 05 27" src="https://user-images.githubusercontent.com/24418879/221607587-77dd7cbc-fdfa-41ff-bfe1-29edae9040a9.png">
<img width="250" alt="Screenshot 2023-02-27 at 16 03 45" src="https://user-images.githubusercontent.com/24418879/221607636-bc171d9d-7e60-4276-bfc5-b4e8f021d5ca.png">


## About the app

This application implements the logic of displaying data on the exchange of one currency for another.
Graphical displays of statistics and ratings of currencies in a chart or table are also presented.
It is also possible to view the entire history of user requests with their repeated request or deletion from the history.
There is a logic for storing data between page reloads / browser closes. The application also has internationalization

## Approach and architecture

Application written in `Typescript`. The approach used as the architecture in the application is **feature sliced ​​design** ([Official site](https://feature-sliced.design/)).
`Redux (redux-toolkit)` is used to store data, and `redux-pesist` is used to store state between page reloads. The `redux-saga` library was used to work with the network (architecture was laid for the possibility of scaling the application to medium and large sizes). The `Matherial UI` and `styled-components` were used as component libraries. The application also implements test examples of both individual helpers/utils logic and entire components (`Jest` and `Enzyme` libraries)

## Get it Running

For normal operation in the root of the application, create a file `.env.local` and/or `env.production` and copy the contents of file `.env.example` into it

Version of the `node.js` used during the development of the application - 16.14.0

1. install Dependencies: run `npm i`
2. to run **Currency Exchange**: run `npm start`
3. tests: run `npm run test`
4. to build the project: run `npm run build`
5. to eject configs: run `npm run eject`

## Tech stack

- typescript
- react
- matherial-ui
- redux
- redux-saga
- redux-toolkit
- styled-components
- typescript
- jest
- enzyme
- axios

## Main Features

- Used intl library for support of different locales
- Implemented two variants of displayng of the data (table and chart)
- Added lazy routes loading
- Added toast notifications for indication of any issues/errors
- Add unit tests for features using jest/enzyme
