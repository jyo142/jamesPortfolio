"use client";
const ResumeSection = () => {
  return (
    <div className="p-8 text-center w-full h-screen">
      <h1 className="flex justify-center text-5xl tracking-widest mb-5">
        Resume
      </h1>
      <object
        data="JAMES OKADA RESUME.pdf"
        type="application/pdf"
        className="w-full h-3/4 lg:h-full"
      >
        <p>
          Your web browser doesn&apos;t have a PDF plugin. Instead you can{" "}
          <a href="JAMES OKADA RESUME.pdf">
            click here to download the PDF file.
          </a>
        </p>
      </object>
    </div>
  );
};

export default ResumeSection;
