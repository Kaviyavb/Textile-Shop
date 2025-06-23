// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Topbar from "./components/Topbar";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./pages/Dashboard";
// import UploadProduct from "./pages/UploadProduct";
// import "./App.css"; // We will define layout CSS here

// function App() {
//   return (
//     <div className="app-layout">
//       <Topbar />
//       <div className="main-body">
//         <Sidebar />  
//          <div className="page-content">
//            <Routes>
//             <Route path="/Dashboard" element={<Dashboard />} />
//             <Route path="/upload" element={<UploadProduct />} />
//           </Routes> 
//         </div> 
//       </div>
//     </div>
//   );
// }

// export default App;
import React from "react";
import {Routes,Route} from "react-router-dom";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import UploadProduct from "./pages/UploadProduct";
import Orders from "./pages/Orders";
import DeliveryTracking from "./pages/DeliveryTracking";  
import Stocks from "./pages/Stocks";
import Expense from "./pages/Expense";
import Reviews from "./pages/Reviews";
import AdvertisementList from "./pages/AdvertisementList";
import "./App.css";

function App() {
  return (
    
      <div className="app-layout">
        <Topbar />
        <div className="main-body">            <Sidebar />
                  <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/upload" element={<UploadProduct />} />
              <Route path="/Orders" element={<Orders />} />
              <Route path="/delivery" element={<DeliveryTracking />} />
              <Route path="/stocks" element={<Stocks />} />
              <Route path="/expense" element={<Expense />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/ads" element={<AdvertisementList />} />
            </Routes>
          </div>
        </div>
      </div>
    
  );
}

export default App;
