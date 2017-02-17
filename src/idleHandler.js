const ONE_MINUTE_INTERVAL = 60000;

//idle counter
window.idleTime = 0;

/**
 *
 * @param {number} timeout - The number of minutes before the idle handler should call timeoutHandler
 * @param {function} timeoutHandler - The callback to call when the window times out
 * @returns {function}
 */
export const createIdleHandler = (timeout, timeoutHandler) => {
    return () => {
        let idleInterval = setInterval(() => {
            window.idleTime = window.idleTime + 1;

            if(window.idleTime > timeout) {
                timeoutHandler();
            }
        }, ONE_MINUTE_INTERVAL);

        window.addEventListener('mousemove', () => {
            window.idleTime = 0;
        });

        window.addEventListener('keypress', () => {
            window.idleTime = 0;
        });

        return idleInterval;
    };
};
