import * as yargs from 'yargs';

export function getArgument<T>(key: string): T | null {
    return ((yargs.argv[key] as unknown) as T) ?? null;
}
