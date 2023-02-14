const SessionController = ({ props }) => {
    const [session, setTimeLeft, setSession, isRunning] = props;

    return (
        <div className='rounded-md bg-[#4d4d4d] text-white flex flex-col'>
            <div className='cta-group bg-[#99BCC0] flex items-center text-xl justify-center mx-2 mt-3'>
                <button
                    id='session-decrement'
                    onClick={() => {
                        if (!isRunning) {
                            if (session > 1) {
                                setSession((prev) => {
                                    setTimeLeft((prev - 1) * 60);
                                    return prev - 1;
                                });
                            }
                        }
                    }}>
                    -
                </button>
                <p id='session-length' className='text-black text-2xl'>
                    {session}
                </p>
                <button
                    id='session-increment'
                    onClick={() => {
                        if (!isRunning) {
                            if (session < 60) {
                                setSession((prev) => {
                                    setTimeLeft((prev + 1) * 60);
                                    return prev + 1;
                                });
                            }
                        }
                    }}>
                    +
                </button>
            </div>
            <h2 id='session-label' className='text-center py-2'>
                Session Length
            </h2>
        </div>
    );
};

export default SessionController;
