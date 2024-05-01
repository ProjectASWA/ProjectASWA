import React, { Component } from 'react';
import './index.css';

class AnimatedFlexCards extends Component {
    state = {
        firstCard: true,
        secondCard: false,
        thirdCard: false,
        fourthCard: false
    }


    onClickConsole = (cardName) => {
        this.setState(prevState => ({
            [cardName]: !prevState[cardName]
        }));
    }



  render() {
    const {firstCard, secondCard, thirdCard, fourthCard} = this.state
    console.log(firstCard, secondCard, thirdCard, fourthCard)
    return (
      <div className="wrapper">
        <div className="container">
          <input type="radio" name="slide" id="c1" defaultChecked />
          <label htmlFor="c1" className="card">
            <div className="row" onClick={() => this.onClickConsole('firstCard')}>
              <div className={firstCard ? 'displayNoneContainer' : 'iconContainer showContainer'}>
              <div className='verticalTextContainer'>
                    <h1 className='vertical-text'>Education</h1>
                </div>
                <div class = "backgroundStylingIcon">
                    1
                </div>
              </div>
              <div className="description">
                <h4>Winter</h4>
                <p>Winter has so much to offer - creative activities</p>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c2" />
          <label htmlFor="c2" className="card">
            <div className="row" onClick={() => this.onClickConsole('secondCard')}>
                <div className={secondCard ? 'displayNoneContainer' : 'iconContainer showContainer'}>
                <div className = "verticalTextContainer">
                        <h1 className='vertical-text'>Education</h1>
                    </div>
                    <div class = "backgroundStylingIcon">
                        2
                    </div>
                </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c3" />
          <label htmlFor="c3" className="card">
          <div className="row" onClick={() => this.onClickConsole('thirdCard')}>
                <div className={thirdCard ? 'displayNoneContainer' : 'iconContainer showContainer'}>
                <div className = "verticalTextContainer">
                        <h1 className='vertical-text'>Education</h1>
                    </div>
                    <div class = "backgroundStylingIcon">
                        3
                    </div>
                </div>
            </div>
            
          </label>

          <input type="radio" name="slide" id="c4" />
          <label htmlFor="c4" className="card">
          <div className="row" onClick={() => this.onClickConsole('fourthCard')}>
                <div className={fourthCard ? 'displayNoneContainer' : 'iconContainer showContainer'}>
                <div className = "verticalTextContainer">
                        <h1 className='vertical-text'>Education</h1>
                    </div>
                    <div class = "backgroundStylingIcon">
                        3
                    </div>
                </div>
            </div>
          </label>
        </div>
      </div>
    );
  }
}

export default AnimatedFlexCards;
