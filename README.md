## 프로젝트 목적
- ReactJs로 간단한 영화 웹 페이지 만들기

## 프로젝트 생성하기
```shell
npx create-react-app {projectName}
```
## 설치
prop-types
```shell
#npm
npm install prop-types

#yarn
yarn add prop-types
```

gh-pages
```shell
#npm
npm install gh-pages

#yarn
yarn add gh-pages
```

## Component Lifecycle
- Mounting
  - constructor() : component가 mount 되기 전 호출, 매서드 바인딩이나 state 초기화하는 작업이 없으면 구현하지 않아도된다.
  - render() 
  - componentDidMount() : component가 처음 render 되었을 때 호출 
- Updating
  - render()
  - componentDidUpdate() : 갱신이 일어난 직후에 호출된다. 이 메서드는 최초 렌더링에서는 호출되지 않는다.
- Unmounting
  - componentWillUnmount() :  컴포넌트가 마운트 해제되어 제거되기 직전에 호출, 이메서드에서 타이머 제거, 네트워크 요청 취소 등 componentDidMount()에서 생성 후 정리할 작업 수행

## prop-types
- props가 내가 원하는 porps인지 확인 (필수값, 타입 ..)
- 예제)
```javascript
import React from "react";
import PropsTypes from "prop-types"

function Test({name, age, gender}) {
  return(<h1>{name},{age},{gender}</h1>)
}

Test.prototype = {
  name: PropsTypes.string.isRequired,
  age : PropsTypes.number,
  gender : PropstTpes.string
}

...

```

## gh-pages 사용법
1. 설치 
2. package.json에 homepage 추가, projectName은 소문자로 사용
    - "homepage": "https://{github userNmae}.github.io./{projectName}"
3. package.json에 deply 스크립트 추가
    - "deploy": "gh-pages -d build",
    - "predeploy": "npm run build"
4. npm run deploy 실행


