import { BrowserRouter as Router, Route, Link, Switch, Routes, Navigate }
    from "react-router-dom";
import Upload from "./Upload/Upload";
 

export default function ContentArea() {
  return (
    <>
      {/* routing */}
      <Router>
                <Routes>
                    <Route exact path="/" element={<Navigate to= "/upload"></Navigate>} />
                    <Route exact path="/upload" element={<Upload />} />
                    <Route path="*" element={<h2>Page not Available</h2>} />
                </Routes>
               
            </Router>
    </>
  );
}
