import React from 'react'
const plants = [
  {
    id: 1,
    name: "Burgmansia",
  },
  {
    id: 2,
    name: "Dwarf Ebony",
  },
  {
    id: 3,
    name: "Euphorbia Obesa",
  },
  {
    id: 4,
    name: "Pygmy Rwandan Waterlily",
  },
  {
    id: 5,
    name: "Blue Amaryllis",
  },
  {
    id: 6,
    name: "Aloe Albiflora",
  },
  {
    id: 7,
    name: "Golden Fuchsia",
  }
];
const image_url = "/Images/Species_images/";
 

const Species = () => {
  
  return (
    <section className="font-libre ">
      <div className="container pl-15">
        <h2 className="underline text-2xl">Endangered Species</h2>
      </div>
      
         <div className="grid grid-cols-4 gap-3 p-2 mx-15">
        {plants.map((img) => (
        <div key={img.id}>
        <img
          key={img.id}
          src={`${image_url}${img.name.replaceAll(" ","_")}.png`}
          alt={img.name}
          className="w-40 h-40 "
        />
            <p>{img.name}</p>
            
          </div>
      ))}
  
      </div>
      <div className="w-full h-1 border-8 border-[#F3AD61]"></div>
      </section>
  )
}

export default Species