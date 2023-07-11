import React, { useEffect, useState } from 'react';

const ImageRenderer = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestData = {
          visual_category: 'poster',
          name: 'FabFinder Bot',
          concept: 'Step into style effortlessly with FabFinder Bot - the AI-powered personal stylist that helps busy women stay ahead of the fashion curve while maximizing their shopping time.',
        };

        const response = await fetch('http://35.220.218.172:8000/generate_visual/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData)
          setImages([responseData.visual]);
          const response1 = await fetch('http://35.220.218.172:8000/generate_images/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({visual: responseData.visual}),
        });
        const responseData1 = await response1.json();
        console.log(responseData1)
         setImages([responseData1.KD, responseData1.SD, responseData1.DA]);
        
        } else {
          console.error('Request failed with status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
      <img src={`data:image/png;base64,${images[0]}`} alt="Image 1" />
      <img src={`data:image/png;base64,${images[1]}`} alt="Image 2" />
      <img src={`data:image/png;base64,${images[2]}`} alt="Image 3" />
    </div>
    </div>
  );
};

export default ImageRenderer;