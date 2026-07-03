import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import pdf from "../../assets/documents/Marven_Luis_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const pdfScale = width > 768 ? 1.5 : 0.6;

  return (
    <section id="resume" className="relative section">
      <div className="section-padding container-max">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <motion.h2 variants={fadeInUp} className="text-heading-2 text-center">
            My <span className="text-emerald">Resume</span>
          </motion.h2>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 rounded-2xl border border-emerald/30 bg-dark-900 bg-opacity-50 backdrop-blur-md p-6 overflow-auto max-h-96"
        >
          <div className="flex justify-center">
            <Document
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess}
              className="flex flex-col items-center gap-4"
            >
              <Page
                pageNumber={1}
                scale={pdfScale}
                renderTextLayer={true}
                renderAnnotationLayer={true}
              />
            </Document>
          </div>
        </motion.div>

        {/* Download Button */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center"
        >
          <motion.a
            href={pdf}
            download="Marven_Luis_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-emerald text-dark-950 font-semibold hover:bg-emerald-dark transition-all duration-300 shadow-emerald-glow hover:shadow-emerald-glow-lg"
          >
            <AiOutlineDownload className="w-5 h-5" />
            Download CV
          </motion.a>
        </motion.div>

        {/* Info */}
        <motion.p
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center text-foreground/60 mt-8 text-sm"
        >
          Page 1 of {numPages} • {" "}
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald hover:text-emerald-light transition-colors"
          >
            Open in new tab
          </a>
        </motion.p>
      </div>
    </section>
  );
}

export default ResumeNew;
