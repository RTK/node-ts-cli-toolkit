import {LogLevel} from './enums/log-level.enum';
import {LogLevelColor} from './enums/log-level-color.enum';
import {applyChalkColor, applyChalkHighlighting} from './helpers/chalk.helper';
import type {LogOptions} from './types/log-options.type';
import type {IOLogLevel} from './types/io-log-level.type';

const logLevelTextMapping: Record<LogLevel, string> = {
    [LogLevel.Silent]: 'You should not be able to see this',
    [LogLevel.Error]: 'Error',
    [LogLevel.Warn]: 'Warning',
    [LogLevel.Notice]: 'Notice',
    [LogLevel.Info]: 'Info',
    [LogLevel.Verbose]: 'Verbose'
};

let logOptions: LogOptions = {
    colorMapping: {
        [LogLevel.Error]: LogLevelColor.Red,
        [LogLevel.Warn]: LogLevelColor.Magenta,
        [LogLevel.Notice]: LogLevelColor.Yellow,
        [LogLevel.Info]: LogLevelColor.Green,
        [LogLevel.Verbose]: LogLevelColor.Default
    },
    displayTimestamp: true,
    enableHighlighting: true,
    format: {
        colorPrelude: true,
        colorMessage: false,
        highlightPrelude: true
    },
    stdIOMapping: {
        err: new Set<IOLogLevel>([LogLevel.Error]),
        out: new Set<IOLogLevel>([
            LogLevel.Warn,
            LogLevel.Notice,
            LogLevel.Info,
            LogLevel.Verbose
        ])
    }
};

let logLevel: LogLevel = LogLevel.Verbose;

/**
 * Changes the current log level.
 *
 * Log levels are hierarchical so that e.g. the info level will not show any
 * verbose output but will output errors, warnings and notices.
 *
 * @param level
 */
export function setLoggerLevel(level: LogLevel): void {
    logLevel = level;
}

/**
 * Changes the log output format.
 *
 * @param options
 */
export function setLoggerOptions(options: LogOptions): void {
    logOptions = Object.assign(logOptions, options);
}

/**
 * Logs any string with the provided level either to the stdout or stderr,
 * depending on the configuration.
 *
 * @param level
 * @param message
 */
export function writeLoggerOutput(level: IOLogLevel, message: string): void {
    if (level <= logLevel) {
        let prelude = logLevelTextMapping[level];

        if (logOptions.displayTimestamp) {
            prelude += ` (${new Date().toISOString()})`;
        }

        prelude += ':';

        if (
            logOptions.enableHighlighting &&
            logOptions.format?.colorPrelude &&
            logOptions.colorMapping &&
            level in logOptions.colorMapping
        ) {
            prelude = applyChalkColor(
                logOptions.colorMapping[level] as LogLevelColor,
                prelude
            );
        }

        if (
            logOptions.enableHighlighting &&
            logOptions.format?.highlightPrelude
        ) {
            prelude = applyChalkHighlighting(prelude);
        }

        let formattedMessage = message;

        if (
            logOptions.enableHighlighting &&
            logOptions.format?.colorMessage &&
            logOptions.colorMapping &&
            level in logOptions.colorMapping
        ) {
            formattedMessage = applyChalkColor(
                logOptions.colorMapping[level] as LogLevelColor,
                formattedMessage
            );
        }

        const logMessage = `${prelude} ${formattedMessage}`;

        if (logOptions.stdIOMapping?.err?.has(level)) {
            console.error(logMessage);
        } else if (logOptions.stdIOMapping?.out?.has(level)) {
            console.log(logMessage);
        }
    }
}
