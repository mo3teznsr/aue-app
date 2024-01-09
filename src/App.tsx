import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { green,lightGreen } from '@mui/material/colors';
import Tabs from './pages/Tabs';
import Register from './pages/Register';
import Book from './pages/Book';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
setupIonicReact();

const App: React.FC = () =>{

  const theme = createTheme({
    palette: {
      primary: {
        main: green[300],
      },
     
     
    },
    shape:{
      borderRadius:15,
    },
    components:{
      
     MuiTextField:{
      defaultProps:{style: {background:"#fff"}}
     },
     
    }
  });
  
  return(
    <LocalizationProvider dateAdapter={AdapterDayjs}>

    <ThemeProvider theme={theme}>
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/book" component={Book} />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/register" component={Register} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/tabs" component={Tabs} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  </ThemeProvider>
  </LocalizationProvider>
)};

export default App;
