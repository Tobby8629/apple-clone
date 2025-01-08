import { useState } from "react"
import { models, sizes } from "../../constants"
import HeaderText from "../../Reusables/HeaderText"
import { yellowImg } from "../../utils"

const Model = () => {
  const [features, setFeatures] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  })
  const [size, setsize] = useState("small")

  return (
   <section className="common-padding min-h-screen">
     <div className="screen-max-width">
        <HeaderText clas="model" title="Take a closer look"/>
        <div className="h-[75vh] md:h-[90vh]">
        </div>
        <div className="flex justify-center items-center flex-col">
          <p>{features.title}</p>
          <div className="my-5 flex justify-center items-center">
            <ul className="flex mr-3 p-3 items-center bg-gray-300 rounded-3xl">
              {models.map((item, index) => (
                <li key={index} style={{ backgroundColor: item.color[0] }}
                className="rounded-full w-5 h-5 inline-block mr-2"
                onClick={() => setFeatures(item)}
                ></li>
              ))}
            </ul>
            <div className="bg-gray-300  flex justify-center items-center rounded-3xl">
              {sizes.map(({ label, value }) => (
                <button key={label}
                 style={value === size ? { backgroundColor: "gray", color: "rgb(218 214 214)" } : {}}
                 className="w-9 h-9 rounded-full text-xs text-slate-400 font-normal"
                 onClick={() => setsize(value)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          
        </div>
     </div>
   </section>
  )
}

export default Model