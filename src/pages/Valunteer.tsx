import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { ArrowForward, Forward } from "@mui/icons-material"
import { Button, Checkbox, FormControlLabel, IconButton, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useHistory } from "react-router"





const Volunteer = () => {

    const [step, setStep] = useState(1)


    const history = useHistory()

    const renderStep = () => {
        switch (step) {
            case 4 :
                return <div style={{display:"flex",
                flexDirection:"column",
                gap:10,
                alignItems:"center"
                }}>
                    <Typography>
                        تم استلام طلبك سوف يصلك بريد الكتروني بالتأكيد
                    </Typography>
                    <img src="success.gif" style={{borderRadius:150}}
                     height={150} width={150} />
                    <Button fullWidth 
                    onClick={history.goBack}
                    variant="outlined" >
                        العودة للرئيسية
                    </Button>
                </div>
            case 3:
                return <div style={{
                    display:"flex",
                    flexDirection:"column",
                    gap:10
                }}>
                    <Typography variant="h5">
                        بيانات المتطوع/ة
                    </Typography>
                    <div>
                    <IonLabel>الاسم</IonLabel>
                    <TextField fullWidth margin="dense" />
                    </div>
                    <div>
                    <IonLabel>العمر</IonLabel>
                    <TextField fullWidth type="number" inputProps={{
                        min:5,
                        max:18
                    }} margin="dense" />
                    </div>
                    <div>
                    <IonLabel>النوع</IonLabel>
                    <Select
                id="demo-simple-select"
                fullWidth
                margin="dense"
                
              >
                <MenuItem value={10}>انثى</MenuItem>
                <MenuItem value={11}>ذكر</MenuItem>
              </Select>
              </div>
              <div>
              <IonLabel>رقم للتواصل</IonLabel>
                    <TextField fullWidth margin="dense" placeholder="x5xxxxxxx" />
                    </div>
                    <FormControlLabel required control={<Checkbox />} 
                    label="موافقة ولي الأمر في تشريك الإبن/ة في الأعراس أو القيام بصب القهوة للطالبين" />
                    <Button fullWidth variant="contained" 
                    onClick={()=>setStep(step+1)} >تأكيد</Button>
                </div>

            case 2:
                return <div>
                    <div className="markdown prose w-full break-words dark:prose-invert light">
                        <Typography>
                            <strong>شروط وأحكام المشاركة في خدمة السنع الاماداتي لتطوع الأطفال في حفلات المناسبات</strong></Typography>
                        <Typography variant="h5">مرحبًا بك.</Typography>
                        <Typography> يرجى قراءة الشروط والأحكام التالية بعناية قبل المشاركة</Typography>
                        
                            <Typography variant="h6"><strong>العمر:</strong></Typography>
                            <Typography>يسمح للأطفال الذين تتراوح أعمارهم بين 5 سنة و 18 سنة بالمشاركة في خدمة التطوع.</Typography>
                        <Typography><strong>التصريح:</strong></Typography>
                        <Typography>يجب أن يقدم ولي الأمر أو الوصي على التصريح بالمشاركة في خدمة التطوع.</Typography><Typography><strong>الإشراف:</strong></Typography><Typography>يجب أن يكون هناك راشد مسؤول عن إشراف الأطفال طوال فترة المشاركة.</Typography><Typography><strong>السلامة:</strong></Typography><Typography>يجب على الأطفال اتباع إرشادات السلامة المقدمة من قبل المشرفين وعدم الانحراف عنها.</Typography><Typography><strong>المدة الزمنية:</strong></Typography><Typography>سيتم تحديد مدة زمنية محددة لكل فترة تطوع، ويجب على الأطفال الامتثال لها.</Typography><Typography><strong>الاحترام:</strong></Typography><Typography>يجب على الأطفال أن يظهروا احترامًا لجميع المشاركين والضيوف في حفل الزفاف.</Typography><Typography><strong>عدم المساس بالممتلكات:</strong></Typography><Typography>يجب على الأطفال عدم التلاعب أو المساس بأي ممتلكات خاصة بالعرس.</Typography><Typography><strong>الالتزام بالتعليمات:</strong></Typography><Typography>يتعين على الأطفال الالتزام بجميع التعليمات التي قد يقدمها المشرفون.</Typography><Typography><strong>الإشعار المسبق:</strong></Typography><Typography>يرجى إبلاغ ولي الأمر أو الوصي بأي متطلبات إضافية قبل بداية فترة التطوع.</Typography><Typography><strong>حق الإلغاء:</strong></Typography><Typography>تحتفظ الإدارة بحق إلغاء مشاركة الطفل في حالة عدم الامتثال للشروط والأحكام المذكورة أعلاه.</Typography><Typography>مشكورين على تفهمكم وتعاونكم في جعل حفلات الزفاف تجربة إيجابية للأطفال والجميع.</Typography></div>
             <Button variant="contained"
             onClick={()=>setStep(step+1)}
              fullWidth style={{marginBlock:10}}>موافق</Button>
             <Button variant="outlined" 
             onClick={history.goBack}
             fullWidth>لا اوافق</Button>
                </div>

            default:
                return <div>
                    <Typography variant="h6" >التطوع لبث السنع الاماراتي في الطفل وتعلمه</Typography>

                    <iframe width="100%" style={{ border: "none", borderRadius: 10, marginBottom: 10 }} height="250" src="https://www.youtube-nocookie.com/embed/rtZP_VxFWSI?si=w6tn5sD0SJunuQUL" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    <Button variant="contained" onClick={() => setStep(step + 1)} fullWidth >التسجيل</Button>
                </div>
        }
    }

    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IconButton onClick={() => history.goBack()} slot="start">
                    <ArrowForward />
                </IconButton>
                <IonTitle>التطوع</IonTitle>
            </IonToolbar>

        </IonHeader>
        <IonContent className="ion-padding">

            <div style={{ display: "flex", flexDirection: "column" }}>
                {renderStep()}

            </div>

        </IonContent>
    </IonPage>
}

export default Volunteer