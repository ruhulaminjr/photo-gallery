import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './firegram/uploadForm';
import ImageGrid from './comps/imageGrid';
import Modal from './comps/Modal';
function App() {
  const [selectedIMG,setSelectedIMG] = useState(null)
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
     <ImageGrid setSelectedIMG={setSelectedIMG}/>
     {selectedIMG && <Modal setSelectedIMG={setSelectedIMG} selectedIMG={selectedIMG}/>}
    </div>
  );
}

export default App;
