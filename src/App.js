import React from 'react'

const App = () => {
  return (
    <div className="container">
      <h1>Bancos Brasileiros - Builder widget</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add bank</h2>
          <form>
            <div>Code (FEBRABAN/BACEN): <input type="number" name="code" /></div>
            <div>Company Name: <input type="text" name="name" /></div>
            <div>Fantasy Name: <inpty type="text" name="fantasy" /></div>
            <div>Document (CNPJ): <input type="text" name="document"/></div>
            <div><button type="submit">Save new bank</button></div>
          </form>
        </div>
        <div className="flex-large">
          <h2>View banks</h2>
          <ul>
            <li><a href="https://raw.githubusercontent.com/guibranco/BancosBrasileiros/master/bancos.csv">CSV</a></li>
            <li><a href="https://raw.githubusercontent.com/guibranco/BancosBrasileiros/master/bancos.json">JSON</a></li>
            <li><a href="https://raw.githubusercontent.com/guibranco/BancosBrasileiros/master/bancos.sql">SQL</a></li>
            <li><a href="https://raw.githubusercontent.com/guibranco/BancosBrasileiros/master/bancos.xml">XML</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App