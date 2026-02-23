
const Background = ({ children }) => {
    
  return (
    <Aurora
  colorStops={["#7cff67","#B19EEF","#5227FF"]}
  blend={0.2}
  amplitude={1.0}
  speed={1}
>
      {children}
      </Aurora>
  );
};

export default Background;
