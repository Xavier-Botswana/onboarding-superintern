import "./App.css";
import "./index.css";
import Logo from "./components/logo.tsx";
import TaskDescriptionForm from "./components/TaskDescriptionForm.tsx";
import { useState } from "react";
import FormField from "./components/FormField";
import ProgressBar from "./components/ProgressBar";
import ThankYou from "./components/ThankYou.tsx";
import FieldTitle from "./components/FieldTitle.tsx";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

function App() {
  const [currentField, setCurrentField] = useState<number>(0);

  const formFields = [
    {
      label: "What is your intern's name?",
      placeholder: "tell us what your intern is called...",
      type: "text",
      currentForm: "0",
    },
    {
      label: "Describe the task with as much detail as necessary",
      placeholder: "describe the task here...",
      type: "textarea",
      currentForm: "1",
    },
    {
      label: "Define the objective or objectives of this task",
      placeholder: "write your objectives here...",
      type: "textarea",
      currentForm: "2",
    },
    {
      label: "Address",
      placeholder: "Enter your address",
      type: "text",
      currentForm: "5",
    },
    {
      label: "What are the expected output(s)? Please provide 3 examples",
      placeholder: "write what your expected output should look like...",
      type: "textarea",
      currentForm: "3",
    },
    {
      label: "What are the input parameters they should follow?",
      placeholder: "give as much detail as you can...",
      type: "textarea",
      currentForm: "4",
    },
  ];
  const fieldTitles = [
    "Let's Name Your Intern Together",
    "Let's Define The Task",
    "Let's Outline The Objectives",
    "Let's Define The Steps Task",
    "Let's Outline The Expected Outputs",
    "Let's Define The Input Parameters",
  ];

  const nextField = () => {
    setCurrentField((prevField) =>
      prevField < formFields.length ? prevField + 1 : prevField
    );
  };

  const prevField = () => {
    setCurrentField((prevField) => (prevField > 0 ? prevField - 1 : prevField));
  };

  const percentage = ((currentField + 1) / (formFields.length + 1)) * 100;

  return (
    <center style={{ height: "100%" }}>
      <div className="w-full" style={{ height: "100%" }}>
        <Logo />
        <div className="text-white mt-14" style={{ width: "100%" }}>
          <p className="m-4">On The Job Training</p>
          <div
            className=" text-white justify-center items-center w-fit "
            style={currentField == 3 ? { width: "80%" } : { width: "50%" }}
          >
            <div
              className={
                currentField == 3
                  ? "w-full p-6 bg-black rounded-xl surround-shadow bgmain"
                  : "w-full p-6 bg-black rounded-xl surround-shadow bgmain"
              }
            >
              <div className="mb-4 pl-6 text-white">
                <FieldTitle fieldtitle={fieldTitles[currentField]}></FieldTitle>
              </div>
              <div>
                <form className="p-6 rounded-lg shadow-lg">
                  {currentField == 3 ? (
                    <TaskDescriptionForm />
                  ) : currentField < formFields.length ? (
                    <>
                      <FormField field={formFields[currentField]} />
                    </>
                  ) : (
                    <ThankYou />
                  )}
                </form>
              </div>
            </div>
            <div className="mt-4 min-w-full">
              <div style={{ float: "right" }}>
                <button
                  type="button"
                  className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-xl"
                  onClick={prevField}
                  disabled={currentField === 0}
                >
                  <AiOutlineLeft></AiOutlineLeft>
                </button>
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-xl"
                  onClick={nextField}
                >
                  <AiOutlineRight></AiOutlineRight>
                </button>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <center>
          <div
            className={
              currentField == 3
                ? " text-gray-500 bottom-0 m-4 left-0 right-0 w-auto"
                : "absolute text-gray-500 bottom-0 m-4 left-0 right-0 w-auto"
            }
          >
            <p
              className="text-center text-white mt-4"
              style={{ fontSize: "12px" }}
            >
              Step {currentField + 1} of {formFields.length + 1}{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;
              {percentage.toFixed(1)}%
            </p>
            <ProgressBar
              totalSteps={formFields.length}
              currentStep={currentField}
            />
          </div>
        </center>
      </div>
    </center>
  );
}

export default App;
