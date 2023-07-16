import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BookingCard } from "./BookingCard";
import BookingServices from "src/services/BookingServices";
import AppbarComponent from "src/components/AppbarComponent";
import DrawerComponent from "src/components/DrawerComponent";
import Copyright from "src/components/Copyright";
import { Toolbar } from "@mui/material";

const dashboardTheme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export default function ViewBookingsContainer(): JSX.Element {
  const [bookingsData, setBookingsData] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const fetchBookingsData = async () => {
      try {
        const data = await BookingServices.getBookings();
        setBookingsData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookingsData();
  }, []);

  return (
    <ThemeProvider theme={dashboardTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppbarComponent open={open} toggleDrawer={toggleDrawer} />
        <DrawerComponent open={open} toggleDrawer={toggleDrawer} />

        <Container component="main" maxWidth="md">
          <Toolbar />
          <Paper
            variant="outlined"
            sx={{
              my: { xs: 3, md: 6 },
              p: { xs: 2, md: 10 },
              backgroundColor: "#F5F7FA",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              align="center"
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              VIEW BOOKINGS LIST
            </Typography>
            <Box sx={{ mt: 2 }}>
              {bookingsData.map((booking) => (
                <BookingCard key={booking.booking_id} booking={booking} />
              ))}
            </Box>
          </Paper>
          <Copyright />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
