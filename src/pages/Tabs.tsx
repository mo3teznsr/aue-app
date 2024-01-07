import { IonContent, IonFooter, IonPage, IonTab, IonTabBar, IonTabButton } from "@ionic/react"
import { Typography } from "@mui/material"




const Tabs =()=>{


    return <IonPage>
        <IonContent>
            <div style={{margin:"5px",background:"#fff",width:150,padding:"10px",borderRadius:"15px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                <img src="request-service.svg" style={{height:80}} />

                <Typography >
                    Book service
                </Typography>

            </div>
            <div style={{margin:"5px",background:"#fff",width:150,padding:"10px",borderRadius:"15px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                <img src="request-service.svg" style={{height:80}} />

                <Typography >
                    Book service
                </Typography>

            </div>
            <div style={{margin:"5px",background:"#fff",width:150,padding:"10px",borderRadius:"15px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                <img src="request-service.svg" style={{height:80}} />

                <Typography >
                    Book service
                </Typography>

            </div>

        </IonContent>
        <IonFooter>
            <IonTabBar>
               <IonTabButton>
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-smart-home" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105" />
  <path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0" />
</svg>
               </IonTabButton>
               <IonTabButton>
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M16 2a1 1 0 0 1 .993 .883l.007 .117v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 1.993 -.117l.007 .117v1h6v-1a1 1 0 0 1 1 -1zm3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16v-9.625z" stroke-width="0" fill="currentColor" />
  <path d="M12 12a1 1 0 0 1 .993 .883l.007 .117v3a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor" />
</svg>
               </IonTabButton>
               <IonTabButton>
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-apps" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
  <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
  <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
  <path d="M14 7l6 0" />
  <path d="M17 4l0 6" />
</svg>
               </IonTabButton>
               <IonTabButton>
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
</svg>
               </IonTabButton>
            </IonTabBar>
        </IonFooter>
    </IonPage>
}


export default Tabs