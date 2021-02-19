import * as yargs from 'yargs';

/**
 * Grants access to arguments passed to the executable.
 *
 * @example
 *  tool --logLevel=verbose
 *
 *  getCLIArgument('logLevel') -> 'verbose'
 *
 * @param key
 */
export function getCLIArgument<T>(key: string): T | null {
    return ((yargs.argv[key] as unknown) as T) ?? null;
}
