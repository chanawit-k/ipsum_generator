import { useState } from 'react'
import text from './data'
import { nanoid } from 'nanoid'
const App = () => {
  const [paragraph, setParagraph] = useState(1)
  const [textGenerate, setTextGenerate] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setTextGenerate(text.slice(0, Number(paragraph)))
  }
  const handleChange = (e) => {
    let newParagraph = e.target.value
    if (newParagraph > 8) {
      newParagraph = 8
    }
    setParagraph(newParagraph)
  }
  return (
    <section className="section-center">
      <h4>TIRED OF BORING LOREM IPSUM</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="paragraph">Paragraph:</label>
        <input
          type="number"
          step={1}
          min={1}
          max={8}
          value={paragraph}
          name="paragraph"
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <section className="lorem-text">
        {textGenerate.map((text) => {
          return <p key={nanoid}>{text}</p>
        })}
      </section>
    </section>
  )
}
export default App
