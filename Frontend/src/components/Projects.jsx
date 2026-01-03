import React, { use, useState } from 'react'

const Projects = () => {

  const [input, setInput] = useState("");
  const [format, setFormat] = useState("text");
  const [type, setType] = useState("")
  const [platform, setPlatform] = useState("")
  const [app, setApps] = useState("")
  const [color, setColor] = useState("")

  const generateOutput = () => {
    if (!input)
      return "";

    switch (format) {
      case 'text':
        return "This is text format"

      case 'json':
        return "This is JSON Format"

      case 'yaml':
        return "This is YAML Format"

      default:
        return "Something went wrong"
    }

  }

  const types = [
    { label: "Modern & Minimalist", value: "Modern & Minimalist" },
    { label: "Financial & Banking", value: "Financial & Banking" },
    { label: "Social & Community", value: "Social & Community" },
    { label: "Educational & Learning", value: "Educational & Learning" },
    { label: "Corporate & Professional", value: "Corporate & Professional" },
    { label: "Creative & Artistic", value: "Creative & Artistic" },
    { label: "Gaming & Entertainment", value: "Gaming & Entertainment" },
    { label: "E-commerce & Retail", value: "E-commerce & Retail" },
    { label: "Healthcare & Medical", value: "Healthcare & Medical" }

  ];

  const platforms = [
    { label: "v0.dev", value: "v0.dev" },
    { label: "Bolt", value: "Bolt" },
    { label: "Lovable", value: "Lovable" },
    { label: "Cursor", value: "Cursor" },
    { label: "Claude", value: "Claude" },
    { label: "Other", value: "Other" }
  ];

  const apps = [
    { label: "Web Application", value: "Web Application" },
    { label: "Mobile App", value: "Mobile Ap" },
    { label: "Desktop App", value: "Desktop App" },
    { label: "Hybrid App", value: "Hybrid App" }
  ];



  return (
    <>
      <div className='bg-[#2A2A2A] min-h-screen'>
        <div className='flex flex-col sm:flex-row gap-10 w-[95%] mx-auto '>
          {/* Input side */}
          <div className='sm:w-[50%] py-6'>
            <div>
              <div className="flex items-center">
                <span className="border-l-4 border-[#00ff88] self-stretch"></span>
                <h1 className="text-[30px] font-bold pl-2">
                  Prompt Generator
                </h1>
              </div>

              <p className='text-[#868686] '>Create prompts in Text, JSON and YAML Formats</p>
            </div>
            <div className='my-6 w-full  py-6 bg-[#1D1D1D] rounded-[20px] '>

              <h1 className='text-[25px] w-[90%] mx-auto font-semibold !text-[#00ff88] pb-4'>Start Creating..!</h1>
              <textarea
                rows="10"
                className="block w-[90%] mx-auto bg-[#2A2A2A] text-white p-4 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#00ff88]"
                value={input}
                onChange={(m) => setInput(m.target.value)}
                placeholder='Type your ideas here…'
              />

              <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 w-[90%] mx-auto mt-6">

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-[#fff]">
                    Design Style*
                  </label>

                  <select
                    required
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className={`w-full bg-[#2A2A2A] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff88]
                    ${type === "" ? "text-[#868686]" : "text-white"}`}
                  >
                    <option value="" disabled hidden>
                      Select Format
                    </option>

                    {types.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>


                <div className="flex flex-col gap-2">
                  <label className="text-sm text-[#fff]">
                    Platform*
                  </label>

                  <select
                    required
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    className={`w-full bg-[#2A2A2A] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff88]
                    ${platform === "" ? "text-[#868686]" : "text-white"}`}
                  >
                    <option value="" disabled hidden>
                      Select Platform
                    </option>

                    {platforms.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-[#fff]">
                    App type*
                  </label>

                  <select
                    required
                    value={app}
                    onChange={(e) => setApps(e.target.value)}
                    className={`w-full bg-[#2A2A2A] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff88]
                    ${app === "" ? "text-[#868686]" : "text-white"}`}
                  >
                    <option value="">
                      Select App
                    </option>

                    {apps.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-[#fff]">
                    Primary color
                  </label>


                  <input type="text" placeholder='Enter your preferred color.!!  Eg:white or #fff ' className={`w-full bg-[#2A2A2A] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff88]
                    ${color === "" ? "text-[#868686]" : "text-white"}`} onChange={(e) => { setColor(e.target.value) }} />



                </div>



              </div>
              <div className="flex flex-col gap-2 w-[90%] mx-auto mt-6">
                <label className="text-sm text-[#fff]">
                  Description*
                </label>


                <textarea required type="text" placeholder='Describe what your project does and its main function...' className={`w-full bg-[#2A2A2A] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff88]
                    ${color === "" ? "text-[#868686]" : "text-white"}`} onChange={(e) => { setColor(e.target.value) }} />


                {/* <button onClick={console.log(type,platform,app,color)}>Get selected value</button> */}
              </div>

              <div className="flex flex-col gap-2 w-[90%] mx-auto mt-6">
                <button
                  className="
      w-full py-3 text-[18px] font-semibold text-black
      bg-[#00ff88] rounded-lg
      transition-all duration-200
      hover:bg-[#00e67a]
      active:scale-[0.98]
      focus:outline-none 
      "
                >
                  Generate Prompt
                </button>
              </div>


            </div>
          </div>

          {/* Output side */}
          <div className='w-[50%] py-6'>
            <div>
              <div>
                <button onClick={() => { setFormat('text') }}>Text</button>
                <button onClick={() => { setFormat('json') }}>Json</button>
                <button onClick={() => { setFormat('yaml') }}>YAML</button>
              </div>
            </div>
            <div>
              <h1>Output</h1>
              <textarea
                rows='6'
                value={generateOutput()}
                readOnly
              />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Projects