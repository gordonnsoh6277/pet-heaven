import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pets.css';

const Pets = () =>
{
   //state to hold image URLs fetched from Dog API
  const [dogImageURL, setDogImageURL] = useState ( []);
  const [catImageURL, setCatImageURL] = useState ( []);

  // state to keep track of selected dog and cat index
  const [selectedDog, setSelectedDog] = useState (null);
  const [selectedCat, setSelectedCat] = useState (null);

  //animal information
  const dogInfo = [
    { name: 'Buddy', age: 10, breed: 'Golden Retriever', size: 'Medium', color: 'Brown', personality: 'Calm', trait: 'Loves to nap'},
    { name: 'Rex', age: 8, breed: 'German Shepherd', size: 'Small', color: 'Black', personality: 'Energetic', trait: 'Loves to play'},
    { name: 'Charlie', age: 5, breed: 'Labrador Retriever', size: 'Large', color: 'White', personality: 'Friendly', trait: 'Loves walks'},
    { name: 'Lucy', age: 3, breed: 'Beagle', size: 'Small', color: 'Tan', personality: 'Cheerful', trait: 'Enjoys digging'},
    { name: 'Max', age: 6, breed: 'Boxer', size: 'Large', color: 'Brindle', personality: 'Outgoing', trait: 'Enjoys running'},
    { name: 'Bella', age: 4, breed: 'Poodle', size: 'Medium', color: 'Apricot', personality: 'Smart', trait: 'Loves grooming'},
    { name: 'Cooper', age: 7, breed: 'Dachshund', size: 'Small', color: 'Black and Tan', personality: 'Adventurous', trait: 'Loves to burrow'},
    { name: 'Luna', age: 2, breed: 'Siberian Husky', size: 'Large', color: 'Gray and White', personality: 'Sociable', trait: 'Enjoys howling'},
    { name: 'Rocky', age: 9, breed: 'Bulldog', size: 'Medium', color: 'Fawn', personality: 'Easygoing', trait: 'Loves belly rubs'},
    { name: 'Daisy', age: 6, breed: 'Shih Tzu', size: 'Small', color: 'White and Brown', personality: 'Sweet', trait: 'Loves attention'},
  ];
  
  const catInfo = [
    { name: 'Whiskers', age: 4, breed: 'Siamese', size: 'Small', color: 'Cream', personality: 'Talkative', trait: 'Loves to perch'},
    { name: 'Mittens', age: 6, breed: 'Persian', size: 'Medium', color: 'Gray', personality: 'Reserved', trait: 'Enjoys sunbathing'},
    { name: 'Shadow', age: 3, breed: 'Maine Coon', size: 'Large', color: 'Brown Tabby', personality: 'Gentle', trait: 'Loves playing with toys'},
    { name: 'Luna', age: 5, breed: 'Tabby', size: 'Medium', color: 'Orange Tabby', personality: 'Playful', trait: 'Enjoys chasing shadows'},
    { name: 'Oreo', age: 2, breed: 'British Shorthair', size: 'Medium', color: 'Black and White', personality: 'Cuddly', trait: 'Loves to sleep'},
    { name: 'Leo', age: 7, breed: 'Ragdoll', size: 'Large', color: 'Blue Bicolor', personality: 'Relaxed', trait: 'Enjoys being carried'},
    { name: 'Cleo', age: 4, breed: 'Bengal', size: 'Medium', color: 'Spotted Rosetted', personality: 'Active', trait: 'Loves climbing'},
    { name: 'Simba', age: 8, breed: 'Sphynx', size: 'Small', color: 'Pink', personality: 'Curious', trait: 'Enjoys being warm'},
    { name: 'Nala', age: 3, breed: 'Scottish Fold', size: 'Small', color: 'Silver Shaded', personality: 'Affectionate', trait: 'Loves being pampered'},
    { name: 'Felix', age: 6, breed: 'Abyssinian', size: 'Medium', color: 'Ruddy', personality: 'Energetic', trait: 'Loves to explore'},
  ];
  
  //get dog and cat images from respective APIs
  const fetchDogData = async (urlSetter, apiEndpoint) =>
  {
    try
    {
      const response = await axios.get (apiEndpoint);
      urlSetter (response.data.message);
    }
    catch (error)
    {
      console.error ('Error:', error);
    }
  };

  const fetchCatData = async (urlSetter, apiEndpoint) =>
  {
    try
    {
      const response = await axios.get (apiEndpoint);
      urlSetter (response.data);
    }
    catch (error)
    {
      console.error ('Error:', error);
    }
  };

  //hook to detch initial data on component mount
  useEffect(() =>
  {
    fetchDogData (setDogImageURL, 'https://dog.ceo/api/breeds/image/random/10');
    fetchCatData (setCatImageURL, 'https://api.thecatapi.com/v1/images/search?limit=15');
  }, []);

  //handle click on image, updating selected dog index
  const handleDogImageClick = (index) =>
  {
    setSelectedDog (index);
    setSelectedCat (null); //reset selected cat
  };

  //handle click on image, updating selected cat index
  const handleCatImageClick = (index) =>
  {
    setSelectedCat (index);
    setSelectedDog (null); //reset selected dog
  };

  // creates individual image card
  const createImageCard = (mySrc, index, info, isDog) =>
  {
    const isSelected = isDog ? selectedDog === index : selectedCat === index;

    return (
      <div className = {`image-card ${isSelected ? 'flipped' : ''}`} key = {index}
          onClick = {() => (isDog ? handleDogImageClick (index) : handleCatImageClick (index))}>

        <div className = "card-front">
          <img src = {mySrc} alt = {`Pet ${index + 1}`} width = "200px" height = "200px" />
        </div>

        <div className = "card-back">
          <h6>Name: {info [index].name}</h6>
          <h6>Age: {info [index].age}</h6>
          <h6>Breed: {info [index].breed}</h6>
          <h6>Size: {info [index].size}</h6>
          <h6>Color: {info [index].color}</h6>
          <h6>Personality: {info [index].personality}</h6>
          <h6>Trait: {info [index].trait}</h6>
        </div>

      </div>
    );
  };

  return (
    <div>
      <h2>Adopt a Pet today!</h2>
      <div className = "pets-container">
        <div className="dog-container">
          {dogImageURL.map((url, index) => createImageCard(url, index, dogInfo, true))}
        </div>
        <div className="cat-container">
          {catImageURL.map((url, index) => createImageCard(url.url, index, catInfo, false))}
        </div>
      </div>
    </div>
  );
};

export default Pets;