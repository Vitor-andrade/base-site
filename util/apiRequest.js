// import MockIt from "./mockups";

// export default function apiRequest({method, url, params}){
//     return MockIt({method, url, params})
// }
import React from "react";
import axios from "axios";

const extractFileName = (contentDispositionValue) => {
  var filename = null;
  if (contentDispositionValue && contentDispositionValue.indexOf('attachment') !== -1) {
      var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
      var matches = filenameRegex.exec(contentDispositionValue);
      if (matches != null && matches[1]) {
          filename = matches[1].replace(/['"]/g, '');
      }
  }
  return filename;
}

const apiRequest = (method, url, params, {downloadFile = false} = {}) => {
  return new Promise((resolve, reject) => {
    try {
      method = (method || "get").toLowerCase();

      let requestInfo = {
        method: method,
        url: url,
        baseURL: process.env.API_URL,
      };

      let content = {
        ...params,
      };
      if (method === "get") requestInfo.params = content;
      else requestInfo.data = content;

      axios({
        ...requestInfo,
        ...(downloadFile ? {responseType: 'blob'} : {}),
        headers: {
          "Accept": "*",
          "Access-Control-Expose-Headers": "Content-Disposition,X-Suggested-Filename",
        }
      })
      .then((res) => {
        if (res.data.error) reject(new Error(res.data.error));
        else{
          resolve(
            downloadFile 
            ? {...res, filename: extractFileName(res.headers['content-disposition'])} 
            : res.data
          )
        }
      })
      .catch((err) => {
        reject(
          new Error(
            (err.response && err.response.data && err.response.data.error) ||
              err.message
          )
        );
      });
    } catch (err) {
      reject(err);
    }
  });
};

export default apiRequest;
