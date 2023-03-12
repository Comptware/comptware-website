import React, { useEffect, useState } from "react";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Viewer } from "@react-pdf-viewer/core";

import DashboardLayout from "components/layout";

const PrivacyPolicyList = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return pageLoaded ? (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
      <div>
        <DashboardLayout>
          <div className="flex flex-col justify-start items-center h-fit w-full">
            <div className="w-full h-[900px] min-h-[600px] scale-[1.1] mt-[30px] md:mt-0 md:scale-[1]">
              <h1 className="text-grey-text basier-medium leading-none bani-lg md:text-xl mb-6 md:mb-8 text-center pt-10 px-[40px] md:px-[5%] lg:px-[8%]">
                PRIVACY POLICY
              </h1>
              <Viewer fileUrl="https://bani-assets.s3.eu-west-2.amazonaws.com/static/docs/BANI-PRIVACY-POLICY.pdf" />
            </div>
          </div>
        </DashboardLayout>
      </div>
    </Worker>
  ) : null;
};
export default PrivacyPolicyList;
