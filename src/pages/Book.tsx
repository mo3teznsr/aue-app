import { IonContent, IonHeader, IonLabel, IonPage, IonTitle } from "@ionic/react";
import { ArrowForward } from "@mui/icons-material";
import { Button, Checkbox, FormControlLabel, FormGroup, IconButton, MenuItem, Select, TextField } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { TimeField } from '@mui/x-date-pickers/TimeField';


const Book=()=>{
    const history=useHistory()

    const [booking,setBooking]=useState({service:"",date:"",products:[],card:"",cardExp:"",cvc:"",step:1})
    const services=['مناسبة زواج','عزاء']
    const products=['مقهوجي','خيمة مناسبات']
    return <IonPage>
        <IonHeader>
            <IconButton onClick={()=>history.goBack()}>
                <ArrowForward />
            </IconButton>
            <IonTitle >حجز خدمة</IonTitle>
        </IonHeader>
        <IonContent className="ion-padding">

            <div>
                <h6>الرجاء تحديد نوع الخدمة</h6>
               {services.map(item=> <Button fullWidth
               color={booking.service==item?"primary":"inherit"}
               variant="contained" style={{marginBottom:"1rem"}}
                key={item} onClick={()=>setBooking({...booking,service:item})} >{item}</Button>)}


<h6>  الرجاء تحديد الخدمات المطلوبة</h6>
<FormGroup>

 {products.map(item=> <FormControlLabel  control={<Checkbox />} label={item} key={item} />)}
 </FormGroup>
 <h6>الرجاء تحديد تاريخ المناسبة</h6>
 <div style={{background:"#fff",
 margin:"10px",width:"100%",borderRadius:".75rem",padding:"10px",direction:"ltr"}}>
 <DateCalendar />
 </div>
 <h6>الرجاء تحديد الوقت</h6>
 <div style={{display:"flex",gap:"10px",width:"100%"}}>
    <div>
    <IonLabel>من</IonLabel>
 <TimeField  />
    </div>
    <div>
    <IonLabel>الى</IonLabel>
 <TimeField  />
</div>
 </div>

 <h6>الرجاء تحديد الامارة</h6>
 <IonLabel>الإمارة</IonLabel>
 <Select
    
    id="demo-simple-select"
   
   fullWidth margin="dense"

  >
    <MenuItem value={10}>الشارقة</MenuItem>
    
  </Select>

  <IonLabel>العنوان</IonLabel>
  <TextField fullWidth margin="dense" />

  <IonLabel>رقم البطاقة</IonLabel>
  <TextField fullWidth margin="dense" />
  <div style={{display:"flex",gap:"10px"}}>
    <div>
        <IonLabel>تاريخ الانتهاء</IonLabel>
        <TextField fullWidth margin="dense" type="date" />
    </div>
    <div>
        <IonLabel>CVC</IonLabel>
        <TextField fullWidth margin="dense" type="number" />
    </div>

    
  </div>




            </div>
            <Button variant="contained" color="primary" style={{width:"100%"}}>تأكيد الحجز</Button>
            

        </IonContent>
    </IonPage>
}


export default Book;