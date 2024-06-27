import React from "react";

const Content = ({ content,page }) => {
  const maxLength = Math.max(content.title.length, content.description.length, content.image.length);

  const indices = Array.from({ length: maxLength }, (_, index) => index);
  return (
    <div>
         <div className="text-white font font-sans text-[54px] mt-1 mb-2">Step {page} - {content.maintitle}</div>
         <div className="w-9/12 mt-5">
         {indices.map(index => (
        <div key={index} style={{padding: '5px', margin: '10px 0' ,color:'white' }}>
          <div className="text-bold mb-4 text-[32px] font font-sans ">{index+1} . {content.title[index]}</div>
          <div className="ml-5 mb-4 text-[#ebebeb] font-open-sans">{content.description[index]}</div>
        <div className="flex mb-8 mt-2 justify-center items-center h-auto">{content.image[index] && <img src={content.image[index]}  style={{ maxWidth: '100%' }} />}</div>
        </div>
      ))}
   
       </div>
    </div>
  );
};

export default Content;