import {getArgument} from '../arguments/arguments';

import {LogLevel, setLevel} from '../../logger';

type CLILogLevel = 'silent' | 'error' | 'warn' | 'notice' | 'info' | 'verbose';

export function setupLogLevel(): void {
    const logLevel: CLILogLevel | null = getArgument<CLILogLevel>('logLevel');

    switch (logLevel) {
        case 'silent':
            setLevel(LogLevel.Silent);
            break;

        case 'error':
            setLevel(LogLevel.Error);
            break;

        case 'warn':
            setLevel(LogLevel.Warn);
            break;

        case 'notice':
            setLevel(LogLevel.Notice);
            break;

        case 'info':
            setLevel(LogLevel.Info);
            break;

        case 'verbose':
            setLevel(LogLevel.Verbose);
            break;
    }
}
