import React, { useState } from "react";
import Notes from "./Notes";

const AlbumsComponent = ({ albums, submitNote }) => {
  const [selectedAl, setSelectedAl] = useState(null);

  const handleClick = (id) => () => {
    setSelectedAl(id);
  };

  const submit = (note) => {
    const data = {
      note,
      albumID: selectedAl,
    };
    submitNote(data);
    setSelectedAl(null);
  };

  return (
    <div>
      {albums ? (
        albums.albums.map((al) => (
          <div style={{ display: "flex" }} key={al.id}>
            <div onClick={handleClick(al.id)}>
              <img
                alt={"album"}
                height={200}
                width={200}
                src={al.images[0].url}
              />
              <p>{al.name}</p>
            </div>
            {selectedAl && selectedAl === al.id && <Notes submit={submit} />}
          </div>
        ))
      ) : (
        <p>Something went wrong! Please login again</p>
      )}
    </div>
  );
};

export default AlbumsComponent;
