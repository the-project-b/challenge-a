import { ChangeEvent, useState } from 'react';

function Challenge() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleClick = async () => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: input })
    };

    const body = await fetch('/api/level1', requestOptions)
    const response = await body.json()

    setOutput(response.result)
  }

  const handleInputUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target?.value
    setInput(value)
  }

  return (
    <div className='p-5'>
      <label htmlFor='input'>Input:</label><br />
      <input type="text" id="input" name='input' onChange={handleInputUpdate} className='p-1'/>

      <button className='bg-blue-400 rounded-md p-1 text-white' onClick={handleClick}>Action</button>
      <br />
      <label htmlFor='output'>Output:</label>
      <p>{output}</p>
    </div>
  )
}

export default Challenge