import "../App.css";
import "../index.css";
import { useState } from "react";
import React from "react";
import { IoMdAttach } from "react-icons/io";

interface FormFieldProps {
  field: {
    label: string;
    placeholder: string;
    type: string;
    currentForm: string;
  };
}

const FormField: React.FC<FormFieldProps> = ({ field }) => {
  const [currentField1, setCurrentField1] = useState<number>(0);
  const [currentField2, setCurrentField2] = useState<number>(0);
  return (
    <div className="mb-4">
      <div className="">
        <label className=" text-white text-sm mb-2 flex ">
          <div>{field.label}</div>
          <div style={{ color: "red" }}>*</div>
        </label>
      </div>
      {field.type === "text" && (
        <input
          type="text"
          style={{ width: "100%" }}
          className="shadow-sm shadow-white border rounded-lg py-1 px-3 text-black focus:outline-none focus:shadow-outline"
          placeholder={field.placeholder}
        />
      )}
      {field.currentForm == "1" && (
        <div className="flex tabmain">
          <div className="tabsub border-t px-3 py-1 rounded-t-lg">Write</div>
        </div>
      )}
      {field.currentForm == "2" && (
        <div className="flex tabmain">
          <div className="tabsub border-t px-3 py-1 rounded-t-lg">Write</div>
        </div>
      )}
      {field.currentForm == "3" && (
        <div className="flex tabmain">
          <div
            className={
              currentField1 == 0
                ? "transition ease-in delay-25 tabsub border-t px-3 py-1 rounded-t-lg hover:cursor-pointer"
                : "transition ease-in delay-25 px-3 py-1 hover:cursor-pointer"
            }
            onClick={() => setCurrentField1(0)}
          >
            Example 1
          </div>
          <div
            className={
              currentField1 == 1
                ? "transition ease-in delay-25 tabsub border-t px-3 py-1 rounded-t-lg hover:cursor-pointer"
                : "transition ease-in delay-25 px-3 py-1 hover:cursor-pointer"
            }
            onClick={() => setCurrentField1(1)}
          >
            Example 2
          </div>
          <div
            className={
              currentField1 == 2
                ? "transition ease-in delay-25 tabsub border-t px-3 py-1 rounded-t-lg hover:cursor-pointer"
                : "transition ease-in delay-25 px-3 py-1 hover:cursor-pointer "
            }
            onClick={() => setCurrentField1(2)}
          >
            Example 3
          </div>
        </div>
      )}
      {field.currentForm == "4" && (
        <div className="flex tabmain">
          <div
            className={"tabsub border-t px-3 py-1 rounded-t-lg"}
            onClick={() => setCurrentField2(0)}
          >
            Write
          </div>
          <div
            className={"px-3 py-1 flex text-black hover:cursor-pointer"}
            onClick={() => setCurrentField2(1)}
          >
            <IoMdAttach></IoMdAttach> Attach
          </div>
        </div>
      )}
      {field.type === "textarea" &&
        field.currentForm != "3" &&
        field.currentForm != "4" && (
          <textarea
            className="shadow appearance-none border-b rounded-b-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            style={{ backgroundColor: "silver" }}
            placeholder={field.placeholder}
            rows={4}
          />
        )}

      {field.currentForm == "3" && (
        <div>
          <textarea
            className={
              currentField1 != 0
                ? "silverarea shadow hidden appearance-none border-b rounded-b-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                : "silverarea shadow appearance-none border-b rounded-b-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            }
            placeholder={field.placeholder}
            rows={4}
          />
          <textarea
            className={
              currentField1 != 1
                ? "silverarea shadow hidden appearance-none border-b rounded-b-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                : "silverarea shadow appearance-none border-b rounded-b-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            }
            placeholder={field.placeholder}
            rows={4}
          />
          <textarea
            className={
              currentField1 != 2
                ? "silverarea shadow hidden appearance-none border-b rounded-b-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                : "silverarea shadow appearance-none border-b rounded-b-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            }
            placeholder={field.placeholder}
            rows={4}
          />
        </div>
      )}
      {field.currentForm == "4" && (
        <textarea
          className="silverarea shadow border-b rounded-b-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder={field.placeholder}
          rows={4}
        />
      )}
    </div>
  );
};

export default FormField;
