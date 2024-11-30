import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/auth_components/AuthProvider";
import Footer from "./components/common_components/Footer";
import Header from "./components/common_components/Header";
import Homepage from "./pages/common_pages/Homepage";
import AboutUs from "./pages/common_pages/AboutUs";
import ContactUs from "./pages/contact_pages/ContactUs";
import PageNotFound from "./pages/common_pages/PageNotFound";
import logo from "./assets/logo/logo.png";
import AllProducts from "./pages/shop_pages/AllProducts";
import OurStory from "./pages/common_pages/OurStory";
import AllBlogs from "./pages/blog_pages/AllBlogs";
import SingleBlog from "./pages/blog_pages/SingleBlog";
import AllTestimonials from "./pages/testimonial_pages/AllTestimonials";
import PrivacyPolicy from "./pages/common_pages/PrivacyPolicy";

const PageTitle = ({ title }) => {
  useEffect(() => {
    // Update the document title
    document.title = `${title} - Bonmillette`;

    // Update the favicon dynamically
    const setFavicon = (iconPath) => {
      const link = document.querySelector("link[rel~='icon']");
      if (link) {
        link.href = iconPath;
      } else {
        const newLink = document.createElement("link");
        newLink.rel = "icon";
        newLink.href = iconPath;
        document.head.appendChild(newLink);
      }
    };

    // Set the favicon to your application logo
    setFavicon(logo); // Ensure the path is relative to the public folder
  }, [title]);

  return null;
};

const TitleUpdater = () => {
  const getPageTitle = (pathname) => {
    if (pathname === "/" || pathname === "/home" || pathname === "/homepage") {
      return "Homepage";
    } else if (pathname === "/contact-us") {
      return "Contact Us";
    } else if (pathname === "/about-us") {
      return "About Us";
    } else if (pathname === "/shop") {
      return "Shop";
    } else if (pathname === "/our-story") {
      return "Our Story";
    } else if (pathname === "/all-blogs") {
      return "All Blogs";
    } else if (pathname.startsWith("/single-blog/")) {
      const id = pathname.split("/")[2]; // Extract the ID
      return `Single Blog - ${id}`;
    } else if (pathname === "/testimonials") {
      return "Testimonials";
    } else if (pathname === "/privacy-policy") {
      return "Privacy Policy";
    } else {
      return "Page Not Found";
    }
  };

  const pageTitle = getPageTitle(window.location.pathname);

  return <PageTitle title={pageTitle} />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <TitleUpdater />
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/shop" element={<AllProducts />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/all-blogs" element={<AllBlogs />} />
          <Route path="/single-blog/:id" element={<SingleBlog />} />
          <Route path="/testimonials" element={<AllTestimonials />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/page-not-found" element={<PageNotFound />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
