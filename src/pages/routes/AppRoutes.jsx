import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TermCondition from "../TermCondition";
import FaqPage from "../FaqPage";
import AboutPage from "../AboutPage";
import SearchPage from "../SearchPage";
import AllLibrary from "../AllLibrary";
import PageNotFound from "../PageNotFound";
import RegistrationPage from "../RegistrationPage";
import { HomePage } from "../HomePage";
import Login from "../Login";
import LibraryDetailPage from "../LibraryDetailPage";
import LecturePage from "../LecturePage";
import Myprofile from "../../components/profile/Myprofile";
import Subscription from "../../components/profile/Subscription";
import PaymentMethod from "../../components/profile/PaymentMethod";
import PublicProfile from "../../components/profile/PublicProfile";
import Wishlisttab from "../../components/wishlisttab/Wishlisttab";
import CartPage from "../CartPage";
import Checkout from "./Checkout";
import NewContact from "../NewContact";
import PaymentPage from "../../components/PaymentPage";
import AdminDashboard from "../../Admin/dashboard/AdminDashboard";
import Dashboard from "../../Admin/pages/Dashboard";
import AdLayout from "../../Admin/components/shared/AdLayout";
import Layout from "../../components/Layout/Layout";
import Documents from "../Documents";
import ContinueWatching from "../ContunueWatching";


// admin imports 
import Branches from "../../Admin/pages/Branches";



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main routes with MainLayout */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/wishlist" element={<Wishlisttab />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/new-contact" element={<NewContact />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/allLibrary" element={<AllLibrary />} />
          <Route path="/librarydetailpage" element={<LibraryDetailPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/profile/subscription" element={<Subscription />} />
          <Route path="/profile/paymentMethods" element={<PaymentMethod />} />
          <Route path="/profile/publicProfile" element={<PublicProfile />} />
          <Route path="/continue-watching/:id" element={<ContinueWatching />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Myprofile />} />
          <Route path="/lecture" element={<LecturePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/terms-and-conditions" element={<TermCondition />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/document" element={<Documents />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>

        {/* Admin routes with AdminLayout */}
        <Route element={<AdLayout />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/alllibrary" element={<Branches />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
