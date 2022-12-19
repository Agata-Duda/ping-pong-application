import { Stack } from '@mui/system';
import React from 'react';
import { useState, useEffect, useMemo } from 'react';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

const MatchTimer = ({eventFinish}) => {
  const parsedDeadline = useMemo(() => Date.parse(eventFinish), [eventFinish]);
    const [time, setTime] = useState(parsedDeadline - Date.now());

    useEffect(() => {
        const interval = setInterval(
            () => setTime(parsedDeadline - Date.now()),
            1000,
        );

        return () => clearInterval(interval);
    }, [parsedDeadline]);

    return (
        <Stack direction="row" fontWeight="bold" justifyContent="center" spacing={1}>
            {Object.entries({
                hrs: (time / HOUR) % 24,
                mins: (time / MINUTE) % 60,
                sec: (time / SECOND) % 60,
            }).map(([label, value]) => (
                <Stack key={label} textAlign="center" className="col-4">
                    <div className="box">
                        <p>{`${Math.floor(value)}`.padStart(2, "0")}</p>
                        <span className="text">{label}</span>
                    </div>
                </Stack>
            ))}
        </Stack>
    );
};

export default MatchTimer;