import { RoutesMain } from "./routes/RoutesMain"
import { GlobalStyle } from "./styled/global"
import { ResetStyle } from "./styled/reset"


function App() {
  return (
    <div className='App'>
      <ResetStyle/>
      <GlobalStyle/>
      <RoutesMain />
    </div>
  )
}

export default App
