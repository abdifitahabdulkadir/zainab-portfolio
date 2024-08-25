"use server";

const nodemailer = require("nodemailer");

export async function downloadResume() {
  try {
    const response = await fetch("/api");
    if (!response.ok) {
      return;
    }

    // Convert the response into a Blob
    const blob = await response.blob();

    // Create a temporary URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create a link element to initiate the download
    const link = document.createElement("a");
    link.href = url;
    link.download = "Zaynab.pdf"; // Specify the desired file name
    document.body.appendChild(link);

    // Programmatically click the link to start the download
    link.click();

    // Cleanup: Remove the link and revoke the Object URL
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    return;
  }
}
