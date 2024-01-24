const Dots = () => {
  return (
    <div role="status" id="loading-dots">
      <div className="wrapper">
        <span className="sr-only">Loading...</span>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Dots;
