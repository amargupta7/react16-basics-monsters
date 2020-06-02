import React from 'react';
import ErrorBoundary from './error-boundary.component';
import BuggyCounter from './buggy-counter.component';

const ErrorTest = () => {
    return (
        <div>
            <p>
                <b>
                    The counter will throw an error when it reaches 5.
                </b>
            </p>
            <hr />
            <ErrorBoundary>
                <p>Counters which are inside the same error boundary.</p>
                <BuggyCounter />
                <BuggyCounter />
            </ErrorBoundary>
            <hr />
            <p>Counters each inside of their own error boundary.</p>
            <ErrorBoundary><BuggyCounter /></ErrorBoundary>
            <ErrorBoundary><BuggyCounter /></ErrorBoundary>
            <hr />
            <p>This Counter has no error boundary, so it will crash the application.</p>
            <BuggyCounter />
        </div>
    );
};

export default ErrorTest;