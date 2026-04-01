import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { config } from "../config/index";

interface VarietyPlant {
  id: number;
  common_name: string;
  default_image?: {
    original_url: string;
  };
}
const  Gallery= ()=> {
    const { api_key } = config;
    const [plants, setPlants] = useState<VarietyPlant[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
            
                const response = await axios.get(`https://perenual.com/api/v2/species-list?key=${api_key}`);
                setPlants(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        
        fetchData();
    }, []);

    return (
        <div >
            <h1 className="text-6xl font-libre font-bold underline pt-24 text-center space-y-5">Gallery</h1>
        <div className="grid grid-cols-1 pt-15 md:grid-cols-3 gap-6">
          
          {plants.map((plant) => (
            <div key={plant.id} className="border p-4 rounded ">
            
              <h2 className="text-lg font-semibold mb-2">
                {plant.common_name || "No Name"}
              </h2>

              {plant.default_image?.original_url && (
                <img
                  src={plant.default_image.original_url}
                  alt={plant.common_name}
                  className="w-full h-48 object-cover rounded"
                />
              )}
            </div>))}
        </div>
            </div>
    );
}

export default Gallery;
