import { IconContext } from "react-icons";

// Higher-Order Component that adds the gradient to an icon
const withGradient = (WrappedIcon) => {
  return (props) => (
    <svg width="25" height="25">
      <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(90)">
          <stop offset="5%" stopColor="#FF5353" />
          <stop offset="95%" stopColor="#E91E1E" />
        </linearGradient>
      </defs>
      <IconContext.Provider value={{ attr: { fill: "url(#myGradient)" } }}>
        <WrappedIcon className="text-2xl" {...props} />
      </IconContext.Provider>
    </svg>
  );
};

export default withGradient;
