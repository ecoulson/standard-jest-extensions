import './@types';
import { Exception } from '@the-standard/exceptions';
import { JestExceptionExtensionsClient } from './clients/exceptions/jest-exceptions-extensions-client';
import { Action } from '@the-standard/types';

const client = new JestExceptionExtensionsClient();

expect.extend({
    toThrowException(action: Action<void>, expectedException: Exception) {
        const assertion = client.assertActionThrowsExpectedException(
            action,
            expectedException
        );
        return {
            message: () => assertion.message,
            pass: assertion.success,
        };
    },
    async toThrowExceptionAsync(
        action: Action<Promise<void>>,
        expectedException: Exception
    ) {
        const assertion = await client.assertActionThrowsExpectedExceptionAsync(
            action,
            expectedException
        );
        return {
            message: () => assertion.message,
            pass: assertion.success,
        };
    },
});
