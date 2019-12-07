import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/header';
import Footer from "./components/Footer/footer";
import CardBoard from "./components/CardBoard/cardBoard";
import Wrapper from "./components/Wrapper/wrapper";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameover = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
    }

    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`You lose \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  }

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameover();
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game!</Header>
        {this.state.cards.map(card => (
          <CardBoard
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
