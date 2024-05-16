"use client";
import { useState } from "react";
import { Navbar, Upload, Summary, Loader } from './components';
import pdfToText from 'react-pdftotext'


export default function Home() {

  const [loading, setLoading] = useState(false)
  const [summary, setSummary] = useState('')
  const [current, setCurrent] = useState('')

  function extractText(event) {
    setLoading(true)
    setSummary('')
    setCurrent('')
    const file = event.target.files[0]
    pdfToText(file)
      .then(text => {
        if (text) {
          setCurrent(text.slice(0, 5000))
          sentToApi(text.toString().slice(0, 5000))
        } else {
          setCurrent("Can not read PDF document..")
        }
        setLoading(false)
      })
      .catch(error => console.error("Failed to extract text from pdf"))
  }

  const sentToApi = (text) => {
    console.log(text, 'we receive')
    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: text })
    }).then(async (response) => {
      return await response.json()
    }).then(data => {
      console.log("data: ", data)
      setSummary(data.summary)
    })
  }
  return (
    <main className="main">
      <Navbar />
      {
        loading ? <Loader /> : <Upload onFileChange={extractText} />
      }
      <Summary current={current} summary={summary} />
    </main>
  );
}
