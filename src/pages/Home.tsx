import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
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
      
   
      <IonContent  >
        <div>
          <img src="bg1.jpg" style={{width:"500px",
          height:"100dvh",
          objectFit:"cover",
          position:"absolute",
          top:0,
          right:0
          }} />
        <Typography variant='h3' textAlign={'center'} marginTop={10}> السنع الامارات</Typography>


        <div style={{display:"flex",alignItems:"center",width:"100%",marginTop:"4rem",marginBottom:"4rem",justifyContent:"center"}}>

        <img src="logo.png" style={{height:420}} />
        </div>

        <div style={{paddingInline:10}}>
     
        

        <Button variant="contained" onClick={go} color="secondary" style={{background:"#fff",marginTop:".5rem"}}  fullWidth >
         <img src="uae-pass.png" style={{height:20,marginInlineEnd:".5rem"}}  /> <span style={{color:"#000"}}>الدخول بالهوية الاماراتية</span>
        </Button>
        
        </div>

       </div>
     
       
      </IonContent>
    </IonPage>
  );
};

export default Home;
