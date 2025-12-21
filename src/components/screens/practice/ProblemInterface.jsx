import { useContext, useState } from "react";
import Editor from "@monaco-editor/react";
import { problemContext } from "../../../context/context";

const CodeEditor = () => {
     const text = `/* Welcome to MaPI Programming Club */\nconsole.log("Hello World!");`;
     const [code, setCode] = useState(text);
     const [output, setOutput] = useState("");
     const [language, setLanguage] = useState("javascript");
     const [lanCode, setLanCode] = useState(63);
     const { problem } = useContext(problemContext);

     const languages = [
          { id: 63, name: "JavaScript", monaco: "javascript" },
          { id: 71, name: "Python", monaco: "python" },
          { id: 54, name: "C++", monaco: "cpp" },
          { id: 50, name: "C", monaco: "c" },
          { id: 62, name: "Java", monaco: "java" },
          { id: 51, name: "C#", monaco: "csharp" },
          { id: 60, name: "Go", monaco: "go" },
          { id: 78, name: "Kotlin", monaco: "kotlin" },
          { id: 72, name: "Ruby", monaco: "ruby" },
          { id: 68, name: "PHP", monaco: "php" },
          { id: 83, name: "Swift", monaco: "swift" },
          { id: 74, name: "TypeScript", monaco: "typescript" },
          { id: 82, name: "Rust", monaco: "rust" },
     ];

     const handleRun = async () => {
          setOutput("Running...");
          const codeData = {
               source_code: code,
               language_id: lanCode,
               stdin: "",
          };

          try {
               const res = await fetch(
                    "https://ce.judge0.com/submissions?base64_encoded=false&wait=true",
                    {
                         method: "POST",
                         headers: { "Content-Type": "application/json" },
                         body: JSON.stringify(codeData),
                    }
               );

               const data = await res.json();
               setOutput(data.stdout || data.stderr || "No output");
          } catch (err) {
               setOutput(`${err.message}: `, err);
          }
     };

     return (
          <div className="relative min-h-screen p-6">
               <div className="pointer-events-none absolute md:left-0 lg:-left-30 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
               <div className="pointer-events-none absolute md:right-0 lg:right-0 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />

               <div className="relative max-w-7xl mx-auto grid grid-cols-12 gap-4">
                    <div className="col-span-4 rounded-xl border border-slate-700 bg-slate-900 p-5">
                         <h2 className="text-lg font-semibold mb-2">Problem</h2>
                         <div className="text-md text-slate-200">
                              {problem?.Name ||
                                   `Write a function that takes
                              two numbers and returns their sum.`}
                              <p className="text-sm mt-3 text-slate-400">
                                   {problem?.description}
                              </p>
                         </div>

                         <div className="mt-4">
                              <span className="text-lg font-bold">Example</span>
                              <h2 className="text-sm mt-5 text-slate-400">
                                   Input
                              </h2>
                              <p className="border p-3 px-5 mt-2 text-slate-400 border-slate-700 rounded-xl">
                                   <div>
                                        {problem.input || `problem input type`}
                                   </div>
                              </p>
                              <h2 className="text-sm mt-5 text-slate-400">
                                   Output
                              </h2>
                              <p className="border p-3 px-5 mt-2 text-slate-400 border-slate-700 rounded-xl">
                                   <div>
                                        {problem.output ||
                                             `problem output type`}
                                   </div>
                              </p>
                              <h2 className="text-sm mt-5 text-slate-400">
                                   Input Format
                              </h2>
                              <div className="border p-3 px-5 mt-2 text-slate-400 border-slate-700 rounded-xl">
                                   {problem.inputFormat ||
                                        `problem input format`}
                              </div>
                              <h2 className="text-sm mt-5 text-slate-400">
                                   Example
                              </h2>
                              <div className="border p-3 px-5 mt-2 text-slate-400 border-slate-700 rounded-xl">
                                   <div>
                                        {problem.example || `problem examples`}
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="col-span-8 rounded-xl overflow-hidden bg-transparent shadow-xl">
                         <div className="flex items-center border justify-between px-4 py-2 border-b-0 rounded-t-xl border-slate-700 bg-slate-900">
                              <select
                                   className="bg-slate-900 border border-slate-700 text-sm px-2 py-1 rounded"
                                   value={lanCode}
                                   onChange={(e) => {
                                        let lanCode = Number(e.target.value);
                                        const findLanguage = languages.find(
                                             (lang) => lang.id === lanCode
                                        );

                                        setLanCode(findLanguage.id);
                                        setLanguage(findLanguage.monaco);
                                   }}
                              >
                                   {languages.map((lan) => (
                                        <option value={lan.id} key={lan.id}>
                                             {lan.name}
                                        </option>
                                   ))}
                              </select>

                              <div className="flex gap-2">
                                   <button
                                        onClick={handleRun}
                                        className="px-4 py-1.5 rounded-lg border border-slate-500 hover:bg-red-500 duration-200 cursor-pointer hover:border-transparent text-white text-sm"
                                   >
                                        ▶ Run
                                   </button>
                                   <button className="px-4 py-1.5 rounded-lg bg-green-500 cursor-pointer hover:bg-green-600 text-white text-sm">
                                        Submit
                                   </button>
                              </div>
                         </div>

                         <Editor
                              height="450px"
                              theme="vs-dark"
                              language={language}
                              value={code}
                              onChange={(value) => setCode(value)}
                              options={{
                                   fontSize: 14,
                                   fontFamily: "Fira Code, monospace",
                                   minimap: { enabled: false },
                                   wordWrap: "on",
                                   cursorBlinking: "smooth",
                                   cursorSmoothCaretAnimation: "on",
                                   lineHeight: 20,
                                   padding: { top: 12 },
                              }}
                         />

                         <div className="border border-t-0 border-slate-700 bg-slate-900 p-4 rounded-b-xl">
                              <div className="text-lg text-slate-500 mb-2">
                                   Output
                              </div>
                              <div className={`text-sm font-mono text-white`}>
                                   {output || "Run code to see output"}
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default CodeEditor;
