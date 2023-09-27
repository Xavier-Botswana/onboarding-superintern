import { useState } from "react";

type TaskStep = {
  step: string;
  perfectCase: string;
  anomalies: string;
  outputExamples: string;
};

function TaskDescriptionForm() {
  const [taskSteps, setTaskSteps] = useState<TaskStep[]>([
    { step: "", perfectCase: "", anomalies: "", outputExamples: "" },
  ]);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const addStep = () => {
    setTaskSteps([
      ...taskSteps,
      { step: "", perfectCase: "", anomalies: "", outputExamples: "" },
    ]);
  };

  const handleStepChange = (
    index: number,
    field: keyof TaskStep,
    value: string
  ) => {
    const updatedSteps = [...taskSteps];
    updatedSteps[index][field] = value;
    setTaskSteps(updatedSteps);
  };

  const highlightStep = (index: number) => {
    setCurrentStepIndex(index);
  };

  return (
    <div>
      <div
        className="mx-auto  text-white"
        style={{ width: "100%", textAlign: "left" }}
      >
        <p className="mt-2">
          Define the steps need to carry out the task(i.e., what you want the
          intern to do). Proceed to define the task and give examples on every
          step
        </p>
      </div>
      <div
        className="mx-auto items-center  text-white"
        style={{ width: "100%" }}
      >
        <div className="flex mt-4 justify-center">
          <div
            className="flex flex-col relative items-center bg-black p-1 pt-6 rounded-lg"
            style={{ width: "12%" }}
          >
            {taskSteps.map((step, index) => (
              <tr className="w-fill m-1 rounded-lg" key={index}>
                <td className="  rounded-lg" style={{ width: "80px" }}>
                  <p
                    className={
                      currentStepIndex === index
                        ? "text-white rounded-lg p-2 bg-blue-900"
                        : "text-white"
                    }
                    style={{
                      color: currentStepIndex === index ? "white" : "white",
                    }}
                  >
                    Step {index + 1}
                  </p>
                </td>
              </tr>
            ))}
            <button
              type="button"
              style={{ width: "90%" }}
              className="bg-black border border-blue-900 text-sm bottom-2
               absolute hover:bg-blue-700 text-white py-2 px-4 rounded-lg mb-0"
              onClick={addStep}
            >
              Add Step
            </button>
          </div>
          <div className="" style={{ width: "88%" }}>
            <table className=" text-white mx-auto rounded-lg">
              <thead>
                <tr className="w-fit" style={{ textAlign: "center" }}>
                  <th className="w-1/5 px-6 py-0">
                    <p className=" rounded-t-md font-normal py-2 text-sm">
                      Description
                    </p>
                  </th>
                  <th className="w-1/5 px-6 py-0">
                    <p className="bg-blue-900 rounded-t-md font-normal py-2 text-sm">
                      Perfect Case
                    </p>
                  </th>
                  <th className="w-1/5 px-6 py-0">
                    <p className="bg-blue-900 rounded-t-md font-normal py-2 text-sm">
                      Anomalies
                    </p>
                  </th>
                  <th className="w-1/5 px-6 py-0">
                    <p className="bg-blue-900 rounded-t-md font-normal py-2 text-sm">
                      Output Examples
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody
                className="text-gray-300 border-blue-700 rounded-lg
               border w=fit border-collapse"
              >
                <br></br>
                {taskSteps.map((step, index) => (
                  <tr key={index} className="w-auto rounded-lg text-sm">
                    <td className=" text-center p-2 rounded-lg ">
                      <textarea
                        placeholder="outline what the task is "
                        className={` p-2 h-10 bg-none outline-none 
                        border-b border-gray-900 bg-transparent ${
                          currentStepIndex === index ? "" : ""
                        }`}
                        style={{ width: "100%" }}
                        value={step.step}
                        onChange={(e) =>
                          handleStepChange(index, "step", e.target.value)
                        }
                        onFocus={() => highlightStep(index)}
                      />
                    </td>
                    <td className="  text-center p-2 rounded-lg h-32">
                      <textarea
                        placeholder="outline the perfect case"
                        className=" p-2 h-10 bg-none outline-none 
                        border-b border-black bg-transparent"
                        style={{ width: "100%" }}
                        value={step.perfectCase}
                        onChange={(e) =>
                          handleStepChange(index, "perfectCase", e.target.value)
                        }
                      />
                    </td>
                    <td className="  text-center p-2 rounded-lg">
                      <textarea
                        placeholder="outline the anomaly"
                        className=" p-2 h-10 bg-none outline-none 
                        border-b border-gray-900 bg-transparent"
                        style={{ width: "100%" }}
                        value={step.anomalies}
                        onChange={(e) =>
                          handleStepChange(index, "anomalies", e.target.value)
                        }
                      />
                    </td>
                    <td className="  text-center p-2 rounded-lg">
                      <textarea
                        placeholder="output examples"
                        className="p-2 h-10 bg-none outline-none 
                        border-b border-gray-900 bg-transparent"
                        style={{ width: "100%" }}
                        value={step.outputExamples}
                        onChange={(e) =>
                          handleStepChange(
                            index,
                            "outputExamples",
                            e.target.value
                          )
                        }
                      />
                    </td>
                  </tr>
                ))}
                <br></br>
              </tbody>
            </table>
          </div>
        </div>
        {/* <table className="table-fixed w-full">
        <thead>
          <tr>
            <th className="w-1/6"></th> 
            <th className="w-1/5">Steps</th>
            <th className="w-1/5">Perfect Case</th>
            <th className="w-1/5">Anomalies</th>
            <th className="w-1/5">Output Examples</th>
            <th className="w-1/6"></th>
          </tr>
        </thead>
        <tbody>
          {taskSteps.map((step, index) => (
            <tr key={index}>
              <td>
                <p
                  className={
                    currentStepIndex === index
                      ? "text-yellow-400"
                      : "text-black"
                  }
                  style={{
                    color: currentStepIndex === index ? "yellow" : "black",
                  }}
                >
                  Step {index + 1}
                </p>
              </td>
              <td>
                <textarea
                  className={`w-full h-20 p-2 border rounded ${
                    currentStepIndex === index ? "bg-yellow-100" : ""
                  }`}
                  value={step.step}
                  onChange={(e) =>
                    handleStepChange(index, "step", e.target.value)
                  }
                  onFocus={() => highlightStep(index)}
                />
              </td>
              <td>
                <textarea
                  className="w-full h-20 p-2 border rounded"
                  value={step.perfectCase}
                  onChange={(e) =>
                    handleStepChange(index, "perfectCase", e.target.value)
                  }
                />
              </td>
              <td>
                <textarea
                  className="w-full h-20 p-2 border rounded"
                  value={step.anomalies}
                  onChange={(e) =>
                    handleStepChange(index, "anomalies", e.target.value)
                  }
                />
              </td>
              <td>
                <textarea
                  className="w-full h-20 p-2 border rounded"
                  value={step.outputExamples}
                  onChange={(e) =>
                    handleStepChange(index, "outputExamples", e.target.value)
                  }
                />
              </td>
              <td>
                {index === taskSteps.length - 1 && (
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={addStep}
                  >
                    Add Step
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      </div>
    </div>
  );
}

export default TaskDescriptionForm;
