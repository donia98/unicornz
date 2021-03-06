import React from "react";
import './style.css'

export const Wizard = ({ step: currentIndex, ...props }) => {
  const steps = React.Children.toArray(props.children);
  const prevStep = currentIndex !== 0 && steps[currentIndex - 1].props;
  const nextStep =
    currentIndex !== steps.length - 1 && steps[currentIndex + 1].props;

    const SubmitQhandler = () => {
      props.history.push('/dash/1');
    }

  return (
    <div className="Qcontainer">
      <nav className="Q-nav">
        {steps.map((step, index) => (
          <button
            key={step.props.title}
            onClick={() => props.onChange(index)}
            className={getClsNavBtn(index === currentIndex)}
            title={step.props.description}
          >
            {step.props.title}
          </button>
        ))}
      </nav>
      {steps[currentIndex]}

      <div className="next-back-btns">
        <Button
          visible={prevStep}
          onClick={() => props.onChange(currentIndex - 1)}
          title={prevStep.description}
        >
          Back
        </Button>
        <Button
          visible={nextStep}
          onClick={() => props.onChange(currentIndex + 1)}
          title={nextStep.description}
        >
          Next
        </Button>
      </div>
      <span id="or">or</span>
      <button className="Q-submit" type="submit" onClick={SubmitQhandler}>Submit & Let's start</button>
    </div>
  );
};

export const Step = ({ children }) => children;

function getClsNavBtn(active) {
  return "Q-nav-btn" + (active ? "-active" : "");
}

function Button({ visible, ...props }) {
  return (
    <button className={visible ? "back-btn" : "invisible"} {...props} />
  );
}