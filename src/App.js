import "./App.css";

const App = () => {
  return (
    <main className="h-screen w-full bg-white relative -z-20 overflow-hidden">
      <div className="bg-div h-[90%] w-1/3 bg-gradient-to-b from-Light-Magenta to-Light-Violet absolute -left-40 rounded-b-full"></div>
      <PhoneApp />
      <TextContent />
      <div className="bg-div h-3/4 w-1/3 bg-gradient-to-b from-Light-Magenta to-Light-Violet absolute -right-40 bottom-0 rounded-t-full -z-10 opacity-5"></div>
    </main>
  );
};

const PhoneApp = () => {
  return (
    <div className="phone w-[450px] rounded-3xl p-4 bg-white scale-75 shadow-2xl absolute left-80 top-1/2 -translate-y-1/2">
      <div className="header relative">
        <div className="notch"></div>
        <img
          src="/images/avatar.jpg"
          alt="avatar"
          className="h-10 rounded-full border-2"
        />
        <div className="text">
          <h1 className="name text-white font-bold">Samuel Green</h1>
          <p className="text-xs mt-1 text-Pale-Violet">Available to Walk</p>
        </div>
      </div>

      <div className="chat-area bg-Light-Grayish-Violet overflow-auto p-4 rounded-b-3xl">
        <div className="chat-received">
          That sounds great. I’d be happy with that.
        </div>
        <div className="chat-received">
          Could you send over some pictures of your dog, please?
        </div>

        <div className="chat-sent dogs flex justify-between gap-4 p-0 w-72 bg-transparent">
          <div className="img">
            <img src="/images/dog-image-1.jpg" alt="dog" />
          </div>
          <div className="img">
            <img src="/images/dog-image-2.jpg" alt="dog" />
          </div>
          <div className="img">
            <img src="/images/dog-image-3.jpg" alt="dog" />
          </div>
        </div>

        <div className="chat-sent w-64">
          Here are a few pictures. She’s a happy girl!
        </div>
        <div className="chat-sent w-fit">Can you make it?</div>

        <div className="chat-received">
          She looks so happy! The time we discussed works. How long shall I take
          her out for?
        </div>

        <div className="chat-received payment">
          30 minute walk <span>$29</span>
        </div>
        <div className="chat-received payment">
          1 hour walk <span>$49</span>
        </div>
        <div className="message mt-8 flex pl-8 p-2 justify-between items-center bg-white text-Grayish-Blue rounded-full relative">
          Type a message…
          <span className="h-12 w-12 rounded-full bg-Very-Dark-Desaturated-Violet flex items-center justify-center font-bold text-white text-2xl">
            &gt;
          </span>
        </div>
      </div>
    </div>
  );
};

const TextContent = () => {
  return (
    <div className="absolute right-1/3 top-1/2 -translate-y-1/2 translate-x-20">
      <h1 className="text-Very-Dark-Desaturated-Violet font-extrabold text-5xl">
        Simple booking
      </h1>
      <h2 className="text-Dark-Grayish-Violet max-w-lg text-lg mt-8 tracking-wide">
        Stay in touch with our dog walkers through the chat interface. This
        makes it easy to discuss arrangements and make bookings. Once the walk
        has been completed you can rate your walker and book again all through
        the chat.
      </h2>
    </div>
  );
};

export default App;
