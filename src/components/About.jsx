import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;