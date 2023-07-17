import React, { useEffect, useRef } from "react";

const ShowMessages = ({ title, messages }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight;
  }, [ref, messages]);

  return(
    <>
      <p>{`${title} - ${messages.length} messages`}</p>
      <div style={{ height: '150px', overflow: 'scroll', marginTop: '20px' }} ref={ref}>
        <ul>
          {messages.map((text, index) => <li key={index}>{text}</li>)}
        </ul>
      </div>
    </>
  );
};

ShowMessages.defaultProps = {
  title: 'Child component messages'
};

export default ShowMessages;