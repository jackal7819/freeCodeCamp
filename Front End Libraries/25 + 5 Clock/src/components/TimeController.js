const TimeController = ({ props }) => {
    const [breakLength, setBreak, isRunning] = props;

    return (
        <div className='rounded-lg bg-[#4d4d4d] text-white flex flex-col'>
            <div className='cta-group flex items-center text-xl justify-center mx-2 mt-3'>
                <button
                    id='break-decrement'
                    onClick={() => {
                        if (!isRunning) {
                            if (breakLength > 1) {
                                setBreak((prev) => prev - 1);
                            }
                        }
                    }}>
                    -
                </button>
                <p id='break-length' className='text-black text-2xl'>
                    {breakLength}
                </p>
                <button
                    id='break-increment'
                    onClick={() => {
                        if (!isRunning) {
                            if (breakLength < 60) {
                                setBreak((prev) => prev + 1);
                            }
                        }
                    }}>
                    +
                </button>
            </div>
            <h2 id='break-label' className='text-center py-2'>
                Break Length
            </h2>
        </div>
    );
};

export default TimeController;
