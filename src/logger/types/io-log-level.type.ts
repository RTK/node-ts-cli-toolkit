import {LogLevel} from '../enums/log-level.enum';

export type IOLogLevel =
    | LogLevel.Error
    | LogLevel.Warn
    | LogLevel.Notice
    | LogLevel.Info
    | LogLevel.Verbose;
