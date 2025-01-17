import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from "../pages/layout/Dashboard";
import BookingContainer from "src/pages/create-booking/BookingContainer";
import ViewBookingsContainer from 'src/pages/view-bookings/ViewBookingsContainer';
import AddNewResourceContainer from 'src/pages/add-resource/AddNewResourceContainer';
import ViewResourcesContainer from 'src/pages/view-resources/ViewResourcesContainer';
import LoginContainer from 'src/pages/auth/LoginContainer';

const AppRoutes = () => {

    return (
        <BrowserRouter basename={"/frontend-service/booking"}>
            <Routes>
                <Route path="/" element={<LoginContainer/>}/>
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/book" element={<BookingContainer/>}/>
                <Route path="/bookings" element={<ViewBookingsContainer/>}/>
                <Route path="/addresource" element={<AddNewResourceContainer/>}/>
                <Route path="/viewresources" element={<ViewResourcesContainer/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
