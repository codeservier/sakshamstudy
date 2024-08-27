import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db, doc, getDoc } from '../../firebase';
import Card from '../components/card/Card';

const ContinueWatching = () => {
  const navigate = useNavigate();
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        // Replace 'registration' with the actual name of your collection
        const docRef = doc(db, 'registration', 'your-document-id');
        
        console.log('Fetching document:', docRef); // Debugging: log the document reference

        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log('Fetched data:', data); // Debugging: log the fetched data

          const libraryLogoUrl = data.libraryLogoUrl;
          console.log('Library logo URL:', libraryLogoUrl); // Log the library logo URL

          setCardsData([
            {
              id: data.id,
              title: data.title,
              description: data.description,
              image: libraryLogoUrl || '/path/to/default-image.jpg', // Fallback image
            },
          ]);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchCardData();
  }, []);

  const handleCardClick = (cardId) => {
    navigate(`/coursedetail/${cardId}`);
  };

  return (
    <div className="container mx-auto p-6 my-4">
      <h1 className="text-2xl font-medium text-primary text-400 mb-4">
        Popular Library
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;