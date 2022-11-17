import { useEffect, useState } from "react";

function ToTheTop() {
  const [toggleBtn, setToggleBtn] = useState(true);
  const handleScroll = () => {
    const { scrollY } = window;

    scrollY > 200 ? setToggleBtn(true) : setToggleBtn(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return toggleBtn ? (
    <img
      onClick={goToTop}
      src={process.env.PUBLIC_URL + "/images/icons8-slide-up-50.png"}
    />
  ) : null;
}

export default ToTheTop;
