import { useRef } from "react";
/*Ref is counter that dosen't impact re-rendering. 
Interesting I'm aware. Research Uses besides loops obviously
 */
function RefCounter() {
  let countRef = useRef(0); // one counter stored in a ref
  let count = 0; // one counter stored in a normal variable
  function handleClick() {
    // update countRef object when clicking, via current property
    countRef.current = countRef.current + 1;
    count = count + 1; // update count variable when clicking
    // both counts should be the same value
    alert(`You clicked ${countRef.current} (${count}) times!`);
  }
  return (
    <div className="RefCounter componentBox">
      <button onClick={handleClick}>
        REFCOUNTER: Click me!
        {/* try rendering {count} or {countRef.current} here */}
      </button>
    </div>
  );
}

export default RefCounter;
