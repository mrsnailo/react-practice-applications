const Card = ({ children, className }) => {
  return (
    <div className={`p-4 bg-white rounded-2xl ${className}`}>{children}</div>
  );
};

export default Card;
