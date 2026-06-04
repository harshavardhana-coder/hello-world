import React from 'react'

const cats = [
  {
    id: 1,
    name: "Luna",
    description: "A playful kitten who loves chasing strings.",
    type: "Domestic Short Hair",
    skills: ["Jumping", "Climbing", "Purring"],
    image: "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg"
  },
  {
    id: 2,
    name: "Simba",
    description: "Confident and curious, always exploring new places.",
    type: "Maine Coon",
    skills: ["Hunting", "Cuddling", "Climbing"],
    image: "https://cdn2.thecatapi.com/images/MTY3ODIyMg.jpg"
  },
  {
    id: 3,
    name: "Mochi",
    description: "Gentle and calm, enjoys long naps in the sun.",
    type: "Persian",
    skills: ["Sleeping", "Grooming", "Observing"],
    image: "https://cdn2.thecatapi.com/images/MTY3ODIyNA.jpg"
  },
  {
    id: 4,
    name: "Shadow",
    description: "Mysterious and agile, loves hiding in corners.",
    type: "Bombay",
    skills: ["Sneaking", "Leaping", "Staring"],
    image: "https://cdn2.thecatapi.com/images/MTY3ODIyNQ.jpg"
  }
];
 
const Cats = () => {
  return (
    <div>
        <h1>My Pets</h1>
        {cats.map((cat)=> (
            <div key={cat.id}>
            <ul>
                <li>Name: {cat.name}</li>
                <li>Type: {cat.type}</li>
                <li>Description: {cat.description}</li>
                <li>Skills: {cat.skills.slice("").join(", ")}</li>
            </ul>
            </div>
        ))}
    </div>
  )
}

export default Cats