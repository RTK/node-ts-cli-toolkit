import type {IOLogLevel} from './io-log-level.type';

import {LogLevel} from '../enums/log-level.enum';
import {LogLevelColor} from '../enums/log-level-color.enum';

export interface LogOptions {
    colorMapping?: {
        [LogLevel.Error]?: LogLevelColor;
        [LogLevel.Warn]?: LogLevelColor;
        [LogLevel.Notice]?: LogLevelColor;
        [LogLevel.Info]?: LogLevelColor;
        [LogLevel.Verbose]?: LogLevelColor;
    };
    displayTimestamp?: boolean;
    enableHighlighting?: boolean;
    format?: {
        colorPrelude?: boolean;
        colorMessage?: boolean;
        highlightPrelude?: boolean;
    },
    stdIOMapping?: {
        out?: Set<IOLogLevel>;
        err: Set<IOLogLevel>;
    };
}
