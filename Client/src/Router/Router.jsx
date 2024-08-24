import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../Views/Layouts/Layout";
import Success from "../Utilities/Success";
import Loader from "../Utilities/Loader";

const Home = lazy(() => import("../Views/Pages/Home/Home"));
const BlogPage = lazy(() => import("../Views/Pages/Blogs/Blogpage"));
const Contact = lazy(() => import("../Views/Pages/Contact/Contact"));
const Webinar = lazy(() => import("../Views/Pages/Webinar/Webinar"));
const Courses = lazy(() => import("../Views/Pages/Courses/Courses"));
const BlogPost = lazy(() => import("../Views/Pages/Blogs/Blogpost"));
const Privacypolicy = lazy(() =>
  import("../Views/Pages/Privacypolicy/Privacypolicy")
);
const ReturnsRefundsPolicy = lazy(() =>
  import("../Views/Pages/Privacypolicy/ReturnsRefundsPolicy")
);
const TermsAndConditions = lazy(() =>
  import("../Views/Pages/Privacypolicy/Termsandconditions")
);
const Payment = lazy(() => import("../Components/Payment/Payment"));
const Phaseonepayment = lazy(() =>
  import("../Components/Payment/Phaseonepayment")
);
const Webinarpayment = lazy(() =>
  import("../Components/Payment/Webinarpayment")
);

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/webinar",
          element: (
            <Suspense fallback={<Loader />}>
              <Webinar />
            </Suspense>
          ),
        },
        {
          path: "/courses",
          element: (
            <Suspense fallback={<Loader />}>
              <Courses />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            <Suspense fallback={<Loader />}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "/blog",
          element: (
            <Suspense fallback={<Loader />}>
              <BlogPage />
            </Suspense>
          ),
        },
        {
          path: "/blog/:id",
          element: (
            <Suspense fallback={<Loader />}>
              <BlogPost />
            </Suspense>
          ),
        },
        {
          path: "/paymentbundleplan",
          element: (
            <Suspense fallback={<Loader />}>
              <Payment />
            </Suspense>
          ),
        },
        {
          path: "/paymentphaseoneplan",
          element: (
            <Suspense fallback={<Loader />}>
              <Phaseonepayment />
            </Suspense>
          ),
        },
        {
          path: "/paymentwebinar",
          element: (
            <Suspense fallback={<Loader />}>
              <Webinarpayment />
            </Suspense>
          ),
        },

        { path: "/success", element: <Success /> },
        {
          path: "/privacypolicy",
          element: (
            <Suspense fallback={<Loader />}>
              <Privacypolicy />
            </Suspense>
          ),
        },
        {
          path: "/returnRefundpolicy",
          element: (
            <Suspense fallback={<Loader />}>
              <ReturnsRefundsPolicy />
            </Suspense>
          ),
        },
        {
          path: "/termsandconditions",
          element: (
            <Suspense fallback={<Loader />}>
              <TermsAndConditions />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
