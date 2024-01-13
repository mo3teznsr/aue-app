import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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

      <h1 style={{ fontSize: '60px', color: '#3880ff', textAlign: 'center', marginTop:'50px' }}>السنع الامارات</h1>

        <div style={{display:"flex",alignItems:"center",width:"100%",marginTop:"4rem",marginBottom:"2rem",justifyContent:"center"}}>

        <img src="logo.png" style={{height:120}} />
        </div>

        <div>
     
        <div>
          <span>ليس لديك حساب؟</span> <Button onClick={()=>history.push('register')}>تسجيل</Button>
        </div>

        <Button variant="contained" onClick={go} color="secondary" style={{background:"#fff",marginTop:".5rem"}}  fullWidth >
         <img src="uae-pass.png" style={{height:20,marginInlineEnd:".5rem"}}  /> <span style={{color:"#000"}}>الدخول بالهوية الاماراتية</span>
        </Button>
        
        </div>

       
     
       
      </IonContent>
    </IonPage>
  );
};

export default Home;
