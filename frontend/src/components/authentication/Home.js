import React, { useState, useEffect } from "react";
import UserService from "../../services/User";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron m-3">
        <h3>{content}</h3>
        Trang đưa thông tin về các banners sử dụng trên các ứng dụng của SAPO
      </header>
    </div>
  );
};

export default Home;