import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonSelect,
  IonSelectOption,
  IonItem,
} from "@ionic/react";
import { ArrowForward, CreditCard } from "@mui/icons-material";
import {
    Alert,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import { useHistory } from "react-router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

interface Booking {
  service: string;
  date: Date | string;
  products: string[];
  step: number;
  selectedEmirate: number;
  selectedTime: string;
  address: string;
  showError: boolean;
}

const Book: React.FC = () => {
  const history = useHistory();

  const [booking, setBooking] = useState<Booking>({
    service: "",
    date: "",
    products: [],
    step: 1,
    selectedEmirate: 10,
    selectedTime: "",
    address: "",
    showError: false,
  });

  const services = ["مناسبة زواج", "عزاء"];
  const products = [
"مقهوين",
  "مقهويات",
  "خيام رجال عدد ٢٠٠ شخص + ٣٠ طاولة",
  "خيام نساء عدد ٢٠٠ شخص + ٣٠ طاولة",
  "زفة",
  "المكرفونات والسماعات",
   "التصوير"];

  const mockUnavailableDates = [new Date("2024-01-15"), new Date("2024-01-20"),new Date("2024-02-03")];

  const mockUnavailableTimeSlots: Record<string, string[]> = {
    "2024-01-16": ["09:00", "10:00", "12:00"],
    "2024-01-21": ["15:00", "16:00", "18:00"],
  };

  const handleDateChange = (newDate: Date | string) => {
    const selectedDate = newDate instanceof Date ? newDate : new Date(newDate);

    if (selectedDate < new Date()) {
      console.log("Selected date is before today.");
    } else if (
      mockUnavailableDates.some(
        (unavailableDate) =>
          selectedDate.toDateString() === unavailableDate.toDateString()
      )
    ) {
      console.log("Selected date is not available.");
    } else {
      setBooking({
        ...booking,
        date: selectedDate,
        step: booking.step < 3 ? 3 : booking.step,
        selectedTime: "",
      });
    }
  };

  const handleServiceSelection = (selectedService: string) => {
    setBooking({ ...booking, service: selectedService, showError: false });
  };

  const handleProductSelection = (selectedProducts: string[]) => {
    setBooking({ ...booking, products: selectedProducts, showError: false });
  };

  const handleTimeSelection = (selectedTime: string) => {
    setBooking({ ...booking, selectedTime, showError: false });
  };

  const handleNext = () => {
    if (booking.step === 1 && !booking.service) {
      setBooking({ ...booking, showError: true });
      return;
    }

    if (booking.step === 2 && booking.products.length === 0) {
      setBooking({ ...booking, showError: true });
      return;
    }

    if (booking.step === 3) {
      if (!booking.date || !booking.selectedTime) {
        setBooking({ ...booking, showError: true });
        return;
      }
    }

    setBooking({ ...booking, step: booking.step + 1, showError: false });
  };

  const handleBack = () => {
    setBooking({ ...booking, step: booking.step - 1, showError: false });
  };

  const generateTimeSlots = (date: Date | string): { time: string; available: boolean }[] => {
    const timeSlots: { time: string; available: boolean }[] = [];
    const startTime = 9; // 9 am
    const endTime = 21; // 9 pm
  
    for (let hour = startTime; hour <= endTime; hour++) {
      const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
      const time = `${formattedHour}:00`;
  
      const isUnavailable =
        mockUnavailableTimeSlots[date.toString()] &&
        mockUnavailableTimeSlots[date.toString()].includes(time);
  
      const available = !isUnavailable;
  
      timeSlots.push({ time, available });
    }
  
    return timeSlots;
  };

  const handleAddressChange = (newAddress: string) => {
    setBooking({ ...booking, address: newAddress });
  };

  const handlePaymentAndConfirmation = () => {
    const { service, products, date, selectedTime, selectedEmirate, address } = booking;

    console.log("Selected Service:", service);
    console.log("Selected Products:", products);
    console.log("Selected Date:", date);
    console.log("Selected Time Slot:", selectedTime);
    console.log("Selected Emirate:", selectedEmirate);
    console.log("Selected Address:", address);

    // Add your logic for payment and confirmation here
    // ...

    // For now, let's just navigate to a confirmation page
    history.push("/confirmation");
  };

  return (
    <IonPage>
      <IonHeader>
        <IconButton slot="start" onClick={() => history.goBack()}>
          <ArrowForward />
        </IconButton>
        <IonTitle>حجز خدمة</IonTitle>
      </IonHeader>
      <IonContent >
        <div style={{display:"flex",flexDirection:"column",height:"100%",paddingInline:"10px"}}>
            <div style={{flex:1,}}>
          {booking.step === 1 && (
            <>
              <Typography variant="h6" marginY={2}>الرجاء تحديد نوع الخدمة</Typography>
              {services.map((item) => (
                <Button
                  fullWidth
                  color={booking.service === item ? "primary" : "inherit"}
                  variant="contained"
                  style={{ marginBottom: "1rem" }}
                  key={item}
                  onClick={() => handleServiceSelection(item)}
                >
                  {item}
                </Button>
              ))}
              {booking.showError && (
                <Typography color="error" variant="caption">
                  الرجاء اختيار خدمة واحدة على الأقل.
                </Typography>
              )}
            </>
          )}

          {booking.step === 2 && (
            <>
                 <Typography variant="h6" marginY={2}>
                الرجاء تحديد الخدمات المطلوبة</Typography>
              <FormGroup>
                {products.map((item) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(e) => {
                          const selectedProducts = e.target.checked
                            ? [...booking.products, item]
                            : booking.products.filter(
                                (product) => product !== item
                              );
                          handleProductSelection(selectedProducts);
                        }}
                      />
                    }
                    label={item}
                    key={item}
                  />
                ))}
              </FormGroup>
              {booking.showError && (
                <Typography color="error" variant="caption">
                  الرجاء اختيار منتج واحد على الأقل.
                </Typography>
              )}
            </>
          )}

          {booking.step === 3 && (
            <>
                <Typography variant="h6" marginY={2}>
                الرجاء تحديد تاريخ المناسبة</Typography>
              <div
                style={{
                  background: "#fff",
                  margin: "10px",
                  borderRadius: ".75rem",
                  padding: "10px",
                  direction: "ltr",
                }}
              >
                <DateCalendar
                  shouldDisableDate={(day: Date | string) => {
                    const selectedDate =
                      day instanceof Date ? day : new Date(day);

                    return (
                      selectedDate < new Date() ||
                      mockUnavailableDates.some(
                        (unavailableDate) =>
                          selectedDate.toDateString() ===
                          unavailableDate.toDateString()
                      )
                    );
                  }}
                  onChange={handleDateChange}
                />
              </div>
              { (!booking.date ) && (
                      <Typography color="error" variant="caption">
                        الرجاء اختيار تاريخ ووقت المناسبة.
                      </Typography>
                    )}
              {booking.date && (
                <>
                     <Typography variant="h6" marginY={2}>
                    الرجاء تحديد الوقت</Typography>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {generateTimeSlots(booking.date).map(({ time, available }) => (
                      <Button
                        key={time}
                        variant="contained"
                        color={
                          booking.selectedTime === time && available
                            ? "primary"
                            : "inherit"
                        }
                        onClick={() => {
                          if (available) {
                            handleTimeSelection(time);
                          }
                        }}
                        style={{
                          margin: "5px",
                          opacity: available ? 1 : 0.5,
                          cursor: available ? "pointer" : "not-allowed",
                        }}
                        disabled={!available}  
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                  {booking.date && !booking.selectedTime && (
                    <Typography color="error" variant="caption">
                      يجب عليك اختيار فترة زمنية أيضًا.
                    </Typography>
                  )}
                
                </>
              )}
            </>
          )}

          {booking.step === 4 && (
            <>
                 <Typography variant="h6" marginY={2}>
                الرجاء تحديد الامارة</Typography>
              <IonLabel>الإمارة</IonLabel>
              <Select
                id="demo-simple-select"
                fullWidth
                margin="dense"
                value={booking.selectedEmirate}
                onChange={(e) =>
                  setBooking({
                    ...booking,
                    selectedEmirate: e.target.value as number,
                  })
                }
              >
                <MenuItem value={10}>الشارقة</MenuItem>
              </Select>

              <IonLabel>العنوان</IonLabel>
              <TextField
                fullWidth
                margin="dense"
                value={booking.address}
                onChange={(e) => handleAddressChange(e.target.value)}
              />

             
            </>
          )}
{booking.step===6&&<div style={{display:"flex",
                flexDirection:"column",
                gap:10,
                paddingTop:120,
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
                </div>}
{booking.step === 5 && (
            <>
                 <Typography variant="h6" marginY={2}>
                تأكيد الحجز  </Typography>
              <IonLabel>رقم البطاقة</IonLabel>
              <TextField
              error={booking.showError&&!booking.card_number}
               value={booking.card_number} 
               onChange={e=>setBooking({...booking,card_number:e.target.value})}
              fullWidth 
              margin="dense"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CreditCard />
                  </InputAdornment>
                ),
              }}
              />
              <Grid container spacing={1}>
                <Grid item  xs={8}>
                <IonLabel> تاريخ الصلاحية</IonLabel>
                    <TextField 
                    error={booking.showError&&!booking.card_exp}
                    value={booking.card_exp} 
                    onChange={e=>setBooking({...booking,card_exp:e.target.value})}
                     fullWidth margin="dense"  />
                </Grid>
                <Grid item xs={4}>
                <IonLabel>CVC</IonLabel>
                <TextField
                error={booking.showError&&!booking.cvc}
                 value={booking.cvc} 
                 onChange={e=>setBooking({...booking,cvc:e.target.value})}
                 fullWidth margin="dense" type="number" />
                </Grid>
                
              </Grid>
               
<Alert style={{marginTop:20}} severity="error" >
    الرجاء ادخال كل حقول البطاقة
</Alert>

              <Button
                fullWidth
                color="primary"
                variant="contained"
                style={{ marginBottom: "1rem", marginTop: "100px" }}
                onClick={()=>{
                    if(!(booking.card_exp&&booking.cvc&&booking.card_number))
                    {
                        setBooking({...booking,showError:true})
                    }
                    else {
                        handleNext()
                    }
                    }}
              >
                الدفع وتأكيد الحجز
              </Button>
            </>
          )}
        </div>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", padding: 2, marginTop: "150px" }}
        >
          {booking.step > 1 &&booking.step<6&& (
            <Button
              size="small"
              style={{
                padding: "10px",
                width: "80px",
                height: "40px",
               
               
              }}
              variant="contained"
              onClick={handleBack}
            ><KeyboardArrowRight />
              الرجوع
              
            </Button>
          )}
          {booking.step < 5 && (
            <Button
            variant="contained"
              size="small"
              style={{
                padding: "10px",
                width: "80px",
                height: "40px",
               
              }}
              onClick={handleNext}
            >
              التالي
              <KeyboardArrowLeft />
            </Button>
          )}
        </Box>
        </div>

       
      </IonContent>
    </IonPage>
  );
};

export default Book;
