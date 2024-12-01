const Showcase = () => {
    const reviews = [
      { name: "John Doe", review: "Absolutely love my new keyboard!" },
      { name: "Jane Smith", review: "The best typing experience ever." },
    ];
  
    return (
      <div>
        <h1>Showcase</h1>
        {reviews.map((item, idx) => (
          <div key={idx}>
            <h3>{item.name}</h3>
            <p>{item.review}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Showcase;
  