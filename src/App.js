import { Route } from "react-router-dom";
import SubscritionCard from "./components/SubscriptionCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Track your Subs</h1>

      <Route exact path="/" component={SubscritionCard} />
    </div>
  );
}

export default App;
