
import { Home } from "./pages/Home";
import {  BrowserRouter ,Route, Switch} from 'react-router-dom'
import { NewRoom } from "./pages/NewRoom";
import './styles/global.scss';
import { AuthContextProvider } from './context/AuthContext'
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";
import { useState } from "react";
import { ThemeContextProvider } from './context/ThemeContext';



function App() {

    
  return (
    
    <BrowserRouter>
    <ThemeContextProvider>
     <AuthContextProvider>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new"  component={NewRoom} />
      <Route path="/rooms/:id" component={Room} />
      <Route path="/admin/rooms/:id" component={AdminRoom} />
      </Switch>     
     </AuthContextProvider>
     </ThemeContextProvider>
    </BrowserRouter>
    
  );
}

export default App;
