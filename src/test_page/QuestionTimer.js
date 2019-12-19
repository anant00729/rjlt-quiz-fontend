import React, { Component } from 'react'

class QuestionTimer extends Component {
  constructor(props) {
    super(props);
    const {seconds} = this.props
    this.state = { time: {}, seconds };
    this.timer = 0;
    
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer();
  }

  startTimer = () => {
    const { onTimerOver } = this.props
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(() => {
        this.countDown(onTimerOver)
      }
      
      , 1000);
    }
    
  }

  countDown(onTimerOver) {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds === 0) { 
      clearInterval(this.timer);
      onTimerOver()
    }
  }

  render() {
    return(
      <div className="relative text-gray-900" >
        <div className="w-24 mx-auto text-center">
          <div className="text-3xl">
            {this.state.time.m} : {this.state.time.s}
          </div>
         <p>Time left</p>
        </div>
        <button
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline
          mt-4
         self-center block mx-auto shadow w-32 text-center absolute right-0 top-0 text-sm"
         onClick={this.props.onTimerOver}
         >

          Submit Test
        </button>
      </div>
      

      

    );
  }

}

export default QuestionTimer
