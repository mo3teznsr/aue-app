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
import { ArrowForward } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import { useHistory } from "react-router";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
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
    showError: false,
  });

  const services = ["مناسبة زواج", "عزاء"];
  const products = ["مقهوجي", "خيمة مناسبات"];

  const mockUnavailableDates = [new Date("2024-01-15"), new Date("2024-01-20")];

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
        step: booking.step < 3 ? 3 : booking.step, // Update step only if it's less than 3
        selectedTime: "", // Reset selected time when date changes
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
  

  const handlePayment = () => {};

  return (
    <IonPage>
      <IonHeader>
        <IconButton onClick={() => history.goBack()}>
          <ArrowForward />
        </IconButton>
        <IonTitle>حجز خدمة</IonTitle>
      </IonHeader>
      <IonContent className="ion-padding">
        <div>
          {booking.step === 1 && (
            <>
              <h6>الرجاء تحديد نوع الخدمة</h6>
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
              <h6>الرجاء تحديد الخدمات المطلوبة</h6>
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
              <h6>الرجاء تحديد تاريخ المناسبة</h6>
              <div
                style={{
                  background: "#fff",
                  margin: "10px",
                  width: "100%",
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
              {booking.date && (
                <>
                  <h6>الرجاء تحديد الوقت</h6>
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
                  {booking.showError &&
                    (!booking.date || !booking.selectedTime) && (
                      <Typography color="error" variant="caption">
                        الرجاء اختيار تاريخ ووقت المناسبة.
                      </Typography>
                    )}
                </>
              )}
            </>
          )}

          {booking.step === 4 && (
            <>
              <h6>الرجاء تحديد الامارة</h6>
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
              <TextField fullWidth margin="dense" />

              <Button
                fullWidth
                color="primary"
                variant="contained"
                style={{ marginBottom: "1rem", marginTop: "100px" }}
                onClick={() => handlePayment()}
              >
                الدفع وتأكيد الحجز
              </Button>
            </>
          )}
        </div>

        <Box
          sx={{ display: "flex", justifyContent: "space-between", padding: 2, marginTop: "150px" }}
        >
          {booking.step > 1 && (
            <Button
              size="small"
              style={{
                padding: "10px",
                width: "70px",
                height: "40px",
                border: "1px solid ",
                borderColor: "inherit",
              }}
              onClick={handleBack}
            ><KeyboardArrowRight />
              الرجوع
              
            </Button>
          )}
          {booking.step < 4 && (
            <Button
              size="small"
              style={{
                padding: "10px",
                width: "70px",
                height: "40px",
                border: "1px solid ",
                borderColor: "inherit",
              }}
              onClick={handleNext}
            >
              التالي
              <KeyboardArrowLeft />
            </Button>
          )}
        </Box>
      </IonContent>
    </IonPage>
  );
};

export default Book;
