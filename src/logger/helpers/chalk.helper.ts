import * as chalk from 'chalk';

import {LogLevelColor} from '../enums/log-level-color.enum';

export function applyChalkColor(color: LogLevelColor, message: string): string {
    switch (color) {
        case LogLevelColor.Blue:
            return chalk.blue(message);

        case LogLevelColor.Green:
            return chalk.green(message);

        case LogLevelColor.Magenta:
            return chalk.magenta(message);

        case LogLevelColor.Red:
            return chalk.red(message);

        case LogLevelColor.Yellow:
            return chalk.yellow(message);

        default:
            return message;
    }
}

export function applyChalkHighlighting(message: string): string {
    return chalk.bold(message);
}
