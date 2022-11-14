import { Exception } from '@the-standard/exceptions';
import { Action } from '@the-standard/types';
import { AssertionResult } from '../../models/assertion-result/assertion-result';

export interface IJestExceptionsExtensionsClient {
    assertActionThrowsExpectedException(
        action: Action<void>,
        expectedException: Exception
    ): AssertionResult;

    assertActionThrowsExpectedExceptionAsync(
        asyncAction: Action<Promise<void>>,
        expectedException: Exception
    ): Promise<AssertionResult>;
}
