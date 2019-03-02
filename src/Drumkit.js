import React, { Component } from 'react';
import './Drumkit.css';

class Drumkit extends Component {
    componentDidMount(){
      window.addEventListener('keydown', this.playSound);
    }
    componentWillUnmount(){
      window.removeEventListener('keydown', this.playSound);
    }

    playSound = (event) => {
      const audio  = document.querySelector(`audio[data-key="${event.keyCode}"]`);
      const key  = document.querySelector(`div[data-key="${event.keyCode}"]`);
      if(!audio) return ;
      audio.play()
      audio.currentTime = 0;
      key.classList.add('playing')
    }
    removeTransition = (event)=>{
      event.target.classList.remove('playing')
    }
    
    render() {
        const drumKeys = this.props.keys.map((drumKey, index)=>{
            return (
                <div key = {index} 
                     className="key" 
                     data-key = {drumKey.code} 
                     onTransitionEnd = {this.removeTransition} >

                    <kbd>{drumKey.letter}</kbd>
                    <div className="sound">{drumKey.sound}</div>
                    <audio data-key={drumKey.code}>
                      <source src={"/sounds/"+drumKey.sound+".wav"} type="audio/wav" />
                    </audio>
                </div>
            )
        })
      return (
        <div className="Drumkit">
          <div className="keys">{drumKeys}</div>
        </div>
      );
    }


  }

  export default Drumkit;