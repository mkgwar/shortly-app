import "./App.css";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100">
      <Navbar />
      <Header />
      <main className="overflow-auto">
        <Input />
        <Features />
        <Boost />
      </main>
      <Footer />
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between py-12 px-8">
      <div>
        <img src="/images/logo.svg" alt="logo" />
      </div>

      <div className="h-6 flex flex-col gap-1">
        <div className="bg-Grayish-Violet h-1/3 w-8" />
        <div className="bg-Grayish-Violet h-1/3 w-8" />
        <div className="bg-Grayish-Violet h-1/3 w-8" />
      </div>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="flex flex-col items-center overflow-auto">
      <div className="h-96 w-full pl-8">
        <img
          src="/images/illustration-working.svg"
          alt="header"
          className="h-full w-full object-cover object-left pointer-events-none"
        />
      </div>
      <h1 className="font-black text-4xl text-center mt-12 text-Dark-Violet">
        More than just shorter links
      </h1>
      <p className="text-center text-lg w-4/5 mt-4 text-Grayish-Violet leading-8">
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <button className="rounded-full mt-8">Get Started</button>
    </header>
  );
};

const Input = () => {
  return (
    <div className="flex flex-col w-11/12 mx-auto p-8 bg-Dark-Violet relative  rounded-xl overflow-hidden mt-20">
      <img
        src="/images/bg-shorten-mobile.svg"
        alt="bg"
        className="absolute w-full h-full bottom-1/3 pointer-events-none"
      />
      <input
        type="text"
        placeholder="Shorten a link here..."
        className="p-4 font-black rounded-lg z-20 focus:outline-0 border-4 border-transparent"
      />
      <span className="text-Red-custom z-20 text-sm italic mt-2">
        Please add a link
      </span>
      <button className="rounded-lg z-20 mt-4">Shorten It!</button>
    </div>
  );
};

const url = ["brand-recognition", "detailed-records", "fully-customizable"];

const title = ["Brand Recognition", "Detailed Records", "Fully Customizable"];

const paragraph = [
  "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
];

const Features = () => {
  return (
    <>
      <div className="w-11/12 mx-auto text-center p-8 mt-16 mb-20">
        <h1 className="text-Dark-Violet font-black text-3xl">
          Advanced Statistics
        </h1>
        <p className="text-Grayish-Violet mt-4 leading-8">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      {FeatureItem(url[0], title[0], paragraph[0])}
      <div className="bg-Cyan-custom h-32 w-2 mx-auto" />
      {FeatureItem(url[1], title[1], paragraph[1])}
      <div className="bg-Cyan-custom h-32 w-2 mx-auto" />
      {FeatureItem(url[2], title[2], paragraph[2])}
    </>
  );
};

const FeatureItem = (url, title, paragraph) => {
  return (
    <div className="w-11/12 mx-auto text-center bg-white px-8 pb-8 rounded-lg shadow-md">
      <div className="h-24 w-24 bg-Dark-Violet flex justify-center items-center rounded-full mx-auto relative -top-12">
        <img
          src={"/images/icon-" + url + ".svg"}
          alt="feature"
          className="pointer-events-none"
        />
      </div>
      <h1 className="text-2xl font-black text-Dark-Violet">{title}</h1>
      <p className="text-Grayish-Violet mt-4 leading-8">{paragraph}</p>
    </div>
  );
};

const Boost = () => {
  return (
    <div className="w-full h-80 bg-Dark-Violet relative flex justify-center items-center flex-col text-center mt-32">
      <img
        src="/images/bg-boost-mobile.svg"
        alt="boost"
        className="absolute h-full w-full pointer-events-none"
      />
      <h1 className="z-10 text-3xl text-white font-black">
        Boost your links today
      </h1>
      <button className="z-10 rounded-full mt-8">Get Started</button>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center p-16 bg-Very-Dark-Violet">
      <img src="/images/logo.svg" alt="logo" className="footer-logo" />
      <h2>Features</h2>
      <a href="https://google.com">Link Shortening</a>
      <a href="https://google.com">Branded Links</a>
      <a href="https://google.com">Analytics</a>

      <h2>Resources</h2>
      <a href="https://google.com">Blog</a>
      <a href="https://google.com">Developers</a>
      <a href="https://google.com">Support</a>

      <h2>Company</h2>
      <a href="https://google.com">About</a>
      <a href="https://google.com">Our Team</a>
      <a href="https://google.com">Careers</a>
      <a href="https://google.com">Contact</a>

      <div className="flex gap-8 mt-12">
        <img src="/images/icon-facebook.svg" alt="icon" />
        <img src="/images/icon-twitter.svg" alt="icon" />
        <img src="/images/icon-pinterest.svg" alt="icon" />
        <img src="/images/icon-instagram.svg" alt="icon" />
      </div>
    </footer>
  );
};

export default App;
