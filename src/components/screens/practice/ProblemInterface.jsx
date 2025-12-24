import { useContext, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { problemContext } from "../../../context/context";
import Stopwatch from "./StopWatch";

const CodeEditor = () => {
     const [code, setCode] = useState(
          `/* Welcome to MaPI Programming Club */\nconsole.log("Hello World!");`
     );
     const [output, setOutput] = useState("");
     const [language, setLanguage] = useState("javascript");
     const [lanCode, setLanCode] = useState(63);
     const { problem } = useContext(problemContext);

     const defaultCode = (lang) => {
          if (lang === "javascript") {
               setCode(
                    `// Welcome to MaPI Programming Club\nconsole.log("Hello from ${lang}");`
               );
          } else if (lang === "python") {
               setCode(
                    `# Welcome to MaPI Programming Club\nprint("Hello from ${lang}");`
               );
          } else if (lang === "cpp") {
               setCode(
                    `// Welcome to MaPI Programming Club\n#include <iostream>\nusing namespace std;\n\nint main() {\n\tcout << "Hello from ${lang}";\n\treturn 0;\n}`
               );
          } else if (lang === "c") {
               setCode(
                    `// Welcome to MaPI Programming Club\n#include <stdio.h>\n\nint main() {\n\tprintf("Hello from ${lang}");\n\treturn 0;\n}`
               );
          } else if (lang === "java") {
               setCode(
                    `// Welcome to MaPI Programming Club\npublic class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello from ${lang}");\n\t}\n}`
               );
          } else if (lang === "csharp") {
               setCode(
                    `// Welcome to MaPI Programming Club\nusing System;\n\nclass Program {\n\tstatic void Main() {\n\t\tConsole.WriteLine("Hello from ${lang}");\n\t}\n}`
               );
          } else if (lang === "go") {
               setCode(
                    `// Welcome to MaPI Programming Club\npackage main\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello from ${lang}")\n}`
               );
          } else if (lang === "kotlin") {
               setCode(
                    `// Welcome to MaPI Programming Club\nfun main() {\n\tprintln("Hello from ${lang}")\n}`
               );
          } else if (lang === "ruby") {
               setCode(
                    `# Welcome to MaPI Programming Club\nputs "Hello from ${lang}"`
               );
          } else if (lang === "php") {
               setCode(
                    `<?php\n// Welcome to MaPI Programming Club\necho "Hello from ${lang}";\n?>`
               );
          } else if (lang === "swift") {
               setCode(
                    `// Welcome to MaPI Programming Club\nprint("Hello from ${lang}")`
               );
          } else if (lang === "typescript") {
               setCode(
                    `// Welcome to MaPI Programming Club\nconsole.log("Hello from ${lang}");`
               );
          }
     };

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

     const [clock, setClock] = useState(new Date());

     useEffect(() => {
          const timer = setInterval(() => {
               setClock(new Date());
          }, 1000);
          return () => {
               clearInterval(timer);
          };
     }, []);

     return (
          <div className="relative min-h-screen max-w-7xl mx-auto p-6 mb-20">
               <div className="pointer-events-none absolute md:left-0 lg:-left-30 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />
               <div className="pointer-events-none absolute md:right-0 lg:-right-20 -top-30 z-0 lg:h-150 md:h-100 lg:w-76 md:w-40 right-0 w-20 h-50 bg-[#3E2066] blur-[150px] brightness-200 md:brightness-100" />

               <div className="text-center pt-10 md:pt-15 mb-10">
                    <h1 className="lg:text-8xl md:text-6xl akshar-font text-5xl pb-5 font-normal">
                         Stop Watch
                    </h1>
                    <Stopwatch />
               </div>
               <div className="relative max-w-7xl mx-auto grid grid-cols-12 gap-4">
                    <div className="md:col-span-4 col-span-12 rounded-xl border border-slate-700 bg-slate-900 p-5">
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
                              <div className="border p-3 px-5 mt-2 text-slate-400 border-slate-700 rounded-xl">
                                   <p>
                                        {problem.input || `problem input type`}
                                   </p>
                              </div>
                              <h2 className="text-sm mt-5 text-slate-400">
                                   Output
                              </h2>
                              <div className="border p-3 px-5 mt-2 text-slate-400 border-slate-700 rounded-xl">
                                   <p>
                                        {problem.output ||
                                             `problem output type`}
                                   </p>
                              </div>
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

                    <div className="md:col-span-8 col-span-12 rounded-xl z-10 relative overflow-hidden bg-transparent shadow-xl">
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
                                        defaultCode(findLanguage.monaco);
                                   }}
                              >
                                   {languages.map((lan) => (
                                        <option value={lan.id} key={lan.id}>
                                             {lan.name}
                                        </option>
                                   ))}
                              </select>

                              <div className="flex gap-2 items-center">
                                   <p className="hidden md:block">{clock.toLocaleTimeString()}</p>
                                   <button
                                        onClick={handleRun}
                                        className="px-4 py-1.5 rounded-lg border border-slate-500 hover:bg-red-500 duration-200 cursor-pointer hover:border-transparent text-white text-sm"
                                   >
                                        Run
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
