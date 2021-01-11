import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./layouts/Header";
import Page from "./layouts/Page";
import Navigation from "./layouts/Navigation";
import Footer from "./layouts/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header header_main">{<Header />}</header>
        <main className="main main_main">
          <aside className="aside aside_main">{<Navigation />}</aside>
          <section className="section section_main section_page">
            {<Page />}
          </section>
        </main>
        <footer className="footer footer_main">{<Footer />}</footer>
      </div>
    </Router>
  );
}

export default App;
