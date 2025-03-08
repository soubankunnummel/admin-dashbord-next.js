// import React from "react";

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <div
//       className=" lg:px-36 md:py-10  h-screen"
//       style={{
//         backgroundImage: "url(/assets/images/auth/auth-backgournd.png)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="flex w-full   justify-center  items-center rounded-3xl h-full    bg-[#A5A5A538]/20  backdrop-blur-lg ">
//         {children}
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div 
      className="min-h-screen h-screen w-full flex items-center justify-center p-4 md:p-8 lg:p-12"
      style={{
        backgroundImage: "url(/assets/images/auth/auth-backgournd.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-6xl p-4  flex justify-center items-center  md:h-[90vh] h-full  rounded-3xl overflow-hidden bg-[#A5A5A538]/20 backdrop-blur-lg">
        {children}
      </div>
    </div>
  );
}
