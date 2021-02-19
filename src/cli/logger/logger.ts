import {getCLIArgument} from '../arguments/arguments';

import {LogLevel, setLoggerLevel} from '../../logger/public_api';

type CLILogLevel = 'silent' | 'error' | 'warn' | 'notice' | 'info' | 'verbose';

/**
 * Sets up the log level depending on the logLevel argument passed to the
 * executable
 *
 * Possible options are:
 *  - silent
 *  - error
 *  - warn
 *  - notice
 *  - info
 *  - verbose
 */
export function setupCLILogLevel(): void {
    const logLevel: CLILogLevel | null = getCLIArgument<CLILogLevel>(
        'logLevel'
    );

    switch (logLevel) {
        case 'silent':
            setLoggerLevel(LogLevel.Silent);
            break;

        case 'error':
            setLoggerLevel(LogLevel.Error);
            break;

        case 'warn':
            setLoggerLevel(LogLevel.Warn);
            break;

        case 'notice':
            setLoggerLevel(LogLevel.Notice);
            break;

        case 'info':
            setLoggerLevel(LogLevel.Info);
            break;

        case 'verbose':
            setLoggerLevel(LogLevel.Verbose);
            break;
    }
}
