import { useState, useRef, useEffect } from 'react';
import alarm from './audio/beep.mp3';
import { useInterval } from './hooks/useInterval';
import TimeController from './components/TimeController';
import SessionController from './components/SessionController';

function padTime(time) {
    return time.toString().padStart(2, '0');
}

function App() {
    const [breakLength, setBreak] = useState(5);
    const [session, setSession] = useState(25);
    const [mode, setMode] = useState('Session');
    const [timeLeft, setTimeLeft] = useState(session * 60 * 1000);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);
    const beep = useRef();

    useInterval(() => setTimeLeft(timeLeft - 1000), isRunning ? 1000 : null);

    useEffect(() => {
        setTimeLeft(session * 60 * 1000);
    }, [session]);

    useEffect(() => {
        if (timeLeft === 0 && mode === 'Session') {
            beep.current.play();
            setMode('Break');
            setTimeLeft(breakLength * 60 * 1000);
        } else if (timeLeft === 0 && mode === 'Break') {
            beep.current.play();
            setMode('Session');
            setTimeLeft(session * 60 * 1000);
        }
    }, [timeLeft, breakLength, session, mode]);

    const minutes = padTime(Math.floor(timeLeft / 60 / 1000));
    const seconds = padTime((timeLeft - minutes * 1000 * 60) / 1000);

    function startPauseTimer() {
        if (!isRunning) {
            if (intervalRef.current !== null) return;

            setIsRunning(true);
        } else {
            setIsRunning(false);
        }
    }

    function resetTimer() {
        beep.current.pause();
        beep.current.currentTime = 0;
        setBreak(5);
        setMode('Session');
        setSession(25);
        setTimeLeft(25 * 60 * 1000);
        setIsRunning(false);
    }

    return (
        <div className='app outline outline-3 outline-black shadow-lg px-10 py-10'>
            <div className='outline outline-2 rounded-full shadow-lg bg-white w-full py-5 flex flex-col justify-center items-center'>
                <h2 id='timer-label' className='text-xl uppercase'>
                    {mode === 'Break' ? 'break has begun' : 'Session'}
                </h2>

                <div id='time-left' className='text-6xl font-semibold'>
                    <span>{minutes}</span>
                    <span>:</span>
                    <span>{seconds}</span>
                </div>
                <div>
                    <button
                        id='start_stop'
                        onClick={startPauseTimer}
                        className='outline outline-1 text-xs'>
                        {isRunning ? 'Pause' : 'Start'}
                    </button>
                    <button
                        id='reset'
                        onClick={resetTimer}
                        className='outline outline-1 text-xs'>
                        Reset
                    </button>
                </div>
                <audio id='beep' src={alarm} ref={beep} />
            </div>

            <div className='controls w-full mt-10 flex justify-between'>
                <TimeController props={[breakLength, setBreak, isRunning]} />

                <SessionController
                    props={[session, setTimeLeft, setSession, isRunning]}
                />
            </div>
        </div>
    );
}

export default App;
