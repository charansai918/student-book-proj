import React, { useRef, useState } from 'react';

const Book = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [publish, setPublish] = useState('');
  const [year, setYear] = useState('');
  const [gridData, setGridData] = useState([]);

  const bookNameRef = useRef()
  const authorRef=useRef()
  const publishRef=useRef()
  const yearRef=useRef()

  const handleNameChange = (e) => setName(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);
  const handlePublishChange = (e) => setPublish(e.target.value);
  const handleYearChange = (e) => setYear(e.target.value);

  const handleButtonClick = () => {
  
    const dummyGridData = [
      { id: 1,name:bookNameRef.current.value, author:authorRef.current.value, publish:publishRef.current.value, year:yearRef.current.value },
      
     
      ];

    setGridData(dummyGridData);
  };

  return (
    <div>
      <form className='book-form'>
        <h2>Book</h2>
      <label>
          Name:
          <input type="text" ref={bookNameRef} value={name} onChange={handleNameChange} />
        </label>
        <label>
          Author:
          <input type="text"ref={authorRef} value={author} onChange={handleAuthorChange} />
        </label>
        <label>
          Publish:
          <input type="text"ref={publishRef} value={publish} onChange={handlePublishChange} />
        </label>
        <label>
          Year:
          <input type="month" ref={yearRef} value={year}  onChange={handleYearChange} />
        </label>
        <button className='search-button' type="button" onClick={()=>{
            handleButtonClick()
        }}>Search</button>
      </form>

      <div>
        <h2>Grid Data:</h2>
        <table className='grid-data'>
          <thead>
            <tr>
             
              <th>Name</th>
              <th>Author</th>
              <th>Publish</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {gridData.map((item) => (
              <tr key={item.id}>
                
                <td>{item.name}</td>
                <td>{item.author}</td>
                <td>{item.publish}</td>
                <td>{item.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Book;

