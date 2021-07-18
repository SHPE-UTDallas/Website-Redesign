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
      <div align="center">
        <Document
          file="/SponsorshipPacket.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      <div align="center">
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <div
          className="container buttons is-centered"
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          <button
            className="button is-primary"
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous
          </button>

          <button
            className="button is-primary"
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>
      <a className="button" href="/SponsorshipPacket.pdf">
        Download pdf
      </a>
    </Layout>
  );
};

export default BecomeSponsorPage;
