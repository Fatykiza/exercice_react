function Card({ children }) {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="image"
        alt="description image"
      />
      {children}
    </div>
  );
}
export default Card;
