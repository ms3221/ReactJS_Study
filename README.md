# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### useState 상태값 변환 
 💢 useState에서 값을 변환할 때 직접적으로 값을 변환시켜주는 행위 (const [a, setA] = useState([0]), a[0]=1) 이런행위는 나쁜습관이다.
   항상 사본을 만들어주고난 다음 사본을 수정한 후에 setA(수정값) 함수를 이용해서 값을 변환할 수 있도록 기억합시다!    

###  react 구문법 class 사용주의  
 💢 react 구문법에서 class를 사용해서 컴포넌트를 만드는 부분이있다. 이 문법을 사용시에는 class안에서 함수를 만드는 방법을 참고하고 
    this라는 키워드가 매우중요하다.