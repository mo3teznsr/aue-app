import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { Email, Lock } from '@mui/icons-material';
import { useState } from 'react';
import { useHistory } from 'react-router';

const Home: React.FC = () => {
  const steps=[
    {
      title:"Step 1",
      content: ""
    }
  ]
  const [showPassword,setShowPassword]=useState(false)
  const history=useHistory()
  const go=()=>{history.push("/tabs")}
  return (
    <IonPage>
   
      <IonContent className="ion-padding"  >
        <div style={{display:"flex",alignItems:"center",width:"100%",marginTop:"5rem",marginBottom:"2rem",justifyContent:"center"}}>

        <img src="logo.png" style={{height:120}} />
        </div>

        <div>
     
        <TextField variant="outlined" 
        label="Email"
        fullWidth margin="dense"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          ),
        }} />

<TextField variant="outlined" 
        label="Password"
        margin="dense"
        fullWidth 
        type={showPassword?"text":"password"}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={()=>setShowPassword(!showPassword)}>
                {
                  showPassword?<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                </svg>:<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye-closed" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" />
                  <path d="M3 15l2.5 -3.8" />
                  <path d="M21 14.976l-2.492 -3.776" />
                  <path d="M9 17l.5 -4" />
                  <path d="M15 17l-.5 -4" />
                </svg>
                }
              </IconButton>
              </InputAdornment>
              )
        }} />

        <Button variant="contained"  onClick={go}  fullWidth >
          Login
        </Button>

        <Button variant="contained" onClick={go} color="secondary" style={{background:"#fff",marginTop:".5rem"}}  fullWidth >
         <img src="uae-pass.png" style={{height:20,marginInlineEnd:".5rem"}}  /> <span style={{color:"#000"}}>Login with UAE pass</span>
        </Button>
        
        </div>

       
     
       
      </IonContent>
    </IonPage>
  );
};

export default Home;
