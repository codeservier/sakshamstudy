import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutPage from "../AboutPage";
import ContactPage from "../ContactPage";
import SearchPage from "../SearchPage";
import MyLearning from "../MyLearning";
import PageNotFound from "../PageNotFound";
import RegistrationPage from "../RegistrationPage";
import { HomePage } from "../HomePage";
import Layout from "../../components/Layout/Layout";
import Login from "../Login";
import CourseDetailPage from "../CourseDetailPage";
import LecturePage from "../LecturePage";
import Myprofile from "../../components/profile/Myprofile";
import Subscription from "../../components/profile/Subscription";
import PaymentMethod from "../../components/profile/PaymentMethod";
import PublicProfile from "../../components/profile/PublicProfile";
import Wishlisttab from "../../components/wishlisttab/Wishlisttab";
import AdminPanel from "../../Admin/Admin";
import CartPage from "../CartPage";
import Checkout from "./Checkout";
import NewContact from "../NewContact";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wishlist" element={<Wishlisttab />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/new-contact" element={<NewContact />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/mylearning" element={<MyLearning />} />
          <Route path="/coursedetail" element={<CourseDetailPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/profile/subscription" element={<Subscription />} />
          <Route path="/profile/paymentMethods" element={<PaymentMethod />} />
          <Route path="/profile/publicProfile" element={<PublicProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Myprofile />} />
          <Route path="/lecture" element={<LecturePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
