import React, { useState } from 'react';
import FeedbackOptions from './feedback/FeedbackOptions/FeedbackOptions';
import Statistics from './feedback/Statistics/Statistics';
import Section from './feedback/Section/Section';
import Notification from './feedback/Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


    const onFeedbackButtonClick = e => {
      e.preventDefault();

        const { textContent } = e.target;

        switch (textContent) {
            case 'Good':
                setGood(good + 1);
                break;
            
            case 'Neutral':
                setNeutral(neutral + 1);
            break;
          
          case 'Bad':
                setBad(bad + 1);
                break;
            
            default:
                return;
        }
    }
  
  const countFullStats = () => {
    const total = good + neutral + bad;
    const positiveFeedback = total === 0 ? 0
      : Math.round((good / total) * 100);
    
    const allStats = {good, neutral, bad, total, positiveFeedback}
    return allStats;
  }

    const statsCnt = good + neutral + bad;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions title={"Please leave feedback"} onFeedbackButtonClick={onFeedbackButtonClick}/>
        </Section>
        <Section title="Statistics">
          {
            statsCnt === 0
            ? <Notification />
            : < Statistics title="Statistics" stats={countFullStats()} />
          }
        </Section>
        
         
      </>
    );
}

export default App;
