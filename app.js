class Generator extends React.Component {
  state = {
    list: ["Co tanio wychodzi, drogo wraca.", "Nie ma w szczęściu ni w nieszczęściu niczego, czego sami sobie nie zgotowaliśmy.", "Szlachetny wielkie sobie stawia cele, prostak ku małym zdąża.", "Zaloty są jak tango: czysty absurd i same esy-floresy.", "Nie dziś, nie jutro, może za rok", "Teraz pójdzie gładko.", "Zaraź kogoś radością.", "Tajemniczy wielbiciel wkrótce da ci jakiś znak.", "Miłość jest jedynym lekiem na złamane serce." ],
    fortune: "Tu pojawi się Twoja wróżba ;)",
    text: "",
  }

  handleCheckQuote = () => {
    let length = this.state.list.length;
    let number = parseInt(Math.random()*length);
    var fortune = this.state.list[number];
    this.setState({
      fortune: fortune,
    })
  }

  handleAddChange = e => {
    this.setState({
      text: e.target.value,
    })
  }

  handleAddQuote = () => {
    this.setState({
      list: [...this.state.list, this.state.text] })
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2>Twoje ciasteczko z wróżbą na dziś:</h2>
          <button onClick={this.handleCheckQuote}>Sprawdź</button>
          <p>{this.state.fortune}</p>
        </div>
        <div className="container">
          <h2>Dodaj nową wróżbę:</h2>
          <input value={this.state.text} onChange={this.handleAddChange} type="text" />
          <button onClick={this.handleAddQuote}>Dodaj</button>
        </div>
      </div>

    )
  }
}


ReactDOM.render(<Generator />, document.getElementById('root'))
