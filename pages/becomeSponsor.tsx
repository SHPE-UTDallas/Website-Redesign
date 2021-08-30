import Layout from "../components/Layout";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const BecomeSponsorPage = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <Layout title="SHPE UTD">
      <div className="has-text-link-dark has-text-centered is-size-1 has-text-weight-bold">
        Become a Sponsor
      </div>
      <hr
        style={{
          width: "80%",
          marginLeft: "auto",
          marginTop: "5px",
          marginRight: "auto",
        }}
      />
      <div className="container is-centered">
        <div style={{ textAlign: "right" }}>
          <a href="/SponsorshipPacket.pdf">
            Download pdf
          </a>
        </div>
        <Document className="react-pdf__Document"
          file="/SponsorshipPacket.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
          <div className="page-controls">
            <button
              disabled={pageNumber <= 1}
              onClick={previousPage}
              type="button"
              aria-label="Previous page"
            >
              ‹
            </button>
            <span>
              {pageNumber}
              {' '}
              of
              {' '}
              {numPages}
            </span>
            <button
              disabled={pageNumber >= numPages}
              onClick={nextPage}
              type="button"
              aria-label="Next page"
            >
              ›
            </button>
          </div>
        </Document>
      </div>
    </Layout>
  );
};

export default BecomeSponsorPage;
