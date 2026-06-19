import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import IncomeTax from "./pages/services/IncomeTax";
import NRITaxation from "./pages/services/NRITaxation";
import NGOTrust from "./pages/services/NGOTrust";
import CompanyLaw from "./pages/services/CompanyLaw";
import LabourLaw from "./pages/services/LabourLaw";
import ImportExport from "./pages/services/ImportExport";
import Certification from "./pages/services/Certification";
import KnowledgeCentre from "./pages/KnowledgeCentre";
import ArticleDetail from "./pages/ArticleDetail";
import ClientPortal from "./pages/ClientPortal";
import FormsDownloads from "./pages/FormsDownloads";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DocumentAutomation from "./pages/DocumentAutomation";
import NotFound from "./pages/NotFound";
import RootLayout from "./components/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "services/income-tax", Component: IncomeTax },
      { path: "services/nri-taxation", Component: NRITaxation },
      { path: "services/ngo-trust", Component: NGOTrust },
      { path: "services/company-law", Component: CompanyLaw },
      { path: "services/labour-law", Component: LabourLaw },
      { path: "services/import-export", Component: ImportExport },
      { path: "services/certification", Component: Certification },
      { path: "knowledge-centre", Component: KnowledgeCentre },
      { path: "knowledge-centre/:slug", Component: ArticleDetail },
      { path: "client-portal", Component: ClientPortal },
      { path: "forms-downloads", Component: FormsDownloads },
      { path: "document-automation", Component: DocumentAutomation },
      { path: "contact", Component: Contact },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms", Component: Terms },
      { path: "disclaimer", Component: Disclaimer },
      { path: "login", Component: Login },
      { path: "signup", Component: Signup },
      { path: "*", Component: NotFound },
    ],
  },
]);
