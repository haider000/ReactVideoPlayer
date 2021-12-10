import InputGroup from "react-bootstrap/InputGroup";
import { FormControl } from "react-bootstrap";
import { useState } from "react";

const AddYoutubeUrl = ({ youtubeUrl, setYoutubeUrl, setSelectedVideo }) => {
  const [val, setVal] = useState(youtubeUrl);

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Enter Youtube video Url"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button
        style={{
          background: "transparent",
          border: "none",
          textDecoration: "none"
        }}
        onClick={() => {
          setSelectedVideo(-1);
          setYoutubeUrl(val);
        }}
      >
        <InputGroup.Text id="basic-addon2">Add Youtube Video</InputGroup.Text>
      </button>
    </InputGroup>
  );
};

export default AddYoutubeUrl;
