const Contest = () => {
     return (
          <div className="relative text-gray-300 h-screen">
               <div class="pointer-events-none absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size-[40px_40px]"></div>
                  


               <div className="h-100 absolute left-0 top-0 border w-50 bg-cyan-600 blur-[150px] -rotate-45 brightness-75"></div>
               <div className="h-100 absolute right-0 top-70 border w-50 bg-pink-600 blur-[150px]  brightness-75"></div>
          </div>
     );
};

export default Contest;
