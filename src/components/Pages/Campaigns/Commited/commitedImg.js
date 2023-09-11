import campaigns from "../../../../assets/Rectangle 46 (7).png";
import campaigns1 from "../../../../assets/remsort4.png";
import campaigns2 from "../../../../assets/restor2.png";
const imagePaths = [campaigns, campaigns1, campaigns2];

const CommitedImages = imagePaths.map((path, index) => (
  <img
    src={path}
    key={index}
    alt="salam"
    // style={{ width: "432px", height: "324px" }}
  />
));

export default CommitedImages;
