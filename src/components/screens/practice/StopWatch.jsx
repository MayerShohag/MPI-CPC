import { useRef, useState } from "react";

const StopWatch = () => {
     const [time, setTime] = useState(0);
     const [runningTime, setRunningTime] = useState(false);
     const ref = useRef(null);

     const startTimer = () => {
          if (runningTime) return;
          setRunningTime(true);
          ref.current = setInterval(() => {
               setTime((prev) => prev + 1);
          }, 1000);
     };

     const stopTimer = () => {
          clearInterval(ref.current);
          setRunningTime(false);
     };

     const resetTimer = () => {
          clearInterval(ref.current);
          setRunningTime(false);
          setTime(0);
     };

     const hours = Math.floor((time / 3600) % 24);
     const minutes = Math.floor((time / 60) % 60);
     const seconds = time % 60;
     return (
          <div>
               <div className="md:text-5xl text-4xl">
                    {String(hours).padStart(2, "0")}
                    {" : "}
                    {String(minutes).padStart(2, "0")}
                    {" : "}
                    {String(seconds).padStart(2, "0")}
               </div>
               <section className="flex justify-center gap-2 mt-3">
                    <button
                         className="bg-cyan-600 p-2 px-3 rounded-xl cursor-pointer"
                         onClick={startTimer}
                    >
                         Start
                    </button>
                    <button
                         className="bg-red-500 p-2 rounded-xl px-3 cursor-pointer"
                         onClick={stopTimer}
                    >
                         Stop
                    </button>
                    <button
                         className="bg-green-500 p-2 rounded-xl px-3 cursor-pointer"
                         onClick={resetTimer}
                    >
                         Reset
                    </button>
               </section>
          </div>
     );
};

export default StopWatch;
