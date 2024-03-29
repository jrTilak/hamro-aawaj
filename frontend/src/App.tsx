import { Routes, Route, useNavigate } from "react-router-dom";
import RootLayout from "./components/layouts/root-layout";
import { Suspense, lazy } from "react";
import { useGlobalContext } from "./hooks/use-global-context";

const LandingPage = lazy(
  () => import("./components/pages/landing/landing-page")
);
const SignupPage = lazy(() => import("./components/pages/auth/signup"));
const LoginPage = lazy(() => import("./components/pages/auth/login"));
const ReportPage = lazy(() => import("./components/pages/report/report-page"));
const ProfilePage = lazy(() => import("./components/pages/profile/profile"));
const AdminPage = lazy(() => import("./components/pages/admin/admin-page"));
const AboutPage = lazy(() => import("./components/pages/about/about-page"));
const FeedbackPage = lazy(() => import("./components/pages/feedback/feedback"));
const IndividualReportPage = lazy(
  () => import("./components/pages/admin/individual-report-page")
);
const IndividualUserPage = lazy(
  () => import("./components/pages/admin/individual-user-page")
);
const EmergencyPage = lazy(
  () => import("./components/pages/emergency/emergency-page")
);
const TopContributorsPage = lazy(
  () => import("./components/pages/contributors/top-contributors")
);

interface RouteType {
  path: string;
  Layout?: ({ children }: { children: React.ReactNode }) => JSX.Element;
  Component: React.LazyExoticComponent<() => JSX.Element>;
  noRootLayout?: boolean;
  isProtected?: boolean;
}

const routes: RouteType[] = [
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/signup",
    Component: SignupPage,
    noRootLayout: true,
  },
  {
    path: "/login",
    Component: LoginPage,
    noRootLayout: true,
  },
  {
    path: "/report",
    Component: ReportPage,
  },
  {
    path: "/profile",
    Component: ProfilePage,
  },
  {
    path: "/dashboard",
    Component: AdminPage,
  },
  {
    path: "/dashboard/reports/:reportId",
    Component: IndividualReportPage,
  },
  {
    path: "/dashboard/users/:userId",

    Component: IndividualUserPage,
  },
  {
    path: "/dashboard/:q",

    Component: AdminPage,
  },
  {
    path: "/emergency",
    Component: EmergencyPage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/feedback",
    Component: FeedbackPage,
  },
  {
    path: "top-contributors",
    Component: TopContributorsPage,
  },
];

const App = () => {
  return (
    <Routes>
      {routes.map(({ path, Layout, Component, noRootLayout }) => {
        const CompWithLayout = Layout ? (
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <Component />
            </Suspense>
          </Layout>
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
            <Component />
          </Suspense>
        );
        return (
          <Route
            key={path}
            path={path}
            element={
              !noRootLayout ? (
                <RootLayout>{CompWithLayout}</RootLayout>
              ) : (
                CompWithLayout
              )
            }
          />
        );
      })}
    </Routes>
  );
};

export default App;
