import React from "react";
import { Link } from "react-router-dom";

function PostItem({ postData }) {
  return (
    <div className=" container ">
      <div className="post-card card mb-3  ">
        <div className="post-card-owner-main-div row g-0">
          <div className="post-card-img-div col-md-4">
            <img
              src={postData.owner.picture}
              className="post-card-owner-pict img-fluid rounded-start mb-3"
              alt="Not Found"
            />
          </div>
          <div className="col-md-8">
            <div className="post-card-owner-name-div card-body">
              <h5 className="card-title">
                {postData.owner.title} {postData.owner.firstName}{" "}
                {postData.owner.lastName}
              </h5>
            </div>
          </div>
        </div>
        <div className="pet-info-main-div row g-0">
          <div className="pet-img-div col-md-4">
            <img
              src={postData.image}
              className="pet-img img-fluid rounded-start"
              alt="Not Found"
            />
          </div>
          <div className="pet-info-text-div col-md-8">
            <div className="pet-info-text card-body">
              <h5 className="pet-info-text-name card-title">{postData.text}</h5>
              <p className="pet-info-text-date card-text">
                <small className="text-muted">{postData.publishDate}</small>
              </p>

              <div className="pet-info-text-tag">
                <span className="badge rounded-pill mx-1 mb-2 text-bg-danger">
                  {postData.tags[0]}
                </span>
                <span className="badge rounded-pill mx-1 mb-2 text-bg-danger">
                  {postData.tags[1]}
                </span>
                <span className="badge rounded-pill mx-1 mb-2 text-bg-danger">
                  {postData.tags[2]}
                </span>
              </div>
              <p className="pet-info-text-like card-text">
                <small className="text-muted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-hand-thumbs-up-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                  </svg>{" "}
                  {postData.likes}
                </small>
              </p>
              <div className="pet-info-text-btn-div text-center">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to={`/post/${postData.id}`}
                >
                  <button type="button" className="pet-info-text-btn btn btn-outline-dark btn-sm ">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
