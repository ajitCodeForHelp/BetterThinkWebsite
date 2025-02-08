import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../../../Assets/overwork-Image1.webp"
import img2 from "../../../../Assets/overwork-Image2.webp"
import { FaEye } from "react-icons/fa6";


const categories = ["All", "Ecommerce", "Apps", "Web", "Social", "Educational", "Fintech", "Healthcare"];
const projects = [
  { category: "Ecommerce", image: img1, },
  { category: "Ecommerce", image: img2, },
  { category: "Ecommerce", image: img1, },
  { category: "Ecommerce", image: img2, },
  { category: "Ecommerce", image: img1, },
  { category: "Ecommerce", image: img2, }
];

const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-evenly mb-4">
        {categories.map(category => (
          <button
            key={category}
            className={`btn me-2 ${selectedCategory === category ? "btn-warning" : "btn-light"}`}
            onClick={() => setSelectedCategory(category)}
            style={{ padding: "8px 20px", outline: "none", borderRadius: "15px" }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="row">
        {filteredProjects.map((project, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-4">
            <div className="card border-0 project-card">
              <img src={project.image} className="project-image" alt={project.title} />
              <div className="overlay">
                <i className="eye-icon"><FaEye /></i> {/* You can replace this with an actual eye icon */}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGallery;
