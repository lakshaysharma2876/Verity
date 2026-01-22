import { Link } from "react-router-dom";
import GradientText from "../components/layout/GradientText";
import BlurText from "../components/layout/BlurText";
import TiltedCard from "../components/layout/TiltedCard";

const Home = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section style={{ padding: "10px", textAlign: "center" }}>
      <GradientText>Verity</GradientText>

      <BlurText
        text="Commit publicly. Prove daily. Build credibility."
        delay={200}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      ></BlurText>

      <div
        style={{
          display: "flex",
          marginTop: 32,
          justifyContent: "center",
          alignItems : "center"
        }}
      >
        <Link to="/create">
          <TiltedCard
            imageSrc="https://res.cloudinary.com/ddgkdtbdm/image/upload/v1769094759/commitment_vhy52k.jpg"
            altText="Create Commitment"
            captionText="Create Commitment"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent
            overlayContent={
              <p className="tilted-card-demo-text">Create Commitment</p>
            }
          />
        </Link>

        <Link to="/Dashboard">
          <TiltedCard
            imageSrc="https://res.cloudinary.com/ddgkdtbdm/image/upload/v1769096176/dashboard_vm2lql.jpg"
            altText="Dashboard"
            captionText="Dashboard"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent
            overlayContent={<p className="tilted-card-demo-text">Dashboard</p>}
          />
        </Link>

        <Link to="/contact">
        <TiltedCard
            imageSrc="https://res.cloudinary.com/ddgkdtbdm/image/upload/v1769096621/contact_ty7sbf.jpg"
            altText="Contact Us"
            captionText="Contact Us"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent
            overlayContent={<p className="tilted-card-demo-text">Contact Us</p>}
          /> 
        </Link>
      </div>
    </section>
  );
};

export default Home;
