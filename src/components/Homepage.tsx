import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container-homePage">
      <h2 className="container-text-style">
        <strong>
          Chi <span className="text-style">sono?</span>
        </strong>
      </h2>
      <div id="about-me-img">
        <img
          src="https://scontent.fmxp5-1.fna.fbcdn.net/v/t39.30808-6/362242407_7381897325170216_1473217527410958488_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ep6DsQ_8IJsQ7kNvgGgeEap&_nc_oc=AdhzX_-lD_M0A-j3RnemtT323bzZPTPGvJqFYMlrTPeTxVQYm3txGbdV-4rD7nG3aJGdkj5SyajTR2WzGk3CG1iB&_nc_zt=23&_nc_ht=scontent.fmxp5-1.fna&_nc_gid=A8iHR1Cz9w_ZqIaLlOQc0OP&oh=00_AYDxaDcU0ctKXLFOu0sCiLu4IYb0w3kLjNpEEAJxKsiFyg&oe=67886D91"
          alt="Miriam Vassallo"
          className="profile-img"
        />
      </div>
      <h4 className="name">Miriam Vassallo</h4>
      <div className="description-about-me">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
          molestias odio dolorum. Fugiat laboriosam doloremque consectetur sed
          eum corporis voluptas, debitis quasi dolorum itaque temporibus facilis
          voluptatem suscipit. Cupiditate, obcaecati.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
