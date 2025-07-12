import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Netflix from './Components/NetflixSeries.jsx'
import EventPropagationUsingBubbling from './Components/EventPropagationBubling.jsx'
import NumberCount, { ChildComponent, Sibling } from './Components/hooks/UseState/states.jsx'
import LiftStateUp from './Components/LiftStateUp.jsx'
import SortCircuit from './Components/SortCircit.jsx'
import CountHooks from './Components/hooks/UseState/CountHooks.jsx'
import ReactForms from './Components/hooks/UseState/ReactForms.jsx'
import UseEffectExample from './Components/hooks/UseEffect/UseEffectExample.jsx'
import { HowNotToFetchAPI } from './Components/hooks/UseEffect/HowNotToFetchAPI.jsx'
import { HowToFetchAPI } from './Components/hooks/UseEffect/HowToFetchApi.jsx'
import UseRef from './Components/hooks/UseRef/UseRef.jsx'
import UseIDExp from './Components/hooks/UseId/UseIDExp.jsx'
import { BioProvider } from './Components/hooks/UseContext/UseContextStore.jsx'
import { Home } from './Components/hooks/UseContext/index.jsx'
import SwitchMode, { Check1 } from './Components/DarkModeLightModeP/SwitchMode.jsx'
import UseReducerComp from './Components/hooks/useReducer/UseReducerComp.jsx'
import ReactMemo from './Components/hooks/MemoALl/ReactMemo.jsx'
import UseMemo from './Components/hooks/MemoALl/UseMemo.jsx'
import FetchAPIRouter from './Components/Router/FetchAPIRouter.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    {/* <Netflix/> */}
    {/* <EventPropagationUsingBubbling /> */}
    {/* <NumberCount/> */}
    {/* <ChildComponent /> */}
    {/* <Sibling /> */}
    {/* <LiftStateUp /> */}
    {/* <SortCircuit /> */}
    {/* <CountHooks /> */}
    {/* <ReactForms/> */}
    {/* <UseEffectExample/> */}
    {/* <HowNotToFetchAPI/> */}
    {/* <HowToFetchAPI/> */}
    {/* <UseRef/> */}
    {/* <UseIDExp/> */}
    {/* <BioProvider>
      <Home/>
    </BioProvider> */}
    {/* <SwitchMode/> */}
    {/* <Check1 /> */}
    {/* <UseReducerComp/> */}
    {/* <ReactMemo/> */}
    {/* <UseMemo/> */}
    <FetchAPIRouter/>
  </>,
)
