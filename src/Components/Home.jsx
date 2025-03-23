import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home(props) {
  const [text, setText] = useState("Enter Text Here");
  const [copySuccess, setCopySuccess] = useState("");

  const UpperCase = () => {
    setText(text.toUpperCase());
    toast("Successfully UpperCased!!!");
  };

  const LowerCase = () => {
    setText(text.toLowerCase());
    toast("Successfully LowerCased!!!");
  };

  const Clear = () => {
    setText("");
    toast("Successfully Text Cleared!!!");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopySuccess("Copied!");
      },
      (err) => {
        setCopySuccess("Failed to copy!");
        console.error("Failed to copy text: ", err);
      }
    );
  };

  const [style, setStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const [theme, setTheme] = useState("Enable Dark Mode");

  const toggle = () => {
    if (style.backgroundColor === "white") {
      setStyle({
        backgroundColor: "#001861",
        color: "white",
      });
      setTheme("Disable Dark Mode");
    toast("Successfully Dark Mode Enabled!!!");

    } else {
      setStyle({
        backgroundColor: "white",
        color: "black",
      });
      setTheme("Enable Dark Mode");
      toast("Successfully Dark Mode Disabled!!!");
    }
  };

  return (
    <div style={style} className="flex flex-col items-center justify-center min-h-screen">
      <ToastContainer /> {/* Add this to ensure the toast notifications show up */}
      
      <div className="container -mt-[20vw] max-w-lg md:max-w-3xl rounded-lg w-full p-6 md:p-8 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold mb-6 text-center">{props.heading}</h1>
        <div className="flex flex-col md:flex-row justify-between gap-4 p-4 w-full text-gray-600 text-sm mb-4">
          <p style={style}>
            {text.trim().split(/\s+/).filter((word) => word.length > 0).length} Words & {text.length} Characters
          </p>
          <p style={style}>
            {(0.008 * text.trim().split(/\s+/).filter((word) => word.length > 0).length).toFixed(2)} Minutes Read
          </p>
        </div>
        <div className="w-full mb-4">
          <textarea
            className="border bg-gray-300 border-gray-300 w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows={6}
          ></textarea>
        </div>

        <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full md:w-auto"
              onClick={UpperCase}
            >
              Uppercase
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full md:w-auto"
              onClick={LowerCase}
            >
              Lowercase
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full md:w-auto"
              onClick={Clear}
            >
              Clear Text
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full md:w-auto"
              onClick={() => {
                toggle();
              }}
            >
              {theme}
            </button>
          </div>
          <div className="flex items-center">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition flex items-center gap-2"
              onClick={copyToClipboard}
            >
              <i className="ri-file-copy-line"></i> {/* Remix Icon copy icon */}
            </button>
            {copySuccess && (
              <span className="ml-2 text-sm text-green-600">{copySuccess}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
