import React, { Suspense } from "react";
import "./i18n";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./store";
import Header from "./components/Header/Header";
import Routes from "./Routes";

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={null}>
        <Header />
        <div className="container border-v-gradient min-vh-100 pt-4">
          <Routes />
        </div>
      </Suspense>
    </Provider>
  );
};
export default App;
