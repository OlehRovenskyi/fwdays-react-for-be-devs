import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropTypes from "prop-types";
import {UserInfo} from "./components/001_UserInfo/UserInfo.jsx";
import {Clock} from "./components/002_Clock/Clock.jsx";
import {ReactEvent} from "./components/003_ReactEvent/ReactEvent.jsx";
import {Counter} from "./components/004_Counter/Counter.jsx";
import {Post} from "./components/005_Post/Post.jsx";
import {PostAsync} from "./components/006_PostAsync/PostAsync.jsx";

function Welcome() {
  return <h1 className="title">Welcome Hello, Vic!</h1>
}

function Welcome2(props) {
  return (
    <>
      <h1 className="title">Welcome Hello, {props.name}!</h1>
      <h3>Age: {props.age}</h3>
    </>
  )
}

Welcome2.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string
}

function App() {
  const age = 30;
  return (
    <div>
      {/*<Welcome />*/}
      {/*<Welcome2 name="Vic" age={age} />*/}
      {/*<UserInfo name="Vic" age={age} />*/}
      {/*<Clock />*/}
      {/*<ReactEvent />*/}
      {/*<Counter />*/}
      {/*<Post />*/}
      <PostAsync />
    </div>
  )
}

export default App
