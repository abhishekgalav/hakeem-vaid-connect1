import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FindDoctors from "./pages/FindDoctors";
import VideoConsult from "./pages/VideoConsult";
import Medicines from "./pages/Medicines";
import LabTests from "./pages/LabTests";
import Articles from "./pages/Articles";
import HelpCenter from "./pages/HelpCenter";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Refunds from "./pages/Refunds";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import AppointmentHistory from "./pages/AppointmentHistory";
import MensSexualHealth from "./pages/MensSexualHealth";
import Settings from "./pages/Settings";
import Favorites from "./pages/Favorites";
import MedicalRecords from "./pages/MedicalRecords";
import Prescriptions from "./pages/Prescriptions";
import NotFound from "./pages/NotFound";
import BookAppointment from "./pages/BookAppointment";
import DoctorLogin from "./pages/DoctorLogin";
import DoctorSignup from "./pages/DoctorSignup";
import DoctorDashboard from "./pages/DoctorDashboard";
import DoctorPatients from "./pages/DoctorPatients";
import DoctorAppointments from "./pages/DoctorAppointments";
import DoctorEarnings from "./pages/DoctorEarnings";
import DoctorProfile from "./pages/DoctorProfile";
import DoctorEnrollment from "./pages/DoctorEnrollment";
import DoctorProfileEdit from "./pages/DoctorProfileEdit";
import DoctorProfileView from "./pages/DoctorProfileView";
import DoctorCreatePrescription from "./pages/DoctorCreatePrescription";
import DoctorPrescriptions from "./pages/DoctorPrescriptions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/find-doctors" element={<FindDoctors />} />
          <Route path="/video-consult" element={<VideoConsult />} />
          <Route path="/medicines" element={<Medicines />} />
          <Route path="/lab-tests" element={<LabTests />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refunds" element={<Refunds />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/appointments" element={<AppointmentHistory />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/mens-sexual-health" element={<MensSexualHealth />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/medical-records" element={<MedicalRecords />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
          
          {/* Doctor Routes */}
          <Route path="/doctor/login" element={<DoctorLogin />} />
          <Route path="/doctor/signup" element={<DoctorSignup />} />
          <Route path="/doctor/enrollment" element={<DoctorEnrollment />} />
          <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
          <Route path="/doctor/patients" element={<DoctorPatients />} />
          <Route path="/doctor/appointments" element={<DoctorAppointments />} />
          <Route path="/doctor/earnings" element={<DoctorEarnings />} />
          <Route path="/doctor/profile" element={<DoctorProfileView />} />
          <Route path="/doctor/profile/edit" element={<DoctorProfileEdit />} />
          <Route path="/doctor/settings" element={<DoctorProfile />} />
          <Route path="/doctor/prescriptions" element={<DoctorPrescriptions />} />
          <Route path="/doctor/prescriptions/new" element={<DoctorCreatePrescription />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
