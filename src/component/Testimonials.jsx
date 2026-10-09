import React from "react";
import "./Testimoni.css";
import muthu from"../assets/muthu.jpeg";
import hari from"../assets/hari.jpeg";
import anu from"../assets/anu.jpeg";
import mathi from"../assets/mathi.jpeg";

function Testimonials() {
  const testimonials = [
    {
      name: "Muthumari",
      role: "Roll No: 101",
      image: muthu,
      feedback: "This class was very useful. I learned React and web development easily."
    },
    {
      name: "Harini",
      role: "Roll No: 102",
      image: hari,
      feedback: "The class was interesting and easy to understnd."
    },
    {
      name: "Anusiya",
      role: "Roll No: 103",
      image: anu,
      feedback: "I enjoyed the practical sessions and learned many new things."
    },
    {
      name: "Venmathi",
      role: "Roll No: 104",
      image: mathi,
      feedback: "The class was easy to understand and the practical work was helpful."
    }
  ];

  return (
    <div className="testimonials">
      <h1>Testimonials</h1>

      <div className="testimonial-container">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img src={item.image} alt={item.name} />

            <h2>{item.name}</h2>

            <h4>{item.role}</h4>

            <p>{item.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;