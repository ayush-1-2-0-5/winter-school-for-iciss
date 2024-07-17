import React, { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

const decodeHtmlEntities = (text) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};

const Content = ({ content}) => {
  const maxLength = Math.max(content.title.length, content.description.length, content.image.length);

  const indices = Array.from({ length: maxLength }, (_, index) => index);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  return (
    <div className="p-2">
      {content.maintitle && content.maintitle!="null" && (
        <div className="text-white text-center font font-sans text-[54px] mt-1 mb-2">
          {content.maintitle}
        </div>
      )}

      <div className="w-full mt-5">
        {indices.map((index) => (
          <div key={index} style={{ padding: "5px", margin: "10px 0", color: "white" }}>
            {content.title[index] &&content.title[index]!="null" && (
              <div className="text-bold mb-4 text-[32px] font font-sans">
                 {content.title[index]}
              </div>
            )}
            
          {content.description[index] && (
  <ul className="ml-5 mb-4 text-[#ebebeb] font-open-sans list-disc list-inside">
    {content.description[index]?.split("@#").map((desc, i) => {
      if (desc.startsWith("code")) {
        const codeSnippet = desc.substring(4).trim();
        return (
          <div key={i} className="relative">
          <pre
              style={{
    position: 'relative',
    padding: '10px',
    fontSize: '15px',
    wordWrap: 'break-word',
    whiteSpace: 'pre-wrap',
    background: '#161b22',
    overflow: 'auto',
    lineHeight: 1.6,
    borderTop: '2px solid #2c2e73',
    borderLeft: '3px solid #e81029',
    color: '#2c2e73',
    minWidth: '500px',
    maxWidth: '800px',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '8px', 
    marginLeft: '2.5rem', 
    marginRight: '5rem',
  }}
  className="rounded-lg p-4 border  border-solid ml-10 mr-20 bg-[#161B22]"
>
              <code
                className="language-javascript max-h-[600px] text-[white] max-w-[450px] overflow-auto"
                dangerouslySetInnerHTML={{
                  __html: hljs.highlight("javascript", decodeHtmlEntities(codeSnippet)).value,
                }}
              />
              <button
                className="ml-[10px] bg-gray-100 max-h-[30px] text-white px-3 py-1 rounded-md cursor-pointer hover:bg-blue-600"
                onClick={() => copyToClipboard(decodeHtmlEntities(codeSnippet))}
              >
                Copy
              </button>
            </pre>
          </div>
        );
      } else {
        const descriptionItems = desc.trim().split("\n");
        return (
          <>
            {descriptionItems.map((item, index) => (
              <React.Fragment key={index}>
                {descriptionItems.length === 1 ? (
                  <div className="ml-5 mb-4 text-[#ebebeb] font-open-sans">{item.trim()}</div>
                ) : (
                  <li className="ml-5 mb-4 text-[#ebebeb] font-open-sans" key={index}>
                    {item.trim()}
                  </li>
                )}
              </React.Fragment>
            ))}
          </>
        );
      }
    })}
  </ul>
)}

            {content.image[index] && (
              <div className="flex flex-wrap mb-8 mt-2 justify-center items-center h-auto">
                {content.image[index]?.split("!#").map((img, i) => (
                  <div key={i} className="m-2 max-w-[45%] md:max-w-[90%]">
                    <img src={img} style={{ maxWidth: "100%" }} alt={`Image ${i}`} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Content;
