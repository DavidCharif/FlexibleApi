import Navigation, { Pages, ProgressBar } from "./Components/Navigation";
import Page1 from "./Components/Pages/Page1";
import Page2 from "./Components/Pages/Page2";
import Page3 from "./Components/Pages/Page3";
import Wizard from "./Components/Wizard";
import { actions } from "./Reducer/Reducer";
import { ButtonNext, ButtonPrev } from "./Ui/Button";


Wizard.ButtonNext = ButtonNext;
Wizard.ButtonPrev = ButtonPrev;

const initialState = {
  activePageIndex: 2
}
const reducer = (state, action) => {
  if(action.type === actions.NEXT_PAGE) {
    console.log("NEXT_PAGE click");
  }
  return state;
}


function App() {
  return (
    <Wizard initialState={initialState} reducer={reducer}>
      <Navigation />
      <Pages>
        <Page1 />
        <Page2 />
        <Page3 />
      </Pages>
      <ProgressBar/>
      <div className="flex justify-around items-center bg-gray-400 p-3">
      
      <Wizard.ButtonPrev />

      <Wizard.ButtonNext />
      </div>
    </Wizard>
  );
}

export default App;
