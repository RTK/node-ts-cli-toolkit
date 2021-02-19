import {setupCLILogLevel} from './logger/logger';

/**
 * Sets up the CLI defaults.
 *  - configures log level
 */
export function setupCLIDefaults(): void {
    setupCLILogLevel();
}
