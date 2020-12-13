import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

function metroname() {
  const [timer, setTimer] = useState(null);

  const [slider, setSlider] = useState({
    playing: false,
    count: 0,
    bpm: 30,
    beatsPerMeasure: 4
  });

  const c1Ref = useRef<HTMLAudioElement | null>(null);
  const c2Ref = useRef<HTMLAudioElement | null>(null);

  const startStop = () => {
    if (slider.playing) {
      // Stop the timer
      clearInterval(timer);
      setSlider(prev => ({
        ...prev,
        playing: false
      }));
    } else {
      // Start a timer with the current BPM
      setTimer(setInterval(playClick, (60 / slider.bpm) * 1000));

      setSlider(prev => ({
        ...prev,
        count: 0,
        playing: true
      }));
      playClick();
    }
  };

  const playClick = () => {
    const { count, beatsPerMeasure } = slider;

    // The first beat will have a different sound than the others
    if (count % beatsPerMeasure === 0) {
      c1Ref.current = new Audio('/audio/click1.wav');
      c1Ref.current.play();
    } else {
      c2Ref.current = new Audio('/audio/click2.wav');
      c2Ref.current.play();
    }

    // Keep track of which beat we're on
    setSlider(prev => ({
      ...prev,
      count: (prev.count + 1) % prev.beatsPerMeasure
    }));
  };

  const handleBpmChange = bpm => {
    setSlider(prev => ({
      ...prev,
      bpm
    }));
  };

  return (
    <>
      <Metroname>
        <BbmSlider>
          <h2>{slider.bpm} BBM</h2>
          <input
            type='range'
            name='bbm'
            min='60'
            readOnly
            max='240'
            value={slider.bpm}
            onChange={e => handleBpmChange(e.target.value)}
          />
        </BbmSlider>
        <PlayButton onClick={() => startStop()}>{slider.playing ? 'Stop' : 'Start'}</PlayButton>
      </Metroname>
    </>
  );
}

const Metroname = styled.div`
  text-align: center;
  max-width: 375px;
  margin: 0 auto;
  padding: 30px;
`;

const BbmSlider = styled.div`
  input {
    width: 100%;
    margin: 10px;
  }
`;

const PlayButton = styled.button`
  background: #c94d46;
  padding: 10px;
  border: 1px solid #832420;
  border-radius: 2px;
  width: 100px;
  color: #fff;
  font-size: 18px;
`;

export default metroname;
